import React from 'react';
import Slider from 'react-slick';

import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import { CarouselCard } from 'components';
import { IImageHit } from 'common/types';

import './Slider.scss';

interface Props {
  data: IImageHit[];
}

const arrowStyle = {
  position: 'absolute',
  zIndex: 1,
  top: 130,
  transform: 'translateY(-50%)',
  width: '48px',
  height: '48px',
  borderRadius: '24px',
  backgroundColor: 'var(--ui-color-primary)',
  border: '1px solid var(--ui-color-primary)',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08)',
};
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...arrowStyle,
        right: '-10px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...arrowStyle,
        left: '-10px',
      }}
      onClick={onClick}
    />
  );
}

const MultipleItems = ({ data }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data.map((imageData: IImageHit, index: number) => (
        <div key={imageData.id} className="card-container">
          <CarouselCard data={imageData} key={index} index={index} />
        </div>
      ))}
    </Slider>
  );
};

export default MultipleItems;
