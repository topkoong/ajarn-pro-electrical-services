// Import Swiper styles
import 'swiper/css';

import Card from './Card';
import { FunctionComponent } from 'react';

const CallToAction: FunctionComponent = () => (
  <section className='mt-20 h-full'>
    <article className=''>
      <div className='mb-20'>
        <h2 className='text-black text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-bold text-center my-8'>
          APES can design and develop a wide range of control systems utilizing
          any style of{' '}
          <span
            className={`mx-4 inline-block align-baseline relative after:content-[''] after:bg-[#b8ff65] after:rounded-[1.6rem] after:absolute after:-z-10 after:h-full after:top-0 after:-inset-x-2.5 after:px-0.5 after:py-2.5`}
          >
            PLC / HMI / SCADA
          </span>
          .
        </h2>
      </div>
      <div className='h-full mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
        <Card
          textColor='text-white'
          title='Manufacturing Automation, Industrial Industrial and Process Automation'
          bgColor='bg-black'
          imgUrl='https://moonli.me/wp-content/uploads/2022/04/image-125.png'
        />
        <Card
          textColor='text-black'
          title='SCADA, DAQ, PLC and Robotic Automation'
          bgColor='bg-[#b8ff65]'
          imgUrl='https://moonli.me/wp-content/uploads/2022/04/image-124.png'
        />
        <Card
          textColor='text-black'
          title='Machine Vision Systems and Data Acquisition'
          bgColor='bg-[#f3f3f3]'
          imgUrl='https://moonli.me/wp-content/uploads/2022/04/image-123.png'
        />
        <article className='w-full p-4 md:p-8'>
          <h3 className='border-solid border-black border-b-2 mb-8 pb-4 text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-bold'>
            ...Random text again
          </h3>
          <p className='my-2 text-black font-medium text-sm md:text-base'>
            Automated Quality Assurance,
            <span
              className={`mx-4 inline-block align-baseline relative after:content-[''] after:bg-[#b8ff65] after:rounded-[1.6rem] after:absolute after:-z-10 after:h-full after:top-0 after:-inset-x-2.5 after:px-0.5 after:py-2.5`}
            >
              Inspection, Validation
            </span>{' '}
            and Verification
          </p>
        </article>
      </div>
    </article>
  </section>
);

export default CallToAction;
