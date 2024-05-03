/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import {
  AddRound,
  BackArrow,
  Calendar,
  Edit,
  Trahs,
} from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import Sort from '../../../assets/sort.svg';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { isValid, isBefore, startOfMonth, endOfMonth } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import moment from 'moment';
import { toast } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import { LoadingFetching } from './LoadingFetching';
import { apiRequest } from '../../../Utils/ApiRequest';

const AdminCourses = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState(null);

  const [openDeletePop, setOpenDeletePop] = useState(false);
  const [course, setCourse] = useState(null);

  const handleToggle = () => {
    setIsChecked(prev => !prev);
  };
  const navigate = useNavigate();
  const today = new Date();
  const firstDayOfMonth = startOfMonth(today);
  const lastDayOfMonth = endOfMonth(today);

  const handleDateChange = date => {
    const selectedDateString = date;
    const parsedDate = new Date(selectedDateString);

    if (isValid(parsedDate) && !isBefore(parsedDate, new Date())) {
      setSelectedDate(selectedDateString);
      setError(null);
    } else {
      setError('You can only select future dates.');
      setSelectedDate(null);
    }
  };

  const datePickerRef = useRef(null);
  const openCalendar = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState(null);

  const getCourses = async () => {
    setLoading(true);
    try {
      const response = await apiRequest('GET', `/courses/all/`);
      setLoading(false);
      setCourses(response.data);
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };
  useEffect(() => {
    getCourses();
  }, []);

  const [deleteLoading, setDeleteLoading] = useState(false);
  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      await apiRequest('DELETE', `/courses/${course.id}/`);
      const filteredCourses = courses.filter(
        item => item.id != `${course?.id}`,
      );
      setCourses(filteredCourses);
      setOpenDeletePop(false);
      setCourse(null);
      setDeleteLoading(false);
      toast.success('Successfully deleted', {
        position: 'top-right',
      });
    } catch (error) {
      setDeleteLoading(false);
      console.log(error);
      toast.error('An error occured, please try again', {
        position: 'top-right',
      });
    }
  };

  const handleIsActive = async (index, item) => {
    setCourses(prevCourses => {
      const newCourses = [...prevCourses];
      newCourses[index].is_active = !newCourses[index].is_active;
      return newCourses;
    });
    try {
      await apiRequest('POST', `/courses/${item.id}/toggle_active/`);
      toast.success('Successfully deleted', {
        position: 'top-right',
      });
    } catch (error) {
      console.log(error);
      toast.error('An error occured, please try again', {
        position: 'top-right',
      });
    }
  };

  return (
    <Layout text='Courses'>
      <div className='w-full flex flex-col gap-[36px] px-[36px] pb-[140px]'>
        {openDeletePop && (
          <OpenDeletePop
            openDeletePop={openDeletePop}
            setOpenDeletePop={setOpenDeletePop}
            courseId={course}
            setCourseId={setCourse}
            setCourse={setCourse}
            deleteLoading={deleteLoading}
            setDeleteLoading={setDeleteLoading}
            handleDelete={handleDelete}
          />
        )}
        <div className='flex flex-row justify-between items-center '>
          <div className='w-[39px] h-[39px] flex items-center justify-center bg-backBg rounded-[50%]'>
            <img src={BackArrow} alt='' />
          </div>
          <div
            onClick={() => navigate('/admin/courses/add-course')}
            className='w-[150px] h-[48px] flex flex-row items-center justify-center px-[16px] py-[18px] hover:bg-[#f1f1f1] hover:cursor-pointer transition duration-300 rounded-[16px] gap-[8px] addCourse'
          >
            <img src={AddRound} alt='' />
            <h1 className='font-[600] text-nowrap text-[16px] leading-[24px]  '>
              New Course
            </h1>
          </div>
        </div>
        <div className='flex flex-col cohotBg w-[397px] h-[134px] p-[16px] rounded-[12px] gap-[18px]'>
          <h1 className='font-[500] inter__ text-[14px] leading-[17px]'>
            NEXT COHORT
          </h1>
          <div className='flex flex-row w-full gap-[10px]'>
            <div className='flex flex-col gap-[6px] w-[43%]'>
              <div className='font-[600] text-[14px] leading-[21px]'>
                Toggle ON/OFF
              </div>
              <label className='toggle-button'>
                <input
                  type='checkbox'
                  checked={isChecked}
                  onChange={handleToggle}
                  className='toggle-input'
                />
                <span className='toggle-slider'></span>
              </label>
            </div>
            <div className='flex flex-col gap-[6px] w-[56%]'>
              <h1 className='font-[600] text-[14px] leading-[21px]'>
                Set date
              </h1>
              <div className='seats_bg bg-[#fff] h-[50px] hover:bg-[#f3f3f3]  hover:cursor-pointer transition duration-300 px-[16px] rounded-[12px] flex items-center justify-between'>
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
        </div>
        {!loading ? (
          <div className='flex flex-col gap-[16px]'>
            <h1 className='inter__ text-[14px] leading-[17px] '>COURSES</h1>

            <div className='w-full flex flex-col coursesP rounded-[12px]'>
              {/* Head */}
              <div className='flex flex-row w-full items-start'>
                <div className='w-[20%]'>
                  <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                    <h1 className='text-[14px] font-[600] leading-[17px]'>
                      DATE CREATED
                    </h1>
                    <img src={Sort} alt='' />
                  </div>
                </div>
                <div className='w-[27%]'>
                  <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                    <h1 className='text-[14px] font-[600] leading-[17px]'>
                      COURSE
                    </h1>
                  </div>
                </div>
                <div className='w-[13%]'>
                  <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                    <h1 className='text-[14px] font-[600] leading-[17px]'>
                      COLOR CODE
                    </h1>
                  </div>
                </div>
                <div className='w-[12%]'>
                  <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                    <h1 className='text-[14px] font-[600] leading-[17px]'>
                      PRICE
                    </h1>
                  </div>
                </div>
                <div className='w-[12%]'>
                  <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                    <h1 className='text-[14px] font-[600] leading-[17px]'>
                      STATUS
                    </h1>
                  </div>
                </div>
                <div className='w-[15%]'>
                  <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                    <h1 className='text-[14px] font-[600] leading-[17px]'></h1>
                  </div>
                </div>
              </div>
              {/* Data */}
              {courses &&
                courses.map((item, index) => (
                  <div
                    key={index}
                    className='flex flex-row items-start w-full min-h-[48px]'
                  >
                    <div className='w-[20%] flex'>
                      <h1 className='text-[12px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                        {moment(item?.date_created).format(
                          'DD MMM YYYY, hh:mmA',
                        )}
                      </h1>
                    </div>
                    <div className='w-[27%] whitespace-normal'>
                      <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px] break-all'>
                        {item?.title}
                      </h1>
                    </div>
                    <div className='w-[13%]'>
                      <div className='flex flex-row items-center '>
                        <div
                          style={{ backgroundColor: item?.color_code }}
                          className='w-[14px] h-[14px] rounded-[4px]'
                        />
                        <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                          {item.color_code}
                        </h1>
                      </div>
                    </div>
                    <div className='w-[12%]'>
                      <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                        #{item?.price}
                      </h1>
                    </div>
                    <div
                      onClick={() => handleIsActive(index, item)}
                      className='w-[12%] py-[10px] px-[12px] hover:cursor-pointer'
                    >
                      {item?.is_active ? (
                        <div className='w-[70px] flex h-[24px] rounded-[50px] text-mainGreen items-center justify-center bg-activeBg text-[12px]'>
                          Active
                        </div>
                      ) : (
                        <div className='w-[70px] flex h-[24px] rounded-[50px] text-mainRed items-center justify-center  bg-unactiveBg text-[12px]'>
                          Inactive
                        </div>
                      )}
                    </div>
                    <div className='w-[15%] flex flex-row   gap-[10px] items-center justify-center'>
                      <div
                        onClick={() =>
                          navigate(
                            `/admin/courses/edit-course/${item?.id}/${item?.title}`,
                          )
                        }
                        className='w-[53px] h-[32px] hover:bg-[#F5F7F9] transition ease-in-out duration-300 cursor-pointer rounded-[50px] flex items-center justify-center edit_del'
                      >
                        <img src={Edit} alt='' />
                      </div>
                      <div
                        onClick={() => {
                          setCourse(item);
                          setOpenDeletePop(true);
                        }}
                        className='w-[53px] h-[32px] hover:bg-[#F5F7F9] transition ease-in-out duration-300 cursor-pointer rounded-[50px] flex items-center justify-center edit_del'
                      >
                        <img src={Trahs} alt='' />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <LoadingFetching />
        )}
      </div>
    </Layout>
  );
};

export default AdminCourses;

const OpenDeletePop = ({
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
