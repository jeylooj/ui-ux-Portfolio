import React from 'react';
import Gallery from './Gallery';

const Portfolio = () => {
  return (
    <section className='flex items-center gap-30 w-screen h-screen portfolio justify-center relative'>
      <Gallery/>
      <h2 
      className='text-6xl lg:text-9xl font-semibold rotate-0 lg:rotate-90 whitespace-nowrap absolute -right-28'>Portfolio
      <span className='text-secondary'>.</span>
      </h2>
    </section>
  );
}

export default Portfolio;
