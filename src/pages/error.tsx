import { NextPage } from 'next';

const ErrorPage: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center font-display uppercase'>
      <p>Invalid Code</p>
    </div>
  );
};

export default ErrorPage;
