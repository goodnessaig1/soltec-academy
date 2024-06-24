import { Link, useNavigate } from 'react-router-dom';
import {
  DeleteRed,
  EditIcon,
  PlusW,
  SearchGray,
  Unavailable,
} from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { apiRequest } from '../../../Utils/ApiRequest';
const BlogManagement = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [networkError, setNetworkError] = useState(false);
  const [markedItems, setMarkedItems] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const response = await apiRequest('GET', `/blogs/`);
      setLoading(false);
      setBlogs(response.results);
    } catch (error) {
      setLoading(false);
      toast.error('An error occured, please try again', {
        position: 'top-left',
      });
    }
  };

  const handleDelete = async id => {
    const updatedData = blogs.filter(item => item.id !== id);
    setBlogs(updatedData);
    try {
      await apiRequest('DELETE', `/blogs/${id}`);
      toast.success('Successfully deleted', {
        position: 'top-right',
      });
    } catch (error) {
      toast.error('An error occured !', {
        position: 'top-left',
      });
      console.log('error', error);
    }
  };

  const deleteMultiple = async () => {
    const data = {
      ids,
    };
    try {
      await apiRequest('DELETE', `/blogs/delete-multiple/`, data);
      toast.success('Successfully deleted', {
        position: 'top-right',
      });
      setMarkedItems([]);
      setIds([]);
    } catch (error) {
      toast.error('An error occured !', {
        position: 'top-left',
      });
      console.log('error', error);
    }
  };

  const toggleMarked = (index, blog) => {
    if (markedItems.includes(index)) {
      setIds(ids.filter(id => id !== blog?.id));
      setMarkedItems(markedItems.filter(item => item !== index));
    } else {
      setIds([...ids, blog?.id]);
      setMarkedItems([...markedItems, index]);
    }
  };

  const deleteMarkedItems = () => {
    deleteMultiple(markedItems);
    const newData = blogs.filter((_, index) => !markedItems.includes(index));
    setBlogs(newData);
  };

  return (
    <div>
      <Layout text='Blog'>
        <div className='w-full inter__ flex flex-col gap-9 px-9 pb-[140px]'>
          <div className='flex flex-row items-center justify-between'>
            <h1 className='text-[14px] font-medium leading-[17px]'>
              LATEST BLOG POSTS
            </h1>
            <div className='flex flex-row gap-[11px]'>
              <div className='flex flex-row rounded-[12px] px-[16px] justify-between items-center h-10 course_input w-[276px]'>
                <input
                  type='text'
                  placeholder='Search'
                  className='outline-none border-none bg-transparent'
                />
                <img src={SearchGray} alt='' />
              </div>
              <Link
                to={'/admin/blogs/add-blog'}
                className='w-[115px] hover:opacity-[94%] h-10 rounded-[12px] bg-lBlue flex gap-[6px] items-center justify-center'
              >
                <img src={PlusW} alt='' />
                <h2 className='text-white font-medium text-[14px] leading-[17px]'>
                  Add Post
                </h2>
              </Link>
            </div>
          </div>

          {!loading ? (
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[16px]'>
              {blogs &&
                blogs.map((blog, index) => (
                  <div
                    key={index}
                    className='w-[350px] h-[412px] blog_p rounded-[36px] gap-[18px]'
                  >
                    <div className='mt-[-2px] group cursor-pointer transition duration-300'>
                      <div
                        className={`absolute ${
                          markedItems.includes(index)
                            ? ''
                            : 'hidden group-hover:block'
                        } transition duration-300 group-hover:block ml-[206px] mt-[14px]`}
                      >
                        <div className='w-[126px] h-10 rounded-[50px] flex gap-3.5 bg-white items-center justify-center'>
                          <div
                            onClick={() =>
                              navigate(`/admin/blogs/edit-blog/${blog?.id}`)
                            }
                            className=''
                          >
                            <img src={EditIcon} alt='' />
                          </div>
                          <div
                            onClick={() => handleDelete(blog?.id)}
                            className='hover:text-mainRed transition duration-300 cursor-pointer'
                          >
                            <RiDeleteBin5Line size={22} />
                          </div>
                          <div className=''>
                            <input
                              type='checkbox'
                              className='form-checkbox h-4 w-4 text-indigo-600'
                              checked={markedItems.includes(index)}
                              onChange={() => toggleMarked(index, blog)}
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        src={blog?.featured_image}
                        className='h-[223px] w-full  rounded-t-[38px]'
                        alt=''
                      />
                    </div>
                    <Link
                      to={`/academy/blog/${blog?.id}/${
                        blog.author_name
                      }/${blog?.title.substring(0, 20)}`}
                    >
                      <div className='w-full px-[16px] mt-2 gap-4'>
                        <div className='flex flex-col gap-3.5'>
                          <h1 className='font-[600] text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px]'>
                            {blog?.title.length > 28
                              ? `${blog?.title?.substring(0, 28) + '..'}`
                              : `${blog?.title}`}
                          </h1>
                          <span className='text-[14px] font-normal leading-[21px] text-lightB'>
                            {blog?.short_description.length > 120
                              ? `${
                                  blog?.short_description?.substring(0, 120) +
                                  '..'
                                }`
                              : `${blog?.short_description}`}
                          </span>
                          <div className='flex flex-row justify-between  mt-[16px] items-center'>
                            <div className='flex flex-row gap-4 '>
                              {blog?.author_image ? (
                                <img
                                  src={blog?.author_image}
                                  alt=''
                                  className='rounded-[100%] w-8 h-8'
                                />
                              ) : (
                                <img
                                  src={Unavailable}
                                  alt=''
                                  className='rounded-[100%] w-8 h-8'
                                />
                              )}
                              <div className='flex flex-col'>
                                <h3 className='text-[14px] font-medium leading-[17px] text-lightB'>
                                  {blog?.author_name}
                                </h3>
                                <h3 className='text-[12px] font-normal leading-[14px] text-lightB'>
                                  5 min read
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          ) : (
            <div className='flex w-full h-[400px] items-center justify-center'>
              <Oval
                visible={true}
                height='40'
                width='40'
                color='gray'
                ariaLabel='oval-loading'
                wrapperStyle={{}}
                wrapperClass=''
              />
            </div>
          )}
          {markedItems.length > 0 && (
            <div className='absolute right-0 bottom-0 mr-10 mb-10'>
              <div
                onClick={deleteMarkedItems}
                className='w-[114px] hover:bg-whiteW z-100 hover:cursor-pointer transition duration-300 h-10 flex items-center justify-center gap-[6px] rounded-[12px] border border-[1px] border-mainRed'
              >
                <img src={DeleteRed} alt='' />
                <span className='font-medium text-[14px] leading-[17px] text-mainRed inter__'>
                  Delete
                </span>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default BlogManagement;
