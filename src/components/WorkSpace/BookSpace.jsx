/* eslint-disable react/prop-types */
import Header from '../Header/Header';
import { useEffect, useRef, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import {
  format,
  addDays,
  isValid,
  isAfter,
  startOfMonth,
  endOfMonth,
  isSameDay,
} from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  Calendar,
  Shorts2,
  Shorts3,
  Starlink1,
} from '../../Utils/Assets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BaseURL } from '../../Utils/BaseUrl';
import axios from 'axios';
import moment from 'moment';
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { validatePhoneNumber } from '../../Utils/Index';

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
  const [isNumberValid, setIsNumberValid] = useState(true);

  const [availableSeats, setAvailableSeats] = useState(1);
  const [planId, setPlanId] = useState(1);
  const [planDate, setPlanDate] = useState(
    new Date().toISOString().slice(0, 10),
  );
  const [plans, setPlans] = useState(null);

  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState(null);

  const seats = Array.from({ length: availableSeats }, (_, index) => ({
    number: (index + 1).toString(),
  }));

  useEffect(() => {
    if (selectedDate) {
      formatDate(selectedDate);
    }
  }, [selectedDate, days, numberOfSeates, planDate]);

  useEffect(() => {
    if (planDate != null) {
      GetAvailableSeats();
    }
  }, [planDate, selectedDate, days]);

  useEffect(() => {
    if (days === 'Daily') {
      if (plans && plans) {
        const filteredDailyData = plans?.filter(item => item.title === 'DAILY');
        setPrice(filteredDailyData[0].price * numberOfSeates);
        setPlanId(filteredDailyData[0].id);
      }
      if (selectedDate !== null) {
        setDuration(`${format(new Date(selectedDate), 'dd MMM yyyy')}`);
      }
    } else if (days === 'Weekly') {
      if (plans && plans) {
        const filteredWeeklyData = plans?.filter(
          item => item.title === 'WEEKLY',
        );
        setPrice(filteredWeeklyData[0].price * numberOfSeates);
        setPlanId(filteredWeeklyData[0].id);
      }
      if (selectedDate !== null) {
        setDuration(
          `${format(new Date(selectedDate), 'dd MMM yyyy')} — ${format(
            endDate,
            'dd MMM yyyy',
          )}`,
        );
      }
    } else if (days === 'Monthly') {
      if (plans && plans) {
        const filteredMonthlyData = plans?.filter(
          item => item.title === 'MONTHLY',
        );
        setPrice(filteredMonthlyData[0].price * numberOfSeates);
        setPlanId(filteredMonthlyData[0].id);
      }
      if (selectedDate !== null) {
        setDuration(
          `${format(new Date(selectedDate), 'dd MMM yyyy')} — ${format(
            endDate,
            'dd MMM yyyy',
          )}`,
        );
      }
    }
  }, [days, numberOfSeates, selectedDate]);

  const handleDateChange = date => {
    const selectedDateString = date;
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

    const today = new Date();
    if (
      isValid(parsedDate) &&
      (isAfter(parsedDate, today) || isSameDay(parsedDate, today))
    ) {
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
    if (duration != '') {
      setData({
        phoneNumber,
        email,
        fullName,
        duration,
        numberOfSeates,
        days,
        price,
        planId,
        planDate,
      });
      setOpenModal(true);
    } else {
      setError('Select date');
    }
  };
  const datePickerRef = useRef(null);
  const openCalendar = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const handleInputChange = e => {
    const number = e.target.value;
    setPhoneNumber(number);
    validatePhoneNumber(number, setIsNumberValid);
  };

  useEffect(() => {
    GetPlans();
  }, [selectedDate]);

  function formatDate(dateString) {
    const date = moment(dateString);
    const newData = date.format('YYYY-MM-DD');
    setPlanDate(newData);
  }

  const GetAvailableSeats = async () => {
    const data = {
      date: planDate,
    };
    try {
      const response = await axios.post(
        `${BaseURL}/workspaces/${planId}/get_available_seats_per_date/`,
        data,
      );
      setAvailableSeats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetPlans = async () => {
    try {
      const response = await axios.get(`${BaseURL}/workspaces/fetch_plans/`);
      setPlans(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      {openModal && <PaymentModal setOpenModal={setOpenModal} data={data} />}

      <div className='w-full px-[20px] md:px-[120px] pt-[90px] pb-[200px] justify-center flex  '>
        <div className='flex lg:flex-row justify-center  gap-[75px] w-full lg:w-[1018px] '>
          <div className=' w-[56%] hidden lg:flex flex-col gap-[23px]'>
            <img src={Starlink1} alt='' />
            <div className='flex flex-row gap-[16px]'>
              <img src={Starlink1} className='w-[31%] rounded-[16px]' alt='' />
              <img src={Shorts2} className='w-[31%] rounded-[16px]' alt='' />
              <img src={Shorts3} className='w-[31%] rounded-[16px]' alt='' />
            </div>
          </div>

          {/*  */}
          <div className='w-full md:w-[512px] lg:w-[365px] flex flex-col gap-[20px]'>
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
                  <div className='flex flex-c flex-row w-full gap-[17px]'>
                    <div className='w-1/2 flex flex-col gap-[8px]'>
                      <h1 className='text-[14px] sm:text-[14px] font-[600]'>
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
                              className='hover:bg-blue-600 w-[172px] hover:text-[#fff] hover:cursor-pointer transition duration-200 ease-in-out px-[12px] rounded-[8px] py-[6px] '
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
                      <div className='seats_bg  h-[50px] hover:bg-[#f3f3f3]  hover:cursor-pointer transition duration-300 px-[16px] rounded-[12px] flex items-center justify-between'>
                        <DatePicker
                          ref={datePickerRef}
                          selected={selectedDate}
                          onChange={handleDateChange}
                          minDate={firstDayOfMonth}
                          maxDate={lastDayOfMonth}
                          onFocus={e => {
                            e.currentTarget.readOnly = true;
                          }}
                          className='outline-none bg-transparent w-full'
                        />
                        <img src={Calendar} onClick={openCalendar} alt='' />
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
                    type='fullName'
                    name='fullName'
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder='Full name'
                    className='w-full outline-none px-[16px] bg-transparent focus:outline-none'
                  />
                </div>
                <div className='flex flex-col gap-[6px]'>
                  <div className='w-full flex items-center input_cont h-[50px] rounded-[12px] '>
                    <input
                      type='text'
                      name='phoneNumber'
                      required
                      value={phoneNumber}
                      onChange={e => handleInputChange(e)}
                      placeholder='Phone number'
                      className='w-full outline-none px-[16px] bg-transparent focus:outline-none'
                    />
                  </div>

                  <AnimatePresence>
                    {!isNumberValid && (
                      <motion.h1
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '16px' }}
                        transition={{ duration: 0.3 }}
                        className='text-red-500 text-[12px]'
                      >
                        Invalid Phone Number
                      </motion.h1>
                    )}
                  </AnimatePresence>
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
                  <h1 className='font-[600] text-[16px] leading-[20.8px]'>
                    Total Price
                  </h1>
                  <h1 className='font-[600] text-[16px] leading-[20.8px]'>
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
  const [loading, setLoading] = useState(false);
  const handlePayment = async () => {
    const values = {
      email: data.email,
      phone_number: data.phoneNumber,
      full_name: data.fullName,
      start_date: data.planDate,
      seats: parseInt(data.numberOfSeates),
    };
    let planId = data.planId;
    setLoading(true);
    try {
      const response = await axios.post(
        `${BaseURL}/workspaces/${planId}/book_workspace/`,
        values,
      );
      window.location.href = response.data.url;
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error('An error occured, please try again', {
        position: 'top-left',
      });
    }
  };
  return (
    <div className='fixed z_indd h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-transparent'>
      <div
        onClick={() => setOpenModal(false)}
        className='w-full z_indd fixed hover:cursor-pointer h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-dOverlay '
      ></div>
      <AnimatePresence className='z_ind'>
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='bg-bg3 z_ind flex flex-col w-[471px] h-[483px] rounded-[24px] p-[32px] '
        >
          <div className=' h-full rounded-[24px] flex flex-col items-center justify-center gap-[56px] '>
            <div className='flex flex-col gap-[25px]'>
              <h1 className='text-center text-[20px] font-[600] leading-[26px] '>
                {data?.days?.toUpperCase()} BOOKING
              </h1>
              <div className='flex flex-col gap-[14px] items-center justify-center'>
                <span className='text-[16px] font-[600] leading-[21px]'>
                  Selected date:{' '}
                  <span className='text-mainBlue'>{data?.duration}</span>
                </span>
                <span className='text-[16px] font-[600] leading-[21px]'>
                  Full name:{' '}
                  <span className='font-[400]'>{data?.fullName}</span>
                </span>
                <span className='text-[16px] font-[600] leading-[21px]'>
                  Email address:{' '}
                  <span className='font-[400]'>{data?.email}</span>
                </span>
                <span className='text-[16px] font-[600] leading-[21px]'>
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
            {!loading ? (
              <div
                onClick={() => handlePayment()}
                className='text-[#fff] flex items-center text-center justify-center w-full h-[56px] rounded-[12px] bg-mainRed hover:bg-red-600 h-[56px] hover:cursor-pointer transition duration-400  font-[600]'
              >
                Make payment
              </div>
            ) : (
              <div className='flex w-full h-[56px] items-center justify-center'>
                <RotatingLines
                  visible={true}
                  height='36'
                  width='36'
                  strokeColor='gray'
                  strokeWidth='3'
                  animationDuration='0.75'
                  ariaLabel='rotating-lines-loading'
                  wrapperStyle={{}}
                  wrapperClass=''
                />
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
