import React from 'react';

const ContactForm = () => {
  return (
    <form className='flex flex-col w-full md:w-1/2  py-10 gap-4'>
      {/* Name */}
      <label>Name</label>
      <input type="text" className='bg-light h-12 rounded-lg p-2'/>
      {/* Email */}
      <label>Email</label>
      <input type="email" className='bg-light h-12 rounded-lg p-2'/>
      {/* Message */}
      <label>Message</label>
      <textarea className='bg-light h-28 rounded-lg p-2'></textarea>
      {/* Button */}
      <button className='bg-primary text-white p-3 rounded-lg font-semibold'>"Let's join forces"</button>
    </form>
  );
}

export default ContactForm;
