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
        <div className=''>I am </div>
        </div>
       Shahab
      </h1>

      {/* Box Two */}
      <div className='flex flex-col gap-3  w-full lg:w-1/4'>
      <Image src='/Assets/SVG/Green Circle.svg' width={49} height={49} alt='square'
      className=''/>
        <h2 className='text-base bg-secondary px-2  w-8/12'>UI/UX Designer</h2>
        <h2 className='text-base bg-secondary px-2  w-10/12'>Graphic Designer</h2>
        <h2 className='text-base bg-secondary px-2  w-7/12'>2d Animator</h2>
        <Image src='/Assets/SVG/Green Circle.svg' width={69} height={69} alt='square'/>
        <h1 className='bg-quaternary text-base px-2 text-white w-4/12'>Poland</h1>
      </div>
    </div>
  );
}

export default HeroSection;
