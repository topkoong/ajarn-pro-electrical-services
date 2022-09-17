/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from 'react';
import Link from 'next/link';

// TODO:
// Change a tag to Link tag

const Footer: FunctionComponent<{
  onScrollClick: () => void;
}> = ({ onScrollClick }) => (
  <footer className='p-4 bg-black rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900'>
    <div className='sm:flex sm:items-center sm:justify-between'>
      <a href='/' className='flex items-center mb-4 sm:mb-0'>
        <img
          src='./icons/footer-logo.svg'
          className='mr-3 h-8'
          alt='Ajarn "PRO" Electrical Services Footer Logo'
        />
        <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
          Electrical Services
        </span>
      </a>
      <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
        <li>
          <a href='#' className='mr-4 hover:underline md:mr-6 '>
            About
          </a>
        </li>
        <li>
          <a href='#' className='mr-4 hover:underline md:mr-6'>
            Privacy Policy
          </a>
        </li>
        <li>
          <a href='#' className='mr-4 hover:underline md:mr-6 '>
            Licensing
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            Contact
          </a>
        </li>
      </ul>
    </div>
    <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
    <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
      © 2022{' '}
      <a href='http://topkoong.github.io/' className='hover:underline'>
        Theeruttop™
      </a>
      . All Rights Reserved.
    </span>
    <div className='mt-8 md:mt-16 flex justify-center h-full'>
      <button
        type='button'
        onClick={onScrollClick}
        className='animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center'
      >
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
            d='M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75'
          />
        </svg>
      </button>
    </div>
  </footer>
);

export default Footer;
