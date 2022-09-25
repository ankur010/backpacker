import React, {
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
  TouchEvent,
} from 'react';

import './Carousel.scss';
import { CarouselCard } from 'components';
import { IImageHit } from 'common/types';

interface Props {
  data: IImageHit[];
}
const Carousel = ({ data }: Props) => {
  const ref = useRef<any>(null);
  const item = useRef<any>(null);
  const observer = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [show, setShow] = useState<number>(0);
  const [hideNext, setHideNext] = useState<boolean>(false);
  const [showingLast, setShowingLast] = useState<boolean>(false);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const length = data.length;

  useLayoutEffect(() => {
    setShow(Math.floor(ref.current.offsetWidth / item.current.offsetWidth));
  }, []);

  const lastItem = useCallback((node: any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowingLast(true);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  const next = () => {
    setCurrentIndex((prevState: number) => prevState + 1);
    if (showingLast) {
      setHideNext(true);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState: number) => prevState - 1);
      setHideNext(false);
      setShowingLast(false);
    }
  };
  const handleTouchStart = (e: TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      next();
    }
    if (diff < -5) {
      prev();
    }
    setTouchPosition(null);
  };

  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="carousel-wrapper">
        <button
          disabled={!(currentIndex > 0)}
          onClick={prev}
          className="left-arrow"
        >
          &lt;
        </button>

        <div className="carousel-content-wrapper">
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              //transition: !transitionEnabled ? 'none' : undefined,
            }}
            ref={ref}
          >
            {data.map((imageData: IImageHit, index: number) =>
              index === length - 1 ? (
                <div
                  ref={lastItem}
                  key={imageData.id}
                  className="card-container"
                >
                  <CarouselCard data={imageData} index={index} />
                </div>
              ) : (
                <div ref={item} key={imageData.id} className="card-container">
                  <CarouselCard data={imageData} index={index} />
                </div>
              ),
            )}
          </div>
        </div>

        <button disabled={hideNext} onClick={next} className="right-arrow">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
