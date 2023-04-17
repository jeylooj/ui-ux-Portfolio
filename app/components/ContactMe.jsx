import React from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

const ContactMe = () => {
  return (
    <section className='h-screen items-center justify-center flex flex-col py-10 contact'>
         <h2 
      className='text-6xl lg:text-8xl font-semibold items-center justify-center text-center py-16'>Contact me
      <span className='text-quaternary'>.</span>
      </h2>
    <section className='flex items-center justify-center gap-x-20 px-32' key={'j'}>
    <section className='w-1/2 flex-col'>
        <Image src="../Assets/SVG/Green Circle.svg"
          width={68}
          height={68}
          alt='circle'
          className='rotate-25 absolute right-1/2'
          />
      <h3 className='text-5xl font-bold text-center py-8'>"Let's connect"</h3>
      <p className='text-tertiary font-semibold py-8 text-lg'>"Thank you for taking the time to review my portfolio. If you are interested in learning more about how I can assist you or your company in achieving your goals, please don't hesitate to contact me. I am currently seeking full-time opportunities and would welcome the chance to discuss any potential positions further."</p>
      {/* Socials */}
      <div className='flex justify-between py-4'>
        {/* Email */}
        <div>
          <div className='flex items-center gap-2'>
          <h4 className='text-2xl font-semibold'>Email</h4>
          <img src="../Assets/SVG/Email Icon.svg" alt="" />
          </div>
          <span className='text-tertiary'>xshahabsx@gmail.com</span>
          <Image src="../Assets/SVG/Nice to meet again you sticker.svg"
          width={94}
          height={94}
          className='absolute'
          alt='nice to meet you'
          />
        </div>
        {/* Dribble */}
        <div>
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
