import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center about relative h-screen'>
      <h2 
      className='text-6xl lg:text-9xl font-semibold rotate-0 lg:-rotate-90  whitespace-nowrap z-10 absolute lg:-left-48 overflow-hidden'>About me
      <span className='text-quaternary'>.</span>
      </h2>
      <div className='flex flex-col items-center lg:w-1/2 absolute lg:left-96 gap-10 p-10'>
      <Image src='../Assets/SVG/Green Circle.svg' width={68} height={68} alt='square' className='rotate-45 invisible lg:visible'/>
      <p className='text-tertiary grid place-items-center'>
      As a highly motivated and goal-driven individual, I possess a strong attention to detail and a results-oriented mindset. My creativity and self-motivation, combined with a high level of energy and initiative, allow me to tackle any task with focus and determination. Additionally, my keen insight into the needs and perspectives of others enables me to excel in collaborative environments.
      </p>
      <Image src='../Assets/SVG/Yellow Rectangle 5.svg' width={25} height={25} alt='square' className='ml-96 invisible lg:visible'/>
      </div>
      {/* <Image src='../Assets/SVG/Green Circle.svg' width={49} height={49} alt='square'
      className='invisible lg:visible'/> */}
    </section>
  );
}

export default AboutMe;
