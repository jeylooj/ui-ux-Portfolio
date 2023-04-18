import React from 'react';
import Steps from '@/public/Assets/Data/steps';
import Image from 'next/image';
const Collaboration = () => {
  return (
    <section className='flex flex-col items-center gap-3 collaboration'>
      <h2 className='text-5xl lg:text-9xl font-semibold overflow-hidden'>Collaboration <span className='text-secondary'>.</span></h2>
      <p className='lg:w-2/6 md:w-full w-full text-tertiary mb-10 font-semibold px-10'>Our work is characterized by a methodical and collaborative approach, where we proceed step by step towards achieving our goals, as follows ;</p>
      <section className=''>
        {
          Steps.map((step)=>{
            return (
              <section className='flex-col md:flex-row flex  justify-center mx-auto my-0 align-bottom p-5 mb-10 w-full lg:w-3/4 gap-20' key={step.key}>
                {/* TextBox */}
                <div className='flex flex-col lg:w-2/4 w-full'>
                <span>{step.step}. {step.title}</span>
                <hr className='p-2 mt-1 '/>
                <p className=' text-tertiary'>{step.description}</p>
                </div>
                {/* ImageBox */}
                <img 
                src={`/${step.image}`}
                alt='representing the steps'
                key={step.key}
                className='img-size lg:w-1/4 w-full'
                />
              </section>
            )
           
          })
        }
      </section>
    </section>
  );
}

export default Collaboration;
