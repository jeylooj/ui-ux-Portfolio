import React from 'react';
import Image from 'next/image';
const Resume = () => {
  return (
    <section className='flex relative justify-center h-screen resume'>
    <h2 
   className='text-6xl lg:text-9xl font-semibold rotate-0 lg:-rotate-90 whitespace-nowrap absolute lg:-left-36 lg:bottom-96 overflow-hidden'>Resume
   <span className='text-secondary'>.</span>
   </h2>
   {/* Main */}
   <section className='flex justify-between relative'>
   <Image src='../Assets/SVG/Green Circle.svg' width={47} height={47} alt='square'
   className='absolute bottom-80 -right-44'
   />
   <section className='flex flex-col mx-0 my-auto items-center justify-center w-96 text-center gap-4'>
   <Image src='../Assets/SVG/Yellow Rectangle 5.svg' width={25} height={25} alt='square' className='rotate-90 absolute -top-28 left-96 invisible lg:visible'/>
    <h3 className='text-xl'>Thanks for scrolling down, to here!</h3>
    <p className='text-tertiary'>You can easily download my Resume by clicking the button below! Thanks for considering it!</p>
    <a className='bg-primary text-white w-1/2 rounded p-3 text-lg cursor-pointer' href='www.google.com' download={'Resume'} >Download Resume</a>
    <Image src='../Assets/SVG/Green Circle.svg' width={68} height={68} alt='square' className='rotate-45 absolute -bottom-32 -left-28 invisible lg:visible'/>
   </section>
   </section>
 </section>
  );
}

export default Resume;
