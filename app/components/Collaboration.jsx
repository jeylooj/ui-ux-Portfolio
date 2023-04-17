import React from 'react';
import Steps from '@/public/Assets/Data/steps';
import Image from 'next/image';
const Collaboration = () => {
  return (
    <section className='flex flex-col items-center gap-3 collaboration'>
      <h2 className='text-8xl font-semibold '>Collaboration <span className='text-secondary'>.</span></h2>
      <p className='w-2/6 text-tertiary mb-10 font-semibold'>Our work is characterized by a methodical and collaborative approach, where we proceed step by step towards achieving our goals, as follows ;</p>
      <section className=''>
        {
          Steps.map((step)=>{
            return (
              <section className='flex w-3/4 justify-center mx-auto my-0 h-72 align-bottom p-5 mb-10' key={"j"}>
                {/* TextBox */}
                <div className='flex flex-col'>
                <span>{step.step}. {step.title}</span>
                <hr className='p-2 mt-1 w-3/4'/>
                <p className='w-3/4 text-tertiary'>{step.description}</p>
                </div>
                {/* ImageBox */}
                <img 
                src={`/${step.image}`}
                width={329}
                height={266}
                alt='representing the steps'
                key={step.key}
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
