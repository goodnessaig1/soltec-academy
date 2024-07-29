/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { isValid, isBefore } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../Common/Layout';
import { AddRound, BackArrow } from '../../../Utils/Assets';
import { adminApiRequest, apiRequest } from '../../../Utils/ApiRequest';
import { CreateCohort, OpenDeletePop, OpenToggleModal } from './CoursesModals';
import CoursesData from './CoursesData';

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
  const [cohorts, setCohorts] = useState(null);
  const getCohorts = async () => {
    try {
      const response = await adminApiRequest('GET', `/cohort/`);
      setCohorts(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCohorts();
  }, []);

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
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      await adminApiRequest('DELETE', `/courses/${course.id}/`);
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
      toast.error('An error occured, please try again', {
        position: 'top-right',
      });
    }
  };

  return (
    <Layout text='Courses'>
      <div className='w-full flex flex-col gap-9 px-9 pb-[140px]'>
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
            cohorts={cohorts}
            setCohorts={setCohorts}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            handleDateChange={handleDateChange}
          />
        )}
        <div className='flex flex-row justify-between items-center '>
          <div className='w-10 h-10 flex items-center justify-center bg-backBg rounded-[50%]'>
            <img src={BackArrow} alt='' />
          </div>
          <div
            onClick={() => navigate('/admin/courses/add-course')}
            className='w-[150px] h-12 flex flex-row items-center justify-center px-4 py-[18px] hover:bg-[#f1f1f1] hover:cursor-pointer transition duration-300 rounded-[16px] gap-[8px] addCourse'
          >
            <img src={AddRound} alt='' />
            <h1 className='font-medium text-nowrap text-[16px] leading-[24px]  '>
              New Course
            </h1>
          </div>
        </div>
        <div className='flex flex-col cohotBg w-[397px] h-[134px] p-4 rounded-[12px] gap-[18px]'>
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
          <div className='flex flex-row w-full justify-between gap-4'>
            <div className='flex flex-col gap-4 w-[43%]'>
              <div className='font-medium text-[14px] leading-[21px]'>
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
            <div className='flex flex-col gap-4 w-[159px]'>
              <h1 className='font-medium text-[14px] leading-[21px]'>
                {/* Set date */}
              </h1>
              <div className='seats_bg bg-white h-[50px] hover:bg-[#f3f3f3]  hover:cursor-pointer transition duration-300 rounded-[12px] flex items-center justify-center'>
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
        <CoursesData
          courses={courses}
          loading={loading}
          setCourses={setCourses}
          setCourse={setCourse}
          setOpenDeletePop={setOpenDeletePop}
        />
      </div>
    </Layout>
  );
};

export default AdminCourses;
