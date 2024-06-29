/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { AddRound, BackArrow, Edit, Trahs } from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import Sort from '../../../assets/sort.svg';
import 'react-datepicker/dist/react-datepicker.css';
import { isValid, isBefore } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { toast } from 'react-toastify';
import { LoadingFetching } from './LoadingFetching';
import { apiRequest } from '../../../Utils/ApiRequest';
import { CreateCohort, OpenDeletePop, OpenToggleModal } from './CoursesModals';

const AdminCourses = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [openDeletePop, setOpenDeletePop] = useState(false);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [toggleClick, setToggleClick] = useState(false);
  const [openCreateCohort, setOpenCreateCohort] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleToggle = () => {
    if (isChecked) {
      setToggleClick(true);
    } else {
      setIsChecked(prev => !prev);
    }
  };
  const navigate = useNavigate();

  const handleDateChange = (date, setFieldValue, setFieldError) => {
    const selectedDateString = date;
    const parsedDate = new Date(selectedDateString);

    if (isValid(parsedDate) && !isBefore(parsedDate, new Date())) {
      setFieldValue(selectedDateString);
      setFieldError(null);
    } else {
      setFieldError('You can only select future dates.');
      setFieldValue(null);
    }
  };

  const getCourses = async () => {
    setLoading(true);
    try {
      const response = await apiRequest('GET', `/courses/all/`);
      setLoading(false);
      setCourses(response);
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };
  useEffect(() => {
    getCourses();
  }, []);

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
        {toggleClick && (
          <OpenToggleModal
            isChecked={isChecked}
            setToggleClick={setToggleClick}
            deleteLoading={deleteLoading}
          />
        )}
        {openCreateCohort && (
          <CreateCohort
            setOpenCreateCohort={setOpenCreateCohort}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            handleDateChange={handleDateChange}
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
          <div className='flex flex-row items-center justify-between'>
            <h1 className='font-[500] inter__ text-[14px] leading-[17px]'>
              NEXT COHORT
            </h1>
            <Link to={'/admin/courses/cohorts'} className=''>
              <h1 className='font-bold text-[14px] leading-[17px] text-mainBlue underline underline-mainBlue'>
                Cohort history
              </h1>
            </Link>
          </div>
          <div className='flex flex-row w-full justify-between gap-[10px]'>
            <div className='flex flex-col gap-[16px] w-[43%]'>
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
            <div className='flex flex-col gap-[6px] w-[159px]'>
              <h1 className='font-[600] text-[14px] leading-[21px]'>
                {/* Set date */}
              </h1>
              <div className='seats_bg bg-[#fff] h-[50px] hover:bg-[#f3f3f3]  hover:cursor-pointer transition duration-300 rounded-[12px] flex items-center justify-center'>
                <div
                  onClick={() => setOpenCreateCohort(true)}
                  className='flex flex-row items-center justify-center gap-[8px]'
                >
                  <img src={AddRound} alt='' />
                  <span className='font-semibold leading-[24px] text-nowrap'>
                    Create cohort
                  </span>
                </div>
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