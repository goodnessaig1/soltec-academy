import React, { useState } from 'react';

const ImgLoader = ({ src, className, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      {!loaded && (
        <div
          style={{
            backgroundColor: 'white',
          }}
        />
      )}
      <img
        src={src}
        className={className}
        alt={alt}
        onLoad={handleLoad}
        style={loaded ? {} : { display: 'none' }}
        {...props}
      />
    </>
  );
};

export default ImgLoader;

// import React from 'react';

// const ImgLoader = ({ src, className, alt, ...props }) => {
//   return <img src={src} className={className} alt={alt} {...props} />;
// };

// export default ImgLoader;
