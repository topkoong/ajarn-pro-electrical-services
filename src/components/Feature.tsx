// Import Swiper styles
import 'swiper/css';

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { Autoplay } from 'swiper';
import Client from '@components/Client';
import { forwardRef } from 'react';

// const SwiperButtonPrev: FunctionComponent<PropsWithChildren> = ({
//   children,
// }) => {
//   const swiper = useSwiper();
//   return <button onClick={() => swiper.slidePrev()}>{children}</button>;
// };
// const SwiperButtonNext: FunctionComponent<PropsWithChildren> = ({
//   children,
// }) => {
//   const swiper = useSwiper();

//   return <button onClick={() => swiper.slideNext()}>{children}</button>;
// };

const Feature = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    className='md:mt-40 bg-[#F3F3F3] p-8 rounded-[2rem] md:rounded-[3rem]'
  >
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 lg:justify-center lg:items-center'>
      <div>
        <h2 className='text-center md:text-left text-black text-4xl xl:text-5xl 2xl:text-6xl font-bold my-8'>
          Clients
        </h2>
        <p className='text-center md:text-left my-2 text-black font-medium text-sm lg:text-base'>
          Our Field Service professionals ensure minimized downtime while
          meeting all safety standards, maximizing your ROI.
        </p>
      </div>
      <div className='content-center'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 2500,
          }}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay]}
        >
          {/* <SwiperButtonPrev>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                />
              </svg>
            </SwiperButtonPrev> */}
          <SwiperSlide>
            <Client
              title='Client A'
              imgUrl='https://moonli.me/wp-content/uploads/2022/03/logo1.svg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Client
              title='Client B'
              imgUrl='https://moonli.me/wp-content/uploads/2022/03/logo4.svg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Client
              title='Client C'
              imgUrl='https://moonli.me/wp-content/uploads/2022/03/logo9.svg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Client
              title='Client D'
              imgUrl='https://moonli.me/wp-content/uploads/2022/03/logo11.svg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Client
              title='Client E'
              imgUrl='https://moonli.me/wp-content/uploads/2022/03/logo8.svg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Client
              title='Client F'
              imgUrl='https://moonli.me/wp-content/uploads/2022/03/logo6.svg'
            />
          </SwiperSlide>
          {/* <SwiperButtonNext>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                />
              </svg>
            </SwiperButtonNext> */}
        </Swiper>
      </div>
    </div>
  </section>
));

Feature.displayName = 'Feature';

export default Feature;
