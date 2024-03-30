import { Link } from 'react-router-dom';
import {
  CheckBox,
  Delete,
  EditIcon,
  PlusW,
  Profile,
  SearchGray,
} from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import Code from '../../../assets/code1.svg';
const BlogManagement = () => {
  return (
    <Layout text='Blog'>
      <div className='w-full inter__ flex flex-col gap-[36px] px-[36px] pb-[140px]'>
        <div className='flex flex-row items-center justify-between'>
          <h1 className='text-[14px] font-[500] leading-[17px]'>
            LATEST BLOG POSTS
          </h1>
          <div className='flex flex-row gap-[11px]'>
            <div className='flex flex-row rounded-[12px] px-[16px] justify-between items-center h-[40px] course_input w-[276px]'>
              <input
                type='text'
                placeholder='Search'
                className='outline-none border-none bg-transparent'
              />
              <img src={SearchGray} alt='' />
            </div>
            <Link
              to={'/admin/blogs/add-blog'}
              className='w-[115px] hover:opacity-[94%] h-[40px] rounded-[12px] bg-lBlue flex gap-[6px] items-center justify-center'
            >
              <img src={PlusW} alt='' />
              <h2 className='text-[#fff] font-[500] text-[14px] leading-[17px]'>
                Add Post
              </h2>
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-[16px]'>
          <BlogContainer />
          <BlogContainer />
          <BlogContainer />
          <BlogContainer />
          <BlogContainer />
          <BlogContainer />
        </div>
      </div>
    </Layout>
  );
};

export default BlogManagement;

const BlogContainer = () => {
  return (
    <div className='w-[350px] h-[412px] blog_p rounded-[36px] gap-[18px]'>
      <div className='mt-[-2px] group cursor-pointer transition duration-300'>
        <div className='absolute hidden transition duration-300 group-hover:block ml-[206px] mt-[14px]'>
          <div className='w-[126px] h-[40px] rounded-[50px] flex gap-[13px] bg-white items-center justify-center'>
            <div className=''>
              <img src={EditIcon} alt='' />
            </div>
            <div className=''>
              <img src={Delete} alt='' />
            </div>
            <div className=''>
              <img src={CheckBox} alt='' />
            </div>
          </div>
        </div>
        <img src={Code} className='h-[223px] w-full  rounded-t-[38px]' alt='' />
      </div>
      <Link to={'/admin/blogs/post'}>
        <div className='w-full px-[16px] gap-[8px]'>
          <div className='flex flex-col gap-[14px]'>
            <h1 className='font-[600] text-[20px] leading-[24px]'>
              The secret to mastering product design
            </h1>
            <span className='text-[14px] font-[400] leading-[21px] text-lightB'>
              Like the famous martial artist Bruce Lee once said, I fear not the
              man who has practiced 10,000 kicks
            </span>
            <div className='flex flex-row justify-between  mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img src={Profile} alt='' className='rounded-[100%] w-[32px]' />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              {/* <Link
              to={'/blog/payment-guide'}
              className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
            >
              <span className='text-[14px] leading-[17px] font-[400]'>
                Read more
              </span>
            </Link> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
