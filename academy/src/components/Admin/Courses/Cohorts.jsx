/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { AddRound, BackArrow } from '../../../Utils/Assets';
import { isValid, isBefore } from 'date-fns';
import { LoadingFetching } from './LoadingFetching';
import { adminApiRequest } from '../../../Utils/ApiRequest';
import Layout from '../Common/Layout';
import { useNavigate } from 'react-router-dom';
import { CreateCohort } from './CoursesModals';
import Sort from '../../../assets/sort.svg';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useAuth } from '../../Context/AuthContext';
import Countdown from './Countdown';

const Cohorts = () => {
  const navigate = useNavigate();
  const { currentCohort } = useAuth();
  const [loading, setLoading] = useState(true);
  const [cohorts, setCohorts] = useState(null);
  const [openCreateCohort, setOpenCreateCohort] = useState(false);

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

  const getCohorts = async () => {
    try {
      const response = await adminApiRequest('GET', `/cohort/`);
      setCohorts(response.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getCohorts();
  }, []);

  const handleIsActive = async (index, item) => {
    setCohorts(prevCourses => {
      const newCohort = [...prevCourses];
      newCohort[index].is_active = !newCohort[index].is_active;
      return newCohort;
    });
    try {
      await adminApiRequest('POST', `/cohort/${item.id}/toggle_active/`);
      toast.success('Successfully updated', {
        position: 'top-right',
      });
    } catch (error) {
      toast.error('An error occured, please try again', {
        position: 'top-right',
      });
    }
  };

  return (
    <Layout text='Courses'>
      <div className='w-full flex flex-col gap-9 px-9 pb-[140px]'>
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
        <div className='flex flex-row items-center justify-between'>
          <div
            onClick={() => navigate(-1)}
            className='w-10 h-10 hover:cursor-pointer hover:bg-extraGray transition duration-300 flex items-center justify-center bg-backBg rounded-[50%]'
          >
            <img src={BackArrow} alt='' />
          </div>
          <div
            onClick={() => setOpenCreateCohort(true)}
            className='w-[150px] h-12 flex flex-row items-center justify-center px-4 py-[18px] hover:bg-[#f1f1f1] hover:cursor-pointer transition duration-300 rounded-[16px] gap-2 addCourse'
          >
            <img src={AddRound} alt='' />
            <h1 className='font-semibold text-nowrap text-[16px] leading-[24px]  '>
              New Cohort
            </h1>
          </div>
        </div>
        {!loading ? (
          <>
            {cohorts && (
              <div className='flex flex-col gap-4'>
                <div className='flex flex-row items-center gap-4'>
                  <div className='w-[266px] h-[110px] bg-[#F7F7F7] rounded-[12px] p-6 gap-4 flex flex-col'>
                    <h1 className='inter_ font-medium text-[14px] leading-[17px]'>
                      NO OF BOOTCAMPS
                    </h1>
                    <span className='inter_ font-semibold text-[24px] leading-[30px]'>
                      {cohorts?.length}
                    </span>
                  </div>
                  <div className='w-[285px] h-[110px] bg-[#F7F7F7] rounded-[12px] p-6 gap-4 flex flex-col'>
                    <h1 className='inter_ font-medium text-[14px] leading-[17px]'>
                      TOTAL NO OF ENROLLMENTS
                    </h1>
                    <span className='inter_ font-semibold text-[24px] leading-[30px]'>
                      {cohorts.reduce(
                        (acc, curr) => acc + curr.no_of_enrollments,
                        0,
                      )}
                    </span>
                  </div>
                  <div className='w-[285px] h-[110px] bg-[#F7F7F7] rounded-[12px] p-6 gap-4 flex flex-col'>
                    <h1 className='inter_ font-medium text-[14px] leading-[17px]'>
                      CURRENT BOOTCAMP
                    </h1>
                    <Countdown startDate={currentCohort.start_date} />
                  </div>
                </div>

                <div className='flex flex-col gap-4'>
                  <h1 className='inter_ font-medium text-[14px] leading-[17px] text-[#1C1C1C]'>
                    BOOTCAMPS
                  </h1>
                  <div className='w-full flex flex-col coursesP rounded-[12px]'>
                    <div className='flex flex-row w-full mb-2.5 items-center'>
                      <div className='w-[14%]'>
                        <div className='flex flex-row items-center gap-4 py-2.5 px-3'>
                          <h1 className='text-[14px] font-semibold leading-[17px]'>
                            TIME
                          </h1>
                          <img src={Sort} alt='' />
                        </div>
                      </div>
                      <div className='w-[22%]'>
                        <div className='flex flex-row items-center gap-4 py-2.5 px-3'>
                          <h1 className='text-[14px] font-semibold leading-[17px]'>
                            TIMEFRAME
                          </h1>
                        </div>
                      </div>
                      <div className='w-[19%]'>
                        <div className='flex flex-row items-center gap-4 py-2.5 px-3'>
                          <h1 className='text-[14px] font-semibold leading-[17px]'>
                            DATE ENDED
                          </h1>
                          <img src={Sort} alt='' />
                        </div>
                      </div>
                      <div className='w-[26%]'>
                        <div className='flex flex-row items-center gap-4 py-2.5 px-3'>
                          <h1 className='text-[14px] font-semibold leading-[17px]'>
                            NUMBER OF ENROLLMENTS
                          </h1>
                        </div>
                      </div>
                      <div className='w-[18%]'>
                        <div className='flex flex-row items-center gap-4 py-2.5 px-3'>
                          <h1 className='text-[14px] font-semibold leading-[17px]'>
                            Status
                          </h1>
                        </div>
                      </div>
                    </div>
                    {cohorts &&
                      cohorts.map((item, index) => (
                        <div
                          key={index}
                          className='flex flex-row w-full items-start w-full min-h-12'
                        >
                          <div className='w-[14%]'>
                            <h1 className='text-[14px] font-normal  py-2.5 px-3 leading-[17px]'>
                              {moment(item?.start_date).format('DD MMM YYYY')}
                            </h1>
                          </div>
                          <div className='w-[22%]'>
                            <h1 className='text-[14px] font-normal  py-2.5 px-3 leading-[17px]'>
                              {item?.timeframe?.years > 0 &&
                                `${`Years: ${item?.timeframe?.years},`}`}{' '}
                              {item?.timeframe?.months > 0 &&
                                `${item?.timeframe?.months} months,`}{' '}
                              {`${item?.timeframe?.days} days,`}{' '}
                            </h1>
                          </div>
                          <div className='w-[19%]'>
                            <h1 className='text-[14px] font-normal  py-2.5 px-3 leading-[17px]'>
                              {moment(item?.end_date).format('DD MMM YYYY')}
                            </h1>
                          </div>
                          <div className='w-[26%]'>
                            <h1 className='text-[14px] font-normal  py-2.5 px-3 leading-[17px]'>
                              {item?.no_of_enrollments}
                            </h1>
                          </div>
                          <div className='w-[18%] flex items-center gap-1.5 py-2.5 px-3 hover:cursor-pointer'>
                            {item?.is_active ? (
                              <div className='w-[70px] flex h-[24px] rounded-[50px] text-mainGreen items-center justify-center bg-activeBg text-[12px]'>
                                Active
                              </div>
                            ) : (
                              <div className='w-[70px] flex h-[24px] rounded-[50px] text-mainRed items-center justify-center  bg-unactiveBg text-[12px]'>
                                Inactive
                              </div>
                            )}
                            <label className='toggle-button'>
                              <input
                                type='checkbox'
                                checked={item?.is_active}
                                onChange={() => handleIsActive(index, item)}
                                className='toggle-input'
                              />
                              <span className='toggle-slider'></span>
                            </label>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <LoadingFetching />
        )}
      </div>
    </Layout>
  );
};

export default Cohorts;
