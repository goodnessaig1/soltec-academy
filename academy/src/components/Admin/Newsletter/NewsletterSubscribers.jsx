import moment from 'moment';
import Sort from '../../../assets/sort.svg';
import React, { useState } from 'react';
import EmptyMail from '../../../assets/mail1.png';

const NewsletterSubscribers = ({ subscribers, setSubscribers }) => {
  const [showAll, setShowAll] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  let initialValues = 6;

  const handleSort = () => {
    setIsReversed(!isReversed);
    setSubscribers(prevData => [...prevData].reverse());
  };

  return (
    <div className=''>
      {subscribers && subscribers.length > 0 ? (
        <div className='w-full py-3 flex flex-col gap-5 coursesP rounded-[12px]'>
          <div className='flex flex-col gap-3.5'>
            <div className='flex px-2 py-0.5 flex-row w-full items-center'>
              <div className='w-[26%]'>
                <div className='flex flex-row items-center gap-4 px-3'>
                  <h1 className='text-[14px] font-semibold leading-[17px]'>
                    TIME
                  </h1>
                  <div onClick={handleSort} className='hover:cursor-pointer'>
                    <img src={Sort} alt='' />
                  </div>
                </div>
              </div>
              <div className='w-[72%]'>
                <div className='flex flex-row items-center gap-4 px-3'>
                  <h1 className='text-[14px] font-semibold leading-[17px]'>
                    EMAIL
                  </h1>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <div className='px-2 flex flex-col gap-4'>
            {subscribers &&
              subscribers
                .slice(0, showAll ? subscribers.length : initialValues)
                .map((subscriber, index) => (
                  <div key={index} className='flex flex-row items-start w-full'>
                    <div className='w-[26%]'>
                      <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px]'>
                        {moment(subscriber?.time).format('DD MMM YYYY, hh:mmA')}
                      </h1>
                    </div>
                    <div className='w-[72%] whitespace-normal'>
                      <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px] break-all'>
                        {subscriber?.email}
                      </h1>
                    </div>
                  </div>
                ))}
            {subscribers && subscribers.length > 6 && (
              <div
                onClick={() => setShowAll(!showAll)}
                className=' px-1 text-blue-500 hover:cursor-pointer hover:text-blue-700'
              >
                {!showAll ? 'Show all' : 'Show less'}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className='py-14 gap-1 w-full flex-col items-center justify-center flex'>
          <img
            src={EmptyMail}
            alt=''
            className='w-44 h-44 bg-white rounded-full '
          />
          <p className='text-xl font-medium'>There are no subscribers yet!</p>;
        </div>
      )}
    </div>
  );
};

export default NewsletterSubscribers;
