import React, { useState, useRef, useLayoutEffect, useCallback } from 'react';

import './Carousel.scss';
import { CarouselCard } from 'components';
import { IImageHit } from 'common/types';

interface Props {
  children?: React.ReactElement[];
  show: number;
  infiniteLoop: boolean;
  data: IImageHit[];
}
const Carousel = ({ data }: Props) => {
  const ref = useRef<any>(null);
  const item = useRef<any>(null);
  const observer: any = useRef();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [show, setShow] = useState(0);
  const length = data.length;

  // const [touchPosition, setTouchPosition] = useState<number | null>(null);

  useLayoutEffect(() => {
    // eslint-disable-next-line no-console
    console.log('ref.current.offsetWidth', ref.current.offsetWidth);
    // eslint-disable-next-line no-console
    console.log('item.current.offsetWidth', item.current.offsetWidth);
    setShow(Math.floor(ref.current.offsetWidth / item.current.offsetWidth));
  }, []);

  const lastItem = useCallback((node: any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      // eslint-disable-next-line no-console
      console.log('entries', entries);
      if (entries[0].isIntersecting) {
        // eslint-disable-next-line no-console
        console.log('Showing Last');
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  const next = () => {
    if (currentIndex < length) {
      setCurrentIndex((prevState: number) => prevState + show);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState: number) => prevState - show);
    }
  };

  // eslint-disable-next-line no-console
  console.log('currentIndex', currentIndex, show, length);
  return (
    <div ref={ref} className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
        <div className="carousel-content-wrapper">
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
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

        {currentIndex < length - show && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
