import { FunctionComponent } from 'react';

interface CardProps {
  textColor: string;
  description?: string;
  bgColor: string;
  title: string;
  imgUrl: string;
}

const Card: FunctionComponent<CardProps> = ({
  textColor,
  bgColor,
  description,
  title,
  imgUrl,
}) => (
  <div
    className={`${bgColor} w-full p-4 md:p-8 rounded-[2rem] md:rounded-[3rem]`}
  >
    <div className='flex grow basis-full w-full flex-col'>
      <h3
        className={`self-start ${textColor} font-medium ${
          description
            ? 'text-center md:text-left text-4xl xl:text-5xl 2xl:text-6xl'
            : 'text-lg md:text-xl xl:text-2xl'
        } my-8`}
      >
        {title}
      </h3>
      {description && <p>{description}</p>}
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
