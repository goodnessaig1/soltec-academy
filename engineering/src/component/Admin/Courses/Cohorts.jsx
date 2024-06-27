/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { AddRound, BackArrow } from '../../../Utils/Assets';
import { isValid, isBefore } from 'date-fns';
import { LoadingFetching } from './LoadingFetching';
import { apiRequest } from '../../../Utils/ApiRequest';
import Layout from '../Common/Layout';
import { useNavigate } from 'react-router-dom';
import { CreateCohort } from './CoursesModals';
import Sort from '../../../assets/sort.svg';
import moment from 'moment';
import { calculateTimeLeft } from '../../../Utils/Index';

const Cohorts = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cohorts, setCohorts] = useState(null);
  const [openCreateCohort, setOpenCreateCohort] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [currentCohort, setCurrentCohort] = useState(null);
  let bootCampDate = currentCohort?.end_date;
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(bootCampDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(bootCampDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [currentCohort]);

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
      const response = await apiRequest('GET', `/cohort/`);
      setCohorts(response.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getCurrentCohort = async () => {
    try {
      const response = await apiRequest(
        'GET',
        `/cohort/check_for_current_cohorts/`,
      );
      setCurrentCohort(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCohorts();
    getCurrentCohort();
  }, []);

  return (
    <Layout text='Courses'>
      <div className='w-full flex flex-col gap-[36px] px-[36px] pb-[140px]'>
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
            className='w-[39px] h-[39px] hover:cursor-pointer hover:bg-extraGray transition duration-300 flex items-center justify-center bg-backBg rounded-[50%]'
          >
            <img src={BackArrow} alt='' />
          </div>
          <div
            onClick={() => setOpenCreateCohort(true)}
            className='w-[150px] h-[48px] flex flex-row items-center justify-center px-[16px] py-[18px] hover:bg-[#f1f1f1] hover:cursor-pointer transition duration-300 rounded-[16px] gap-[8px] addCourse'
          >
            <img src={AddRound} alt='' />
            <h1 className='font-[600] text-nowrap text-[16px] leading-[24px]  '>
              New Cohort
            </h1>
          </div>
        </div>
        {!loading ? (
          <>
            {cohorts && (
              <div className='flex flex-col gap-[24px]'>
                <div className='flex flex-row items-center gap-[10px]'>
                  <div className='w-[266px] h-[110px] bg-[#F7F7F7] rounded-[12px] p-[24px] gap-[16px] flex flex-col'>
                    <h1 className='inter_ font-medium text-[14px] leading-[17px]'>
                      NO OF BOOTCAMPS
                    </h1>
                    <span className='inter_ font-semibold text-[24px] leading-[30px]'>
                      {cohorts?.length}
                    </span>
                  </div>
                  <div className='w-[285px] h-[110px] bg-[#F7F7F7] rounded-[12px] p-[24px] gap-[16px] flex flex-col'>
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
                  <div className='w-[285px] h-[110px] bg-[#F7F7F7] rounded-[12px] p-[24px] gap-[16px] flex flex-col'>
                    <h1 className='inter_ font-medium text-[14px] leading-[17px]'>
                      CURRENT BOOTCAMP
                    </h1>
                    <span className='inter_ font-semibold text-[24px] leading-[30px]'>
                      {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} :{' '}
                      {timeLeft.seconds}
                    </span>
                  </div>
                </div>

                <div className='flex flex-col gap-[16px]'>
                  <h1 className='inter_ font-medium text-[14px] leading-[17px] text-[#1C1C1C]'>
                    BOOTCAMPS
                  </h1>
                  <div className='w-full flex flex-col coursesP rounded-[12px]'>
                    <div className='flex flex-row w-full mb-[10px] items-center'>
                      <div className='w-[20%]'>
                        <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                          <h1 className='text-[14px] font-[600] leading-[17px]'>
                            TIME
                          </h1>
                          <img src={Sort} alt='' />
                        </div>
                      </div>
                      <div className='w-[27%]'>
                        <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                          <h1 className='text-[14px] font-[600] leading-[17px]'>
                            TIMEFRAME
                          </h1>
                        </div>
                      </div>
                      <div className='w-[20%]'>
                        <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                          <h1 className='text-[14px] font-[600] leading-[17px]'>
                            DATE ENDED
                          </h1>
                          <img src={Sort} alt='' />
                        </div>
                      </div>
                      <div className='w-[32%]'>
                        <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                          <h1 className='text-[14px] font-[600] leading-[17px]'>
                            NUMBER OF ENROLLMENTS
                          </h1>
                        </div>
                      </div>
                    </div>
                    {cohorts &&
                      cohorts.map((item, index) => (
                        <div
                          key={index}
                          className='flex flex-row w-full items-start w-full min-h-[48px]'
                        >
                          <div className='w-[20%]'>
                            <h1 className='text-[14px] font-normal  py-[10px] px-[12px] leading-[17px]'>
                              {moment(item?.start_date).format(
                                'DD MMM YYYY, hh:mmA',
                              )}
                            </h1>
                          </div>
                          <div className='w-[27%]'>
                            <h1 className='text-[14px] font-normal  py-[10px] px-[12px] leading-[17px]'>
                              {item?.timeframe?.years > 0 &&
                                `${`Years: ${item?.timeframe?.years},`}`}{' '}
                              {item?.timeframe?.months > 0 &&
                                `${item?.timeframe?.months} months,`}{' '}
                              {`${item?.timeframe?.days} days,`}{' '}
                            </h1>
                          </div>
                          <div className='w-[20%]'>
                            <h1 className='text-[14px] font-normal  py-[10px] px-[12px] leading-[17px]'>
                              {moment(item?.end_date).format(
                                'DD MMM YYYY, hh:mmA',
                              )}
                            </h1>
                          </div>
                          <div className='w-[32%]'>
                            <h1 className='text-[14px] font-normal  py-[10px] px-[12px] leading-[17px]'>
                              {item?.no_of_enrollments}
                            </h1>
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
