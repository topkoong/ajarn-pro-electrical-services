import { FunctionComponent } from 'react';

// const Hero = forwardRef<HTMLElement, HeroProps>(({onScrollClick}, ref) => (

const Hero: FunctionComponent<{
  onScrollClick: () => void;
}> = ({ onScrollClick }) => (
  <section
    className={`p-8 xl:p-20 rounded-[2rem] xl:rounded-[3rem] mb-20 bg-contain md:bg-cover bg-bottom md:bg-center bg-no-repeat bg-[url('https://moonli.me/wp-content/themes/moonli/images/hero_background.png')] bg-[#b8ff65]`}
  >
    <h1 className='sm:px-20 md:px-32 xl:px-64 text-black text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-bold text-center my-8'>
      We offer expertise in custom automation and control systems solutions.
    </h1>
    <p className='px-12 sm:px-32 md:px-48 xl:px-80 my-2 text-center text-black font-normal md:font-medium text-sm md:text-base'>
      We provide automation services from conception through completion on a
      fixed price or T&M basis. APES can design and develop a wide range of
      control systems utilizing any style of PLCs.
    </p>
    <div className='mt-8 md:mt-16 flex justify-center h-full'>
      <button
        type='button'
        onClick={onScrollClick}
        className='animate-bounce bg-black p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center'
      >
        <svg
          className='w-6 h-6 text-white'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
        </svg>
      </button>
    </div>
  </section>
);

export default Hero;
