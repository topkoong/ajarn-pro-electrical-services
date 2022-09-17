// Import Swiper styles
import 'swiper/css';

import Card from './Card';
import { FunctionComponent } from 'react';

const GetInTouch: FunctionComponent = () => (
  <section className='mt-20 h-full get-in-touch-container'>
    <article className=''>
      <div className='h-full mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
        <div>
          <h3 className='text-center lg:text-left text-black text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-8'>
            Get in touch
          </h3>
          <h4 className='text-center lg:text-left text-black font-medium text-sm lg:text-base mb-8'>
            Links to our social media
          </h4>
          <div className='flex justify-center lg:justify-start items-center gap-8'>
            <a
              href=''
              className='flex justify-center items-center bg-black rounded-full w-16 h-16'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.362483 11.0817C2.81774 9.72928 5.55848 8.60053 8.1193 7.46601C12.5249 5.60775 16.948 3.7817 21.4157 2.08166C22.285 1.79199 23.8469 1.50871 24 2.79691C23.9162 4.62034 23.5712 6.43309 23.3345 8.24584C22.7339 12.2322 22.0398 16.205 21.3629 20.1783C21.1297 21.5018 19.4717 22.1869 18.4109 21.3399C15.8614 19.6179 13.2924 17.9126 10.7755 16.1506C9.95104 15.3128 10.7156 14.1098 11.4519 13.5115C13.5517 11.4422 15.7786 9.68404 17.7686 7.50775C18.3054 6.21142 16.7193 7.30393 16.1962 7.63867C13.3215 9.61963 10.5173 11.7215 7.48649 13.4625C5.93838 14.3147 4.13403 13.5864 2.58662 13.1109C1.19916 12.5364 -0.833964 11.9577 0.362343 11.0818L0.362483 11.0817Z'
                  fill='white'
                ></path>
              </svg>
            </a>
            <a
              href=''
              className='flex justify-center items-center bg-black rounded-full w-16 h-16'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M23.2042 4.5581C22.353 4.95005 21.4375 5.21452 20.4764 5.33317C21.4573 4.72434 22.2101 3.75971 22.5648 2.6096C21.647 3.17396 20.6311 3.58373 19.549 3.80466C18.6829 2.84792 17.4484 2.25 16.0826 2.25C13.4598 2.25 11.3334 4.45416 11.3334 7.17277C11.3334 7.55852 11.3753 7.93405 11.4563 8.29433C7.50924 8.08933 4.00953 6.12967 1.66718 3.15112C1.25851 3.87792 1.02427 4.72341 1.02427 5.62595C1.02427 7.33374 1.86266 8.84038 3.13698 9.72343C2.35869 9.69752 1.62607 9.47634 0.985924 9.10744C0.985501 9.1279 0.985501 9.1486 0.985501 9.16978C0.985501 11.5545 2.62258 13.5441 4.79539 13.9967C4.39682 14.1089 3.9772 14.1693 3.544 14.1693C3.23768 14.1693 2.94033 14.1386 2.6503 14.0809C3.25492 16.0365 5.00877 17.4599 7.08661 17.4996C5.46124 18.82 3.41365 19.607 1.18831 19.607C0.805154 19.607 0.427262 19.5834 0.0555725 19.5382C2.15771 20.9352 4.65381 21.75 7.33576 21.75C16.0715 21.75 20.8481 14.2488 20.8481 7.74351C20.8481 7.53042 20.844 7.31757 20.8348 7.10663C21.7624 6.41265 22.568 5.54558 23.2042 4.5581Z'
                  fill='white'
                ></path>
              </svg>
            </a>
            <a
              href=''
              className='flex justify-center items-center bg-black rounded-full w-16 h-16'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M4 4C2.34315 4 1 5.34315 1 7V8.01643L10.2512 12.4402C11.3608 12.9708 12.6392 12.9708 13.7488 12.4402L23 8.01643V7C23 5.34315 21.6569 4 20 4H4ZM23 10.3974L14.6232 14.4031C12.9588 15.199 11.0412 15.199 9.3768 14.4031L1 10.3974V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V10.3974Z'
                  fill='white'
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </article>
  </section>
);

export default GetInTouch;
