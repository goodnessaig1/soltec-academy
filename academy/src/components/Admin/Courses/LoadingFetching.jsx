import { Oval } from 'react-loader-spinner';

export const LoadingFetching = () => {
  return (
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
  );
};
