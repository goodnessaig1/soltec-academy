import React from 'react';

const ImgLoader = ({ src, className, alt, ...props }) => {
  return <img src={src} className={className} alt={alt} {...props} />;
};

export default ImgLoader;
