import { FunctionComponent } from 'react';

interface ClientProps {
  title: string;
  imgUrl: string;
}

const Client: FunctionComponent<ClientProps> = ({ title, imgUrl }) => (
  <div className='bg-white p-8 bg-white border border-[#E2E2E2] rounded-[2rem] md:rounded-[3rem]'>
    <div className='flex justify-between items-center'>
      <h3 className='black text-lg md:text-xl xl:text-5xl 2xl:text-6xl font-bold my-8'>
        {title}
      </h3>
      <div className=''>
        <img src={imgUrl} alt={title} />
      </div>
    </div>
    <div></div>
  </div>
);

export default Client;
