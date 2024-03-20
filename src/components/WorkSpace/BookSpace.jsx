/* eslint-disable react/prop-types */
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import {
  format,
  addDays,
  isValid,
  isBefore,
  startOfMonth,
  endOfMonth,
} from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  Codes,
  Meet,
  Starlink1,
  Vector1,
  Vector2,
} from '../../Utils/Assets';

const BookSpace = () => {
  const [days, setDays] = useState('Daily');
  const [openSeats, setOpenSeats] = useState(false);
  const [price, setPrice] = useState(null);
  const [email, setEmail] = useState('');
  const [numberOfSeates, setNumberOfSeates] = useState(1);
  const [duration, setDuration] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState(null);
  const seats = [
    { number: '1' },
    { number: '2' },
    { number: '3' },
    { number: '4' },
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const numberOfSeats = parseInt(numberOfSeates, 10);

    if (days === 'Daily') {
      setPrice(3000 * numberOfSeats);
      if (selectedDate !== null) {
        setDuration(`${format(new Date(selectedDate), 'dd MMM yyyy')}`);
      }
    } else if (days === 'Weekly') {
      setPrice(12000 * numberOfSeats);
      if (selectedDate !== null) {
        setDuration(
          `${format(new Date(selectedDate), 'dd MMM yyyy')} — ${format(
            endDate,
            'dd MMM yyyy',
          )}`,
        );
      }
    } else if (days === 'Monthly') {
      setPrice(36000 * numberOfSeats);
      if (selectedDate !== null) {
        setDuration(
          `${format(new Date(selectedDate), 'dd MMM yyyy')} — ${format(
            endDate,
            'dd MMM yyyy',
          )}`,
        );
      }
    }
  }, [days, numberOfSeates]);

  const handleDateChange = event => {
    const selectedDateString = event.target.value;
    const parsedDate = new Date(selectedDateString);
    let endDate = addDays(
      parsedDate,
      days === 'Daily'
        ? 0
        : days === 'Weekly'
        ? 6
        : days === 'Monthly'
        ? 30
        : null,
    );
    if (days == 'Daily') {
      setDuration(`${format(new Date(selectedDateString), 'dd MMM yyyy')}`);
    } else {
      setDuration(
        `${format(new Date(selectedDateString), 'dd MMM yyyy')} — ${format(
          endDate,
          'dd MMM yyyy',
        )}`,
      );
    }

    if (isValid(parsedDate) && !isBefore(parsedDate, new Date())) {
      setSelectedDate(selectedDateString);
      setError(null);
    } else {
      setError('You can only select future dates.');
      setSelectedDate(null);
    }
  };

  let endDate = null;
  if (selectedDate) {
    const parsedDate = new Date(selectedDate);
    endDate = addDays(
      parsedDate,
      days === 'Daily'
        ? 0
        : days === 'Weekly'
        ? 6
        : days === 'Monthly'
        ? 30
        : null,
    );
  }

  const today = new Date();
  const firstDayOfMonth = startOfMonth(today);
  const lastDayOfMonth = endOfMonth(today);

  const handleCheckout = event => {
    event.preventDefault();
    setData({
      phoneNumber,
      email,
      fullName,
      duration,
      numberOfSeates,
      days,
      price,
    });
    setOpenModal(true);
  };
  return (
    <div>
      <Header />
      {openModal && <PaymentModal setOpenModal={setOpenModal} data={data} />}

      <div className='w-full px-[20px] md:px-[120px] pt-[90px] pb-[200px] justify-center flex  '>
        <div className='flex lg:flex-row  gap-[75px] w-full lg:w-[1018px] '>
          <div className=' w-[56%] hidden lg:flex flex-col gap-[23px]'>
            <img src={Starlink1} alt='' />
            <div className='flex flex-row gap-[16px]'>
              <img src={Starlink1} className='w-[31%] rounded-[16px]' alt='' />
              <img src={Meet} className='w-[31%] rounded-[16px]' alt='' />
              <img src={Codes} className='w-[31%] rounded-[16px]' alt='' />
            </div>
          </div>

          {/*  */}
          <div className='w-full md:w-[365px] flex flex-col gap-[20px]'>
            <div className='flex flex-row gap-[12px] items-center'>
              <div
                onClick={() => setDays('Daily')}
                className={`w-1/3 md:w-[116px] h-[40px] flex items-center justify-center hover:cursor-pointer transition duration-300 ease-in-out rounded-[12px] font-[500] ${
                  days === 'Daily'
                    ? 'bg-[#000] text-[#fff]'
                    : 'text-[#000] hover:bg-[#f1f1f1]'
                }  `}
              >
                Daily
              </div>
              <div
                onClick={() => setDays('Weekly')}
                className={`w-1/3 md:w-[116px] h-[40px] flex items-center justify-center hover:cursor-pointer transition duration-300 ease-in-out rounded-[12px] font-[500] ${
                  days === 'Weekly'
                    ? 'bg-[#000] text-[#fff]'
                    : 'text-[#000] hover:bg-[#f1f1f1]'
                }  `}
              >
                Weekly
              </div>
              <div
                onClick={() => setDays('Monthly')}
                className={`w-1/3 md:w-[116px] h-[40px] flex items-center justify-center hover:cursor-pointer  transition duration-300 ease-in-out rounded-[12px] font-[500] ${
                  days === 'Monthly'
                    ? 'bg-[#000] text-[#fff]'
                    : 'text-[#000] hover:bg-[#f1f1f1]'
                }  `}
              >
                Monthly
              </div>
            </div>
            <form
              action=''
              className='w-full'
              onSubmit={event => handleCheckout(event)}
            >
              <div className='flex flex-col w-full gap-[20px]'>
                <div className='flex flex-col gap-[17px]'>
                  <div className='flex flex-row w-full gap-[17px]'>
                    <div className='w-1/2 flex flex-col gap-[8px]'>
                      <h1 className='text-[10px] sm:text-[14px] font-[600]'>
                        Select number of seats
                      </h1>
                      <div
                        onClick={() => setOpenSeats(!openSeats)}
                        className='seats_bg h-[50px] hover:bg-[#f3f3f3] hover:cursor-pointer transition duration-300 px-[16px] rounded-[12px] flex items-center justify-between'
                      >
                        <span>{numberOfSeates}</span>
                        <img src={ArrowDown} alt='' />
                      </div>
                      {openSeats && (
                        <div
                          onClick={() => setOpenSeats(!openSeats)}
                          className='absolute top-0 left-0 right 0 bg-[transparent] w-full h-full z-1 '
                        ></div>
                      )}
                      {openSeats && (
                        <div className='absolute bg-[#fff] z-3 mt-[90px] rounded-[8px] flex flex-col border '>
                          {seats.map((seat, index) => (
                            <div
                              key={index}
                              onClick={() => (
                                setNumberOfSeates(seat.number),
                                setOpenSeats(false)
                              )}
                              className='hover:bg-blue-600 hover:text-[#fff] hover:cursor-pointer transition duration-200 ease-in-out px-[12px] rounded-[8px] py-[6px] '
                            >
                              {seat?.number}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className='w-1/2 flex flex-col gap-[8px]'>
                      <h1 className='text-[10px] sm:text-[14px] font-[600]'>
                        Select Date
                      </h1>
                      <div className='seats_bg h-[50px] hover:bg-[#f3f3f3]  hover:cursor-pointer transition duration-300 px-[16px] rounded-[12px] flex items-center justify-between'>
                        <input
                          type='date'
                          name='duration'
                          value={selectedDate || ''}
                          onChange={event => {
                            handleDateChange(event);
                          }}
                          min={format(firstDayOfMonth, 'yyyy-MM-dd')}
                          max={format(lastDayOfMonth, 'yyyy-MM-dd')}
                          className='outline-none bg-transparent w-full'
                        />
                      </div>
                    </div>
                  </div>
                  <AnimatePresence>
                    {selectedDate && (
                      <motion.h1
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '24px' }}
                        transition={{ duration: 0.3 }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <span className='text-[14px] font-[400]'>
                          Selected date:{' '}
                        </span>
                        <span className='text-[14px] text-mainBlue font-[600]'>
                          {selectedDate
                            ? `${format(new Date(selectedDate), 'dd MMM yyyy')} 
                        ${
                          format(endDate, 'dd MMM yyyy') ==
                          format(new Date(selectedDate), 'dd MMM yyyy')
                            ? ''
                            : `— ${format(endDate, 'dd MMM yyyy')}`
                        }
                        `
                            : ''}
                        </span>
                      </motion.h1>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {error && (
                      <motion.h1
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '24px' }}
                        transition={{ duration: 0.3 }}
                        className='text-red-500'
                      >
                        {error}
                      </motion.h1>
                    )}
                  </AnimatePresence>
                </div>
                <div className='w-full flex items-center input_cont h-[50px] rounded-[12px] '>
                  <input
                    autoComplete='fullName'
                    type='fullName'
                    name='fullName'
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder='Full name'
                    className='w-full outline-none px-[16px] bg-transparent focus:outline-none'
                  />
                </div>
                <div className='w-full flex items-center input_cont h-[50px] rounded-[12px] '>
                  <input
                    autoComplete='phoneNumber'
                    type='phoneNumber'
                    name='phoneNumber'
                    required
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    placeholder='Phone number'
                    className='w-full outline-none px-[16px] bg-transparent focus:outline-none'
                  />
                </div>
                <div className='w-full flex items-center input_cont h-[50px] rounded-[12px] '>
                  <input
                    autoComplete='email'
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email address'
                    className='w-full outline-none px-[16px] bg-transparent focus:outline-none'
                  />
                </div>

                <div className=' total_p  h-[50px] flex flex-row items-center justify-between'>
                  <h1 className='font-[600] text-[16px] leading-[20.8]'>
                    Total Price
                  </h1>
                  <h1 className='font-[600] text-[16px] leading-[20.8]'>
                    {price?.toLocaleString()}
                  </h1>
                </div>
                <button
                  type='submit'
                  className='text-[#fff] flex items-center text-center justify-center h-[56px] rounded-[12px] bg-mainRed hover:bg-red-600 h-[56px] hover:cursor-pointer transition duration-400 font-[600]'
                >
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSpace;

const PaymentModal = ({ data, setOpenModal }) => {
  const [type, setType] = useState('Transfer');

  return (
    <div className='fixed z_indd h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-transparent'>
      <div
        onClick={() => setOpenModal(false)}
        className='w-full z_indd fixed hover:cursor-pointer h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-dOverlay '
      ></div>
      <AnimatePresence className='z_ind'>
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ x: '100%', opacity: 0 }}
          className='bg-white z_ind flex flex-col lg:flex-row w-[99%] sml:w-[88%] md:w-[66%] lg:w-[76%] xl:w-[62%] h-[660px] lg:h-[419px] rounded-[24px]'
        >
          <div className='lg:w-1/2 bg-bg3 h-full rounded-t-[24px] lg:rounded-tr-[0] lg:rounded-l-[24px] flex flex-col items-center justify-center gap-[32px] lg:gap-[56px] '>
            <div className='flex flex-col gap-[12px] lg:gap-[25px]'>
              <h1 className='text-center text-[20px] font-[600] leading-[26px] '>
                {data?.days?.toUpperCase()} BOOKING
              </h1>
              <div className='flex flex-col gap-[8px] lg:gap-[14px] items-center justify-center'>
                <span className='text-[14px] lg:text-[16px] font-[600] leading-[21px]'>
                  Selected date:{' '}
                  <span className='text-mainBlue'>{data?.duration}</span>
                </span>
                <span className='text-[14px] lg:text-[16px] font-[600] leading-[21px]'>
                  Full name:{' '}
                  <span className='font-[400]'>{data?.fullName}</span>
                </span>
                <span className='text-[14px] lg:text-[16px] font-[600] leading-[21px]'>
                  Email address:{' '}
                  <span className='font-[400]'>{data?.email}</span>
                </span>
                <span className='text-[14px] lg:text-[16px] font-[600] leading-[21px]'>
                  Phone number:{' '}
                  <span className='font-[400]'>{data?.phoneNumber}</span>
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-[2px] items-center justify-center'>
              <h1 className='text-[16px] leading-[20px] font-[400]'>
                TOTAL PRICE
              </h1>
              <h1 className='font-[700] text-[40px] leading-[52px]'>
                {data?.price?.toLocaleString()}
              </h1>
            </div>
          </div>
          <div className='lg:w-1/2 px-[16px] flex z-50 h-full items-center justify-center'>
            <div className='w-[350px]'>
              <div className='flex flex-col gap-[14px]'>
                <div className='card p-[16px] rounded-[12px] flex flex-col gap-[8px]'>
                  <div
                    onClick={() => setType('Transfer')}
                    className='flex gap-[8px] hover:cursor-pointer'
                  >
                    {type === 'Transfer' ? (
                      <img src={Vector1} alt='' />
                    ) : (
                      <img src={Vector2} alt='' />
                    )}
                    <h1 className='font-[600] text-[14px]'>Bank Transfer</h1>
                  </div>
                </div>
                <div className='card p-[16px] rounded-[12px] flex flex-col gap-[8px]'>
                  <div
                    onClick={() => setType('Paypal')}
                    className='flex gap-[8px] hover:cursor-pointer'
                  >
                    {type === 'Paypal' ? (
                      <img src={Vector1} alt='' />
                    ) : (
                      <img src={Vector2} alt='' />
                    )}
                    <h1 className='font-[600] text-[14px]'>Paypal</h1>
                  </div>
                </div>
                <div className='card p-[16px] rounded-[12px] flex flex-col gap-[8px]'>
                  <div
                    onClick={() => setType('Card')}
                    className='flex gap-[8px] hover:cursor-pointer '
                  >
                    {type === 'Card' ? (
                      <img src={Vector1} alt='' />
                    ) : (
                      <img src={Vector2} alt='' />
                    )}
                    <h1 className='font-[600] text-[14px]'>Credit Card</h1>
                  </div>
                </div>
                <div className='text-[#fff] flex items-center text-center justify-center h-[56px] rounded-[12px] bg-mainRed hover:bg-red-600 h-[56px] hover:cursor-pointer transition duration-400  font-[600]'>
                  Make payment
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
