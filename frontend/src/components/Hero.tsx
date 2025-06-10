import type { FC } from 'react';
import { assets } from '../assets/assets';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img src={assets.group_profiles} className='w-28' />
          <p className=''>
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href='#speciality'
          className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'
        >
          Book appointment
          <img src={assets.arrow_icon} className='w-3' />
        </a>
      </div>

      <div className='md:w-1/2 relative'>
        <img
          src={assets.header_img}
          alt='home page image'
          className='w-full md:absolute bottom-0 h-auto rounded-lg'
        />
      </div>
    </div>
  );
};

export default Hero;
