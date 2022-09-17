// Import Swiper styles
import 'swiper/css';

import Card from './Card';
import { FunctionComponent } from 'react';

const Charity: FunctionComponent = () => (
  <section className='mt-20 h-full'>
    <article className=''>
      <div className='h-full mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
        <Card
          textColor='text-black'
          title='Giving back'
          description=' We regularly donate a portion of our profits to various charities, NGOs, independent mass media and charitable campaigns'
          bgColor='bg-[#b8ff65]'
          imgUrl='https://moonli.me/wp-content/uploads/2022/04/image-129.png'
        />
        <Card
          textColor='text-black'
          title=''
          description='
          So far, we have contributed to COVID-19 Emergency Relief Fund, The Africa Development Promise, Save the Children, IPC, Coin Center, Gitcoin, Impact Market, Water Wells for Africa, Rainforest Action Network, Amref Health Africa and many others.                '
          bgColor='bg-[#f3f3f3]'
          imgUrl='https://moonli.me/wp-content/uploads/2022/04/image-123.png'
        />
      </div>
    </article>
  </section>
);

export default Charity;
