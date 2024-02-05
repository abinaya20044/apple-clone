import React from 'react'
import iphone from '../images/iphone.jpg';

const Middle = () => {
  return (
    <div className=''>
         <div className='absolute text-5xl top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center font-sans'>
            iPhone 15 Pro
            <div className='font-sm text-2xl'>Titanium. So strong. So light. So Pro.</div>
            <a href='https://www.apple.com/in/iphone-15-pro/' className='text-blue-500 hover:underline mr-4 font-thin text-2xl overflow-hidden'>Learn more &nbsp;&gt;
            </a>
          <a href='https://www.apple.com/in/shop/buy-iphone/iphone-15-pro' className='text-blue-500 hover:underline mr-4 text-2xl font-thin overflow-hidden'>Buy &nbsp;&gt;</a>
        </div>
        
        <img src={iphone} className='min-h-50vh w-full ' alt=""></img>
       
    </div>
    
  )
}

export default Middle;