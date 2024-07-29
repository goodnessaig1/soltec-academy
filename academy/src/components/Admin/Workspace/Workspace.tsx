import React, { useEffect, useState } from 'react';
import Layout from '../Common/Layout';
import { AddRound, ArrowDown, BackArrow, Edit } from '../../../Utils/Assets';
import { useNavigate } from 'react-router-dom';
import { adminApiRequest, apiRequest } from '../../../Utils/ApiRequest';
import WorkspaceBookings from './WorkspaceBookings';
import { LoadingFetching } from '../Courses/LoadingFetching';
import { ProgressBar } from 'react-loader-spinner';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-toastify';

enum Plans {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
}
const AdminWorkspace: React.FC = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [workspaceBookings, setWorkspaceBookings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openCreatePlans, setOpenCreatePlans] = useState(false);
  const planType = [
    { type: Plans.DAILY },
    { type: Plans.WEEKLY },
    { type: Plans.MONTHLY },
  ];

  const getWorkspaceBookings = async () => {
    setLoading(true);
    try {
      const response = await adminApiRequest(
        'GET',
        `/workspaces/workspace_bookings/?year=2024`,
      );
      setWorkspaceBookings(response?.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };

  const getPlans = async () => {
    try {
      const response = await apiRequest('GET', `/workspaces/fetch_plans/`);
      setPlans(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorkspaceBookings();
    getPlans();
  }, []);

  const reversePlans = plans => {
    if (plans && plans.length > 0) {
      return plans.reverse();
    }
    return [];
  };

  return (
    <Layout text='Workspace'>
      {openCreatePlans && (
        <CreatePlan
          planType={planType}
          openCreatePlans={openCreatePlans}
          setOpenCreatePlans={setOpenCreatePlans}
        />
      )}
      <div className='w-full inter_ flex flex-col mb-24 gap-12 px-9'>
        <div className='flex flex-row justify-between items-center '>
          <div
            onClick={() => navigate(-1)}
            className='w-10 h-10 flex items-center justify-center bg-backBg rounded-[50%]'
          >
            <img src={BackArrow} alt='' />
          </div>
          <div
            onClick={() => setOpenCreatePlans(true)}
            className='w-[150px] h-12 flex flex-row items-center justify-center px-4 py-[18px] hover:bg-[#f1f1f1] hover:cursor-pointer transition duration-300 rounded-[16px] gap-[8px] addCourse'
          >
            <img src={AddRound} alt='' />
            <h1 className='font-medium text-nowrap text-[16px] leading-[24px]  '>
              Create Plan
            </h1>
          </div>
        </div>
        {!loading ? (
          <div className='flex flex-col gap-5'>
            {workspaceBookings && (
              <h1 className='text-[16px] font-medium leading-[24px]'>
                WORKSPACE BOOKINGS
              </h1>
            )}
            {workspaceBookings && (
              <WorkspaceBookings workspaceBookings={workspaceBookings} />
            )}
            <div className='flex flex-col gap-3 mt-3'>
              <h1 className='text-[16px] font-medium leading-[24px]'>
                WORKSPACE PLANS
              </h1>
              <div className='w-full flex flex-col coursesP rounded-[12px]'>
                {/* Head */}
                <div className='flex flex-row w-full items-start'>
                  <div className='w-[15%]'>
                    <div className='flex items-center gap-4 py-2.5 px-3'>
                      <h1 className='text-[14px] font-medium leading-[17px]'>
                        TYPE
                      </h1>
                    </div>
                  </div>
                  <div className='w-[15%]'>
                    <div className='flex flex-row items-center gap-4 py-2.5 px-3'>
                      <h1 className='text-[14px] font-medium leading-[17px]'>
                        PRICE
                      </h1>
                    </div>
                  </div>
                  <div className='w-[10%]'>
                    <div className='flex flex-row items-center gap-4 py-2.5 px-3'>
                      <h1 className='text-[14px] font-medium leading-[17px]'>
                        EDIT
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Data */}
                {plans &&
                  plans.length > 0 &&
                  reversePlans([...plans]).map((plan: any, index) => (
                    <div
                      key={index}
                      className='flex flex-row items-start w-full min-h-12'
                    >
                      <div className='w-[15%] flex'>
                        <h1 className='text-[12px] font-normal py-2.5 px-3 leading-[17px]'>
                          {plan?.title}
                        </h1>
                      </div>
                      <div className='w-[15%] whitespace-normal'>
                        <h1 className='text-[14px] font-normal py-2.5 px-3 leading-[17px] break-all'>
                          {plan?.price}
                        </h1>
                      </div>
                      <div className='w-[10%] fex items-center justify-center'>
                        <div className='w-9 h-6 mt-2 hover:bg-[#F5F7F9] ml-2.5 transition ease-in-out duration-300 cursor-pointer rounded-[50px] flex items-center justify-center edit_del'>
                          <img src={Edit} className='h-3.5' alt='' />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <LoadingFetching />
        )}
      </div>
    </Layout>
  );
};

export default AdminWorkspace;

export const CreatePlan = ({
  planType,
  openCreatePlans,
  setOpenCreatePlans,
}) => {
  const [plan, setPlan] = useState<Plans>(Plans.DAILY);
  const [loading, setLoading] = useState(false);
  const [openPlanType, setOpenPlanType] = useState(false);
  const [price, setPrice] = useState('');
  const handleSubmit = async () => {
    let data = {
      plan_type: plan,
      price: price,
    };
    try {
      setLoading(true);
      await adminApiRequest('POST', `/workspaces/`, data);
      toast.success('Success', {
        position: 'top-right',
      });
      setLoading(false);
      setOpenCreatePlans(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error('An error occured !', {
        position: 'top-left',
      });
    }
  };

  return (
    <div className='fixed z_indd h-screen top-0 left-0 right-0 bottom-0 px-7 md:px-0 flex  items-center justify-center bg-transparent'>
      <div
        onClick={() => setOpenCreatePlans(false)}
        className='w-full z_indd fixed hover:cursor-pointer h-screen top-0 left-0 right-0 bottom-0 px-7 md:px-0 flex  items-center justify-center bg-dOverlay '
      ></div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='bg-bg3 z_ind flex flex-col w-[334px] bg-white rounded-[24px] p-6 '
        >
          <div className='flex flex-col items-center gap-4 w-full'>
            <h1 className='text-[16px] leading-[24px] text-center w-full font-semibold'>
              CREATE PLANS
            </h1>
            <form
              action=''
              className='w-full flex flex-col gap-5'
              onSubmit={e => e.preventDefault()}
            >
              <div className='flex flex-col gap-1.5'>
                <label
                  className='font-semibold text-[14px] leading-[21px]'
                  htmlFor='Plan'
                >
                  Plan
                </label>
                <div
                  onClick={() => setOpenPlanType(!openPlanType)}
                  className='w-full cursor-pointer course_input px-2.5 pl-4 flex justify-between items-center rounded-[12px] h-10 text-[14px]'
                >
                  <span>{plan}</span>
                  <img src={ArrowDown} alt='' />
                </div>
                {openPlanType && (
                  <div
                    onClick={() => setOpenPlanType(!openPlanType)}
                    className='absolute top-0 left-0 right 0 bg-[transparent] w-full h-full z-1 '
                  ></div>
                )}
                {openPlanType && (
                  <div className='absolute bg-white z-3 mt-[80px] rounded-lg flex flex-col border '>
                    {planType.map((plan, i) => (
                      <div
                        key={i}
                        onClick={() => (
                          setPlan(plan.type), setOpenPlanType(false)
                        )}
                        className='hover:bg-blue-600 w-[150px] hover:text-white hover:cursor-pointer transition duration-200 ease-in-out px-3 rounded-[8px] py-[6px]'
                      >
                        {plan.type}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className='flex flex-col gap-1.5'>
                <label
                  className='font-semibold text-[14px] leading-[21px]'
                  htmlFor='start_date'
                >
                  Price
                </label>
                <div className='w-full course_input px-2.5 pl-4 flex justify-between items-center rounded-[12px] h-10 text-[14px]'>
                  <input
                    type='text'
                    name='price'
                    required
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    className='w-full outline-none bg-transparent focus:outline-none'
                  />
                </div>
              </div>

              {!loading ? (
                <button
                  className='w-full h-14 rounded-[16px] flex items-center justify-center bg-[#DDEAFF] hover:opacity-[0.7] duration-300 transition '
                  type='submit'
                  onClick={handleSubmit}
                >
                  <span className='text-[16px] font-semibold text-[#0043CE] leading-[24px]'>
                    Create
                  </span>
                </button>
              ) : (
                <div className='w-full flex items-center justify-center h-14'>
                  <ProgressBar
                    visible={true}
                    height='60'
                    width='60'
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
