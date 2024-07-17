import { Emogi } from './Assets';

export const ErrorPage = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className='flex flex-col items-center gap-4 lg:gap-8 justify-center'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <div className=''>An error has occured!</div>
        <img src={Emogi} className='h-[75px]' alt='' />
      </div>
      <div
        onClick={handleReload}
        className='px-4 lg:px-8 py-2 border-2 font-medium hover:cursor-pointer transition duration-300 hover:bg-lightGray border-blue-500 text-blue-500 bg-white rounded-3xl'
      >
        Try again
      </div>
    </div>
  );
};
