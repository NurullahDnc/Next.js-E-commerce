import React from 'react';

export default function ContactUs() {
  return (
    <div className='flex justify-center my-10 items-center'>
      <div className='w-[90%] max-h-[300px] relative bg-blacks '>
        <div>
          <img className='max-h-[300px] object-cover w-[100%]  ' src="./images/3-al-2-ode.webp" alt="" />
        </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center p-4'>
          <h1 className='text-2xl font-bold mb-2'>lorem lorem lorem lrem lorem lorem loremr</h1>
          <p className='mb-4'>lorem lorem lorem lrem lorem lorem lorem</p>
          <button className='bg-white text-red-600 py-2 px-4 rounded-full'>Contact Us</button>
        </div> */}
      </div>
    </div>
  );
}

