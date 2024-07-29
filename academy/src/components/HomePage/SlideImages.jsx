import React from 'react';
import {
  Group11,
  Group2,
  Group3,
  Group4,
  AcademyLogo,
  Office,
} from '../../Utils/Assets';

const SlideImages = ({ handleImageLoad }) => {
  return (
    <div>
      <img
        src={Group11}
        alt='slide-images'
        onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
      <img
        src={AcademyLogo}
        alt='slide-images'
        // onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
      <img
        src={Office}
        alt='slide-images'
        // onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
      <img
        src={Group2}
        alt='slide-images'
        // onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
      <img
        src={Group3}
        alt='slide-images'
        // onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
      <img
        src={Group4}
        alt='slide-images'
        // onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default SlideImages;
