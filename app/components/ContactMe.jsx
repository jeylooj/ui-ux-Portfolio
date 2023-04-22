import React from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

const ContactMe = () => {
  return (
    <section className='items-center justify-center flex flex-col py-10 contact'>
         <h2 
      className='text-6xl lg:text-8xl font-semibold items-center justify-center text-center py-16'>Contact me
      <span className='text-quaternary'>.</span>
      </h2>
    <section className='flex-col md:flex-row flex items-center justify-center gap-x-20 lg:px-32 px-10' key={'j'}>
    <section className='md:w-1/2 flex-col w-full'>
        <Image src="../Assets/SVG/Green Circle.svg"
          width={68}
          height={68}
          alt='circle'
          className='rotate-25 absolute right-1/2 invisible lg:visible'
          />
      <h3 className='lg:text-5xl text-4xl font-bold text-center py-8'>"Let's connect"</h3>
      <p className='text-tertiary font-semibold py-8 text-lg w-full '>"Thank you for taking the time to review my portfolio. If you are interested in learning more about how I can assist you or your company in achieving your goals, please don't hesitate to contact me. I am currently seeking full-time opportunities and would welcome the chance to discuss any potential positions further."</p>
      {/* Socials */}
      <div className='flex flex-col md:flex-row justify-around  py-4 relative'>
        {/* Email */}
        <div className='gap-5 flex flex-col'>
          <div className='flex items-center gap-2'>
          <h4 className='text-2xl font-semibold'>Email</h4>
          <img src="../Assets/SVG/Email Icon.svg" alt=""/>
          </div>
          <span className='text-tertiary'>xshahabsx@gmail.com</span>
        </div>
        {/* Dribble */}
        <div className='gap-5 flex flex-col'>
          <div className='flex items-center gap-2'>
          <h4 className='text-2xl font-semibold'>Dribble</h4>
          <img src="../Assets/SVG/dribbble-icon-1-logo-png-transparent 1.png" alt="" />
          </div>
          <span className='text-tertiary'>dribbble.com/ShahabS</span>
        </div>
      </div>
    </section>
    <ContactForm/>
    </section>
    </section>
  );
}

export default ContactMe;
