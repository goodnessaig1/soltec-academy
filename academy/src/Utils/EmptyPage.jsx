import Empty from '../assets/empty-courses.webp';

export const EmptyPage = ({ text }) => {
  return (
    <div className='flex flex-col items-center gap-8 justify-center mb-10'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <img
          src={Empty}
          className='w-[130px] mdl:w-[200px] rounded-full h-[130px] mdl:h-[200px]'
          alt=''
        />
        <div className='text-base mdl:text-xl font-medium'>{text}</div>
      </div>
    </div>
  );
};
