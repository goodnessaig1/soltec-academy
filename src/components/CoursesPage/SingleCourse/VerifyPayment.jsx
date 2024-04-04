/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const VerifyPayment = () => {
  const [loading, setloading] = useState(true);
  const { reference } = useParams();
  console.log(reference);
  return (
    <div>
      {!loading ? (
        <div className=''></div>
      ) : (
        <div className='w-full h-[100vh] flex items-center justify-center'>
          <RotatingLines
            visible={true}
            height='50'
            width='50'
            strokeColor='green'
            strokeWidth='3'
            animationDuration='0.75'
            ariaLabel='rotating-lines-loading'
            wrapperStyle={{}}
            wrapperClass=''
          />
        </div>
      )}
    </div>
  );
};

export default VerifyPayment;
