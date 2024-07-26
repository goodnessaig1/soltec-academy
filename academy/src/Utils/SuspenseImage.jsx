import React, { Suspense, lazy } from 'react';

const ImgLoader = lazy(() => import('./useImage'));

const LazyImage = ({ src, alt, className, ...props }) => {
  return (
    <Suspense fallback={<div style={{ backgroundColor: 'white' }} />}>
      <ImgLoader src={src} className={className} alt={alt} {...props} />
    </Suspense>
  );
};

export default LazyImage;

// import React, { Suspense, lazy } from 'react';

// const Img = lazy(() => import('./useImage'));

// const LazyImage = ({ src, alt, className, ...props }) => {
//   return (
//     <Suspense
//       fallback={
//         <div
//           style={{ backgroundColor: 'white', height: '100%', width: '100%' }}
//         />
//       }
//     >
//       <Img src={src} className={className} alt={alt} {...props} />
//     </Suspense>
//   );
// };

// export default LazyImage;
