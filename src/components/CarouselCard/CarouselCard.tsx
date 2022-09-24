import React from 'react';
import { FiEye, FiThumbsUp } from 'react-icons/fi';

import { blackLogo } from 'assets';
import { IImageHit } from 'common/types';
import { compactNumber } from 'common/utils/helper';
import './CarouselCard.scss';
interface Props {
  data: IImageHit;
  index: number;
}
const CarouselCard = ({ data, index }: Props) => {
  const { webformatURL, userImageURL, user, likes, views, tags } = data;
  return (
    <>
      <div className="ribbonUp">
        <img src={blackLogo} alt="BackPacker logo" />
      </div>
      <div className="image-container">
        <img src={webformatURL} alt={user} />
        <p className="image-text">{user + '--' + index}</p>
      </div>
      <div className="content-container">
        <div className="user-container">
          <img src={userImageURL} alt={user} />

          <div className="username-container">
            <div className="username-container1">
              <p className="username">{user}</p>
              <div className="action-container">
                <span className="likes">
                  <FiThumbsUp className="icon" />
                  <span className="count">{compactNumber(likes)}</span>
                </span>
                <span className="views">
                  <FiEye className="icon" />
                  <span className="count">{compactNumber(views)}</span>
                </span>
              </div>
            </div>

            <div className="tags">
              {tags.split(',').map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
