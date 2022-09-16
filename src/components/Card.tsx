import { FunctionComponent } from 'react';

interface CardProps {
  textColor: string;
  bgColor: string;
  title: string;
  imgUrl: string;
}

const Card: FunctionComponent<CardProps> = ({
  textColor,
  bgColor,
  title,
  imgUrl,
}) => (
  <div
    className={`${bgColor} w-full max-w-full lg:max-w-sm p-4 md:p-8 rounded-[2rem] md:rounded-[3rem]`}
  >
    <div className='flex grow basis-full w-full max-w-full lg:max-w-sm flex-col'>
      <h3
        className={`self-start ${textColor} text-lg md:text-xl xl:text-2xl font-medium my-8`}
      >
        {title}
      </h3>
      <div className='w-28 md:w-46 h-auto self-end'>
        <img
          className='block object-contain max-w-full'
          src={imgUrl}
          alt={title}
        />
      </div>
    </div>
    <div></div>
  </div>
);

export default Card;
