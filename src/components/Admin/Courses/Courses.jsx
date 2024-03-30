import { useRef, useState } from 'react';
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
import {
  // format,
  // addDays,
  isValid,
  isBefore,
  startOfMonth,
  endOfMonth,
} from 'date-fns';
import { coursesList } from './CoursesList';
import { useNavigate } from 'react-router-dom';
const AdminCourses = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState(null);
  const handleToggle = () => {
    setIsChecked(prev => !prev);
  };
  const navigate = useNavigate();
  console.log(error);
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
  return (
    <Layout text='Courses'>
      <div className='w-full flex flex-col gap-[36px] px-[36px] pb-[140px]'>
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
        <div className='flex flex-col gap-[16px]'>
          <h1 className='inter__ text-[14px] leading-[17px] '>COURSES</h1>

          <div className='w-full flex flex-col coursesP rounded-[12px]'>
            {/* Head */}
            <div className='flex flex-row w-full items-center'>
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
            {coursesList.map((item, index) => (
              <div
                key={index}
                className='flex flex-row items-center w-full min-h-[48px]'
              >
                <div className='w-[20%] flex'>
                  <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                    {item.date}
                  </h1>
                </div>
                <div className='w-[27%] whitespace-normal'>
                  <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px] break-all'>
                    {item.course}
                  </h1>
                </div>
                <div className='w-[13%]'>
                  <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                    {item.color}
                  </h1>
                </div>
                <div className='w-[12%]'>
                  <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                    {item.price}
                  </h1>
                </div>
                <div className='w-[12%] py-[10px] px-[12px]'>
                  {item.active ? (
                    <div className='w-[70px] flex h-[24px] rounded-[50px] text-mainGreen items-center justify-center bg-activeBg text-[12px]'>
                      Active
                    </div>
                  ) : (
                    <div className='w-[70px] flex h-[24px] rounded-[50px] text-mainRed items-center justify-center  bg-unactiveBg text-[12px]'>
                      Inctive
                    </div>
                  )}
                </div>
                <div className='w-[15%] flex flex-row gap-[10px] items-center justify-center'>
                  <div className='w-[53px] h-[32px] rounded-[50px] flex items-center justify-center edit_del'>
                    <img src={Edit} alt='' />
                  </div>
                  <div className='w-[53px] h-[32px] rounded-[50px] flex items-center justify-center edit_del'>
                    <img src={Trahs} alt='' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminCourses;
