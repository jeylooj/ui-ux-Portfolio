import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-around h-screen text-6xl font-bold md:flex-row-reverse md:text-9xl w-full lg:px-32 px-16 lg:mt-2 mt-20 title' >
      {/* Box One */}
      <h1 className='overflow-hidden'>
        Hello<span className='text-quaternary'>.</span> <br /> 
        <div className='flex overflow-hidden'> 
        <div className='text-base w-20 bg-secondary h-20 px-2 py-1 -rotate-[25deg] absolute -ml-16 bottom-96 hidden lg:visible '>
          Nice to meet <br /> you!</div>
        <div className='overflow-hidden'>I am </div>
        </div>
       Shahab
      </h1>

      {/* Box Two */}
      <div className='flex flex-col gap-3  w-full lg:w-1/4'>

        <h2 className='text-[20px] bg-secondary px-2  w-[172px]'>UI/UX Designer</h2>
        <h2 className='text-[20px] bg-secondary px-2  w-[192px]'>Graphic Designer</h2>
        <h2 className='text-[20px] bg-secondary px-2  w-[145px]'>2d Animator</h2>

        <h1 className='bg-quaternary text-[20px] px-2 text-white w-[150px]'>Poland</h1>
      </div>
    </div>
  );
}

export default HeroSection;
