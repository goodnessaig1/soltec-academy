/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../Common/Layout';
import { BackArrow, CloudAdd } from '../../../Utils/Assets';
import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { toast } from 'react-toastify';
import { ProgressBar } from 'react-loader-spinner';
import { apiRequest, uploadFile } from '../../../Utils/ApiRequest';

const EditSponsor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [errors, setErrors] = useState({
    name: '',
  });
  const [touched, setTouched] = useState({
    name: false,
  });
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [addLoading, setAddLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setName(data?.name);
    setLogo(data?.logo);
  }, [data]);

  useEffect(() => {
    getSponsor();
  }, []);

  const getSponsor = async () => {
    setPageLoading(true);
    try {
      const response = await apiRequest('GET', `/sponsors/${id}/`);
      setData(response);
      setPageLoading(false);
    } catch (error) {
      setPageLoading(false);
      console.log('error', error);
    }
  };

  const handleNameChange = e => {
    const { value } = e.target;
    setName(value);
    setTouched({ ...touched, name: true });
  };

  const uploadImg = async file => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await uploadFile(formData, setLoading);
      setLogo(response?.file);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  const handleDrop = e => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile.type.startsWith('image/')) {
      uploadImg(droppedFile);
    } else {
      alert('Please drop an image file!');
    }
  };

  const handleFileInputChange = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      uploadImg(selectedFile);
    } else {
      alert('Please select an image file!');
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleSubmit = async () => {
    setAddLoading(true);
    const values = {
      logo,
      name,
    };
    if (logo != '') {
      try {
        await apiRequest('PUT', `/sponsors/${id}/`, values);
        setAddLoading(false);
        toast.success('Success', {
          position: 'top-right',
        });
        setName('');
        setLogo(null);
      } catch (error) {
        toast.error('An error occured, please try again!', {
          position: 'top-right',
        });
        setAddLoading(false);
      }
    } else {
      setAddLoading(false);
      alert('Please select an image');
    }
  };

  return (
    <Layout text='Sponsors'>
      <div className='w-full inter__ flex flex-col gap-[36px] px-[36px] pb-[140px]'>
        <div
          onClick={() => navigate(-1)}
          className='w-[39px] h-[39px] hover:cursor-pointer hover:bg-extraGray transition duration-300 flex items-center justify-center bg-backBg rounded-[50%]'
        >
          <img src={BackArrow} alt='' />
        </div>
        <div className='flex flex-col gap-[24px] max-w-[505px]'>
          <h1 className='font-[500] text-[14px] leading-[17px]'>
            EDIT SPONSOR
          </h1>
          <form
            className='flex flex-col gap-[22px] w-full'
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className='flex flex-col gap-[6px]'>
              <label
                className='font-[600] text-[14px] leading-[21px]'
                htmlFor='name'
              >
                Name (max 20 characters)
              </label>
              <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={handleNameChange}
                  onBlur={() => setTouched({ ...touched, name: true })}
                  className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                />
              </div>
              {touched.name && errors.name && (
                <p className='text-[#2C2C2CB2] text-[#D50000] text-[10px] font-normal md:text-base'>
                  {errors.name}
                </p>
              )}
            </div>

            <div className='flex flex-col gap-[6px]'>
              <label
                className='font-[600] text-[14px] leading-[21px]'
                htmlFor='logo'
              >
                Sponsor Logo
              </label>
              {!loading ? (
                <>
                  {!logo ? (
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      className='dropZone w-full h-[192px] rounded-[12px] flex flex-col gap-[16px] py-[24px] items-center'
                    >
                      <input
                        type='file'
                        id='logo'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={handleFileInputChange}
                      />
                      <label htmlFor='logo'>
                        <img
                          className='hover:cursor-pointer'
                          src={CloudAdd}
                          alt='Upload Logo'
                        />
                      </label>
                      <div className='flex flex-col gap-[8px] items-center justify-center'>
                        <h1 className='inter__ font-[500] text-[14px]'>
                          Choose a file or drag & drop it here
                        </h1>
                        <span className='font-[500] inter__ text-[12px] leading-[15px] text-fileCol'>
                          JPEG, PNG, and PDG formats, up to 50MB
                        </span>
                      </div>
                      <div
                        className='course_input w-[104px] h-[40px] flex items-center justify-center font-[500] text-mainBlue rounded-[12px] text-[14px] hover:cursor-pointer hover:opacity-[0.9] transition duration-300 '
                        onClick={() => document.getElementById('logo').click()}
                      >
                        Browse Image
                      </div>
                    </div>
                  ) : (
                    <div className='w-full  rounded-[12px]'>
                      <div className='absolute justify-end mt-[4px] ml-[466px] flex items-end'>
                        <div
                          onClick={() => setLogo(null)}
                          className='bg-extraGray w-[30px] h-[30px] hover:bg-[#fff] transition duration-300 hover:cursor-pointer flex items-center justify-center rounded-[50px]'
                        >
                          X
                        </div>
                      </div>
                      <img
                        src={logo}
                        className=' w-full rounded-[12px]'
                        alt=''
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className='w-full flex items-center rounded-[14px]'>
                  <Skeleton width={400} height={192} />
                </div>
              )}
            </div>

            {!addLoading ? (
              <button
                type='submit'
                className='text-[16px] hover:opacity-[0.9] text-white bg-mainBlue rounded-[16px] font-[600] w-[505px] h-[48px] flex items-center justify-center mt-[8px]'
              >
                Add
              </button>
            ) : (
              <div className='w-full flex items-center justify-center h-[48px]'>
                <ProgressBar
                  visible={true}
                  height='80'
                  width='80'
                  color='#f1f1f1'
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
      </div>
    </Layout>
  );
};

export default EditSponsor;
