import React from 'react';
import Gallery from './Gallery';

const Portfolio = () => {
  return (
    <section className='flex lg:flex-row flex-col-reverse  gap-30 p-10 portfolio justify-center relative items-center'>
      <Gallery/>
      <h2 
      className='text-6xl lg:text-9xl font-semibold rotate-0 lg:rotate-90 whitespace-nowrap lg:absolute lg:-right-28 overflow-hidden '>Portfolio
      <span className='text-secondary'>.</span>
      </h2>
    </section>
  );
}

export default Portfolio;
