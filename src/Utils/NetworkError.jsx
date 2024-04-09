import { MdOutlineNetworkCheck } from 'react-icons/md';

const NetworkError = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className='w-full h-screen bg-[#f1f1f1]'>
      <div className='pl-[40px] lg:pl-[160px] flex flex-col gap-[24px] pt-[160px]'>
        <MdOutlineNetworkCheck color='gray' size={46} />
        <div className='flex text-gray-500 flex-col gap-[4px]'>
          <h2 className='text-[36px] '>There is no Internet connection</h2>
          <h4 className='text-[24px]'>Your device is offline.</h4>
        </div>
        <div className='flex flex-col gap-[4px]'>
          <span className=''>Try:</span>
          <ul className='list-disc'>
            <li className='ml-[40px]'>Checking the network cable or router</li>
            <li className='ml-[40px]'>Resetting the moderm or router</li>
            <li className='ml-[40px]'>Reconnecting to internet or Wi-Fi</li>
          </ul>
        </div>
        <div className=''>
          <button
            className='bg-mainBlue text-white px-[30px] py-[8px] rounded-[24px] hover:opacity-[0.8] transition duration-200 ease-in-out '
            onClick={handleReload}
          >
            Reload
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetworkError;
