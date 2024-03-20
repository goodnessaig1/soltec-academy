import { AddRound, BackArrow } from '../../../Utils/Assets';
import Layout from '../Common/Layout';

const AdminCourses = () => {
  return (
    <Layout text='Courses'>
      <div className='w-full px-[36px]'>
        <div className='flex flex-row justify-between items-center'>
          <div className='w-[39px] h-[39px] flex items-center justify-center bg-backBg rounded-[50%]'>
            <img src={BackArrow} alt='' />
          </div>
          <div className='w-[150px] h-[48px] flex flex-row items-center justify-center px-[16px] py-[18px] rounded-[16px] gap-[8px] addCourse'>
            <img src={AddRound} alt='' />
            <h1 className='font-[600] text-nowrap text-[16px] leading-[24px]  '>
              New Course
            </h1>
          </div>
        </div>
        <div className=''>asdfadl</div>
      </div>
    </Layout>
  );
};

export default AdminCourses;
