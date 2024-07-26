import React from 'react';
import Group11 from '../../assets/group11.png';
import Group2 from '../../assets/group2.png';
import Group3 from '../../assets/group3.png';
import Group4 from '../../assets/group4.png';
import AcademyLogo from '../../assets/academy-logo-bla.png';

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
        onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
      <img
        src={Group2}
        alt='slide-images'
        onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
      <img
        src={Group3}
        alt='slide-images'
        onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
      <img
        src={Group4}
        alt='slide-images'
        onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default SlideImages;
