/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion';
import { Oval, ProgressBar } from 'react-loader-spinner';
import { startOfMonth } from 'date-fns';
import { Calendar } from '../../../Utils/Assets';
import DatePicker from 'react-datepicker';
import { apiRequest } from '../../../Utils/ApiRequest';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';

export const OpenDeletePop = ({
  setOpenDeletePop,
  course,
  setCourse,
  handleDelete,
  deleteLoading,
}) => {
  return (
    <div className='fixed z_indd h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-transparent'>
      <div
        onClick={() => setOpenDeletePop(false)}
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
          className='bg-bg3 z_ind flex flex-col w-[420px] h-[300px] bg-white rounded-[8px] p-[32px] '
        >
          <div className='flex flex-col items-center'>
            <div className='flex flex-col  gap-[8px]'>
              <h1 className='text-[24px] text-center font-bold'>
                Are you sure you want to delete this course
              </h1>
              <span className=''>
                This action will permanently delete{' '}
                <strong>{course?.title}</strong> from courses and cannot be
                undone.
              </span>
            </div>

            <div className=' mt-[46px] flex flex-row gap-[16px]'>
              <div
                onClick={() => {
                  setOpenDeletePop(false);
                  setCourse(null);
                }}
                className='w-[150px] h-[56px] hover:bg-[#F5F7F9] cursor-pointer transition ease-in-out duration-300  rounded-[8px] border-[2px] border bg-white flex items-center justify-center '
              >
                Cancel
              </div>
              <div
                onClick={() => {
                  handleDelete();
                }}
                className={`w-[150px] h-[56px]  ${
                  !deleteLoading ? 'bg-mainRed hover:bg-red-600' : 'bg-red-200'
                } cursor-pointer transition ease-in-out duration-300  rounded-[8px] ed text-white flex items-center justify-center `}
              >
                {!deleteLoading ? (
                  <span>Delete</span>
                ) : (
                  <div className='flex items-center justify-center'>
                    <Oval
                      visible={true}
                      height='30'
                      width='30'
                      color='#fff'
                      ariaLabel='oval-loading'
                      wrapperStyle={{}}
                      wrapperClass=''
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export const OpenToggleModal = ({
  setToggleClick,
  isChecked,
  deleteLoading,
}) => {
  return (
    <div className='fixed z_indd h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-transparent'>
      <div
        onClick={() => setToggleClick(false)}
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
          className='bg-bg3 z_ind flex flex-col w-[412px] h-[224px] bg-white rounded-[24px] p-[24px] '
        >
          <div className='flex flex-col items-center gap-[16px]'>
            <h1 className='text-[16px] leading-[24px] text-center font-semibold'>
              ARE YOU SURE YOU WANT TO TOGGLE COHORT {isChecked && 'OFF'}?
            </h1>
            <span className='text-center font-normal inter_ text-[16px] leading-[24px]'>
              Turning it off will automatically end any ongoing cohort
            </span>

            <div className=' flex flex-row gap-[16px]'>
              <div
                onClick={() => setToggleClick(false)}
                className='w-[172px] h-[56px] hover:bg-[#F5F7F9] cursor-pointer transition ease-in-out duration-300  rounded-[16px] border-[2px] border bg-[#EEEEEE] flex items-center justify-center '
              >
                CANCEL
              </div>
              <div
                onClick={() => setToggleClick(false)}
                className={`w-[172px] h-[56px]  ${
                  !deleteLoading ? 'bg-mainRed hover:bg-red-600' : 'bg-red-200'
                } cursor-pointer transition ease-in-out duration-300  rounded-[8px] ed text-white flex items-center justify-center `}
              >
                {!deleteLoading ? (
                  <span>YES</span>
                ) : (
                  <div className='flex items-center justify-center'>
                    <Oval
                      visible={true}
                      height='30'
                      width='30'
                      color='#fff'
                      ariaLabel='oval-loading'
                      wrapperStyle={{}}
                      wrapperClass=''
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export const CreateCohort = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  handleDateChange,
  setOpenCreateCohort,
}) => {
  const today = new Date();
  const firstDayOfMonth = startOfMonth(today);
  const [startDateErr, setStartDateErr] = useState('');
  const [endDateErr, setEndtDateErr] = useState('');
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const openCalendar = () => {
    if (startDateRef.current) {
      startDateRef.current.setOpen(true);
    }
  };
  const openCalendar2 = () => {
    if (endDateRef.current) {
      endDateRef.current.setOpen(true);
    }
  };

  const handleSubmit = async () => {
    if (startDate && endDate) {
      setLoading(true);
      try {
        let data = {
          start_date: startDate?.toISOString(),
          end_date: endDate?.toISOString(),
        };
        const response = await apiRequest('POST', `/cohort/`, data);
        console.log(response?.data);
        setLoading(false);
        toast.success('Success', {
          position: 'top-right',
        });
        setOpenCreateCohort(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error('An error occured !', {
          position: 'top-left',
        });
      }
    } else {
      alert('Please complete all fields');
    }
  };
  return (
    <div className='fixed z_indd h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-transparent'>
      <div
        onClick={() => setOpenCreateCohort(false)}
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
          className='bg-bg3 z_ind flex flex-col w-[412px] h-[323px] bg-white rounded-[24px] p-[24px] '
        >
          <div className='flex flex-col items-center gap-[22px] w-full'>
            <h1 className='text-[16px] leading-[24px] text-center w-full font-semibold'>
              CREATE COHORT
            </h1>
            <form
              action=''
              className='w-full flex flex-col gap-[22px]'
              onSubmit={e => e.preventDefault()}
            >
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-semibold text-[14px] leading-[21px]'
                  htmlFor='start_date'
                >
                  Start date
                </label>
                <div className='w-full course_input px-[10px] pl-[16px] flex justify-between items-center rounded-[12px] h-[40px] text-[14px]'>
                  <DatePicker
                    ref={startDateRef}
                    selected={startDate}
                    onChange={date =>
                      handleDateChange(date, setStartDate, setStartDateErr)
                    }
                    minDate={firstDayOfMonth}
                    onFocus={e => {
                      e.currentTarget.readOnly = true;
                    }}
                    className='outline-none bg-transparent w-ful hover:cursor-pointer w-[300px]'
                  />
                  <img src={Calendar} onClick={openCalendar} alt='' />
                </div>
                {startDateErr && (
                  <div className='text-[14px] text-mainRed absolute mt-[66px]'>
                    {startDateErr}
                  </div>
                )}
              </div>
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-semibold text-[14px] leading-[21px]'
                  htmlFor='start_date'
                >
                  End date
                </label>
                <div className='w-full course_input px-[10px] pl-[16px] flex justify-between items-center rounded-[12px] h-[40px] text-[14px]'>
                  <DatePicker
                    ref={endDateRef}
                    selected={endDate}
                    onChange={date =>
                      handleDateChange(date, setEndDate, setEndtDateErr)
                    }
                    minDate={firstDayOfMonth}
                    onFocus={e => {
                      e.currentTarget.readOnly = true;
                    }}
                    className='outline-none bg-transparent w-ful hover:cursor-pointer w-[300px]'
                  />
                  <img src={Calendar} onClick={openCalendar2} alt='' />
                </div>
                {endDateErr && (
                  <div className='text-[14px] text-mainRed absolute mt-[66px]'>
                    {endDateErr}
                  </div>
                )}
              </div>

              {!loading ? (
                <button
                  className='w-full h-[56px] rounded-[16px] flex items-center justify-center bg-[#DDEAFF] hover:opacity-[0.7] duration-300 transition '
                  type='submit'
                  onClick={handleSubmit}
                >
                  <span className='text-[16px] font-semibold text-[#0043CE] leading-[24px]'>
                    Create
                  </span>
                </button>
              ) : (
                <div className='w-full flex items-center justify-center h-[56px]'>
                  <ProgressBar
                    visible={true}
                    height='60'
                    width='60'
                    color='#f1f1f1'
                    barColor='gray'
                    borderColor='black'
                    ariaLabel='progress-bar-loading'
                    wrapperStyle={{}}
                    wrapperClass=''
                  />
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
