// Import Swiper styles
import 'swiper/css';

import { FunctionComponent } from 'react';

const Reliability: FunctionComponent = () => (
  <section className='mt-20 xl:p-8'>
    <div className=''>
      <div>
        <h2 className='text-black text-lg md:text-2xl xl:text-6xl 2xl:text-7xl font-bold my-8'>
          Reliability
        </h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <article>
          <h3 className='border-solid border-black border-b-2 mb-8 pb-4 text-xl font-normal'>
            01
          </h3>
          <p className='my-2 text-black font-medium text-sm lg:text-base'>
            We do what we say we’ll do
          </p>
        </article>
        <article>
          <h3 className='border-solid border-black border-b-2 mb-8 pb-4 text-xl font-normal'>
            02
          </h3>
          <p className='my-2 text-black font-medium text-sm lg:text-base'>
            APES works with our clients as a long-term partner, as an extension
            of their own team, inventing new ways of doing things faster.
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default Reliability;
