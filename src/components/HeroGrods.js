import React from 'react'
import watchtwo from '../images/watchtwo.jpg'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import { FaApple } from "react-icons/fa";
import img5 from  '../images/img5.jpg';


const HeroGrods = () => {
  return (
    <div className='mt-4 grid grid-cols-2 grid-rows-3 gap-4  p-0'>
        <div className='bg-quaternary h-[calc(100vh-48px)] '>
            <div className='flex flex-col items-center space-y-2 w-full mt-12 mb-6'>
                <div className='flex flex-col items-center space-y-2'>
                    <div className='flex items-center '>
                        <FaApple size='30'/>
                    <h4 className='text-4xl font-semibold '>
                        Watch <span className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-blue-400 font-extrabold'></span>
                    </h4>
                    </div>
                    <h5 className='text-xl font-normal'>
                        Next-Level adventure.
                    </h5>
                </div>
                <div className='flex justify-between w-1/3'>
                    <a href='/' className='text-blue-400 text-lg font-normal'>
                        <span className='hover:underline'>Learn more</span>
                        <span>&rarr;</span>
                    </a>
                    <a href='/' className='text-blue-400 text-lg font-normal'>
                        <span className='hover:underline'>Buy</span>
                        <span>&rarr;</span>
                    </a>
                </div>
            </div>
            <div className='w-full h-[60%]'>
                <img src={watchtwo} alt='iPhone 14' className='object-contain w-full h-full'></img>
            </div>
        </div>
        <div className='bg-tertirary h-[calc(100vh-48px)]'>
        <div className='flex flex-col items-center space-y-2 w-full mt-12 mb-6'>
                <div className='flex flex-col items-center space-y-2'>
                    <h4 className='text-4xl font-semibold '>
                        Valentine's day
                    </h4>
                    <h5 className='text-xl font-normal'>
                        Find the perfect gift.
                    </h5>
                </div>
                <div className='flex justify-between w-1/3'>
                    <a href='/' className='text-blue-400 text-lg font-normal'>
                        <span className='hover:underline'>Learn more</span>
                        <span>&rarr;</span>
                    </a>
                    <a href='/' className='text-blue-400 text-lg font-normal'>
                        <span className='hover:underline'>Buy</span>
                        <span>&rarr;</span>
                    </a>
                </div>
            </div>
            <div className='w-full h-[65%]'>
                <img src={img1} alt='iPhone 14' className='object-contain w-full h-full'></img>
            </div>
        </div>
        <div className='bg-tertirary h-[calc(100vh-48px)]'>
        <div className='flex flex-col items-center space-y-2 w-full mt-12 mb-6'>
                <div className='flex flex-col items-center space-y-2 '>
                    <h4 className='text-4xl font-semibold '>
                        MacBook pro
                    </h4>
                    <h5 className='text-xl font-normal'>
                        Mind-blowing. Head-turning.
                    </h5>
                </div>
                <div className='flex justify-between w-1/3'>
                    <a href='/' className='text-blue-400 text-lg font-normal'>
                        <span className='hover:underline'>Learn more</span>
                        <span>&rarr;</span>
                    </a>
                    <a href='/' className='text-blue-400 text-lg font-normal'>
                        <span className='hover:underline'>Buy</span>
                        <span>&rarr;</span>
                    </a>
                </div>
            </div>
            <div className='w-full h-[65%]'>
                <img src={img2} alt='iPhone 14' className='object-contain w-full h-full'></img>
            </div>
        </div>
        <div className='bg-tertirary h-[calc(100vh-48px)]'>
        <div className='flex flex-col items-center space-y-2 w-full mt-12 mb-6'>
                <div className='flex flex-col items-center space-y-2'>
                    <h4 className='text-4xl font-semibold'>
                        iPad
                    </h4>
                    <h5 className='text-xl font-normal'>
                        Lovable. Drawable. Magical
                    </h5>
                </div>
                <div className='flex justify-between w-1/3'>
                    <a href='/' className='text-blue-400 text-lg font-normal'>
                        <span className='hover:underline'>Learn more</span>
                        <span>&rarr;</span>
                    </a>
                    <a href='/' className='text-blue-400 text-lg font-normal'>
                        <span className='hover:underline'>Buy</span>
                        <span>&rarr;</span>
                    </a>
                </div>
            </div>
            <div className='w-full h-[65%]'>
                <img src={img3} alt='iPhone 14' className='object-contain w-full h-full'></img>
            </div>
        </div>
        <div className='bg-tertirary h-[calc(100vh-48px)]'>
        <div className='flex flex-col items-center space-y-2 w-full mt-12 mb-6'>
                <div className='flex flex-col items-center space-y-2'>
                    <h4 className='text-4xl font-semibold '>
                        AirPods Pro
                    </h4>
                    <h5 className='text-xl font-normal'>
                        Adaptive Audio.Now playing
                    </h5>
                </div>
                <div className='flex justify-between w-1/3'>
                    <a href='/' className='text-blue-400 text-lg font-normal'>
                        <span className='hover:underline'>Learn more</span>
                        <span>&rarr;</span>
                    </a>
                    <a href='/' className='text-blue-400 text-lg font-normal'>
                        <span className='hover:underline'>Buy</span>
                        <span>&rarr;</span>
                    </a>
                </div>
            </div>
            <div className='w-full h-[65%]'>
                <img src={img4} alt='iPhone 14' className='object-contain w-full h-full'></img>
            </div>
        </div>
        <div className='bg-tertirar y h-[calc(100vh-48px)]'>
        <div className='flex flex-col items-center space-y-2 w-full mt-12 mb-6'>
                <div className='flex flex-col items-center space-y-2'>
                <div className='flex items-center'>
                         <FaApple size='30'/>
                    <h4 className='text-4xl font-semibold'>
                        Trade In
                    </h4>
                    </div>
                    <h5 className='text-xl font-normal'>
                        Upgrade and save.Its taht easy.
                    </h5>
                </div>
                <div className='flex justify-between w-1/3'>
                    <a href='/' className='text-blue-400 text-lg font-normal'>
                        <span className='hover:underline'>See what device is worth</span>
                        <span>&rarr;</span>
                    </a>
                    
                </div>
            </div>
            <div className='w-full h-[65%]'>
                <img src={img5} alt='iPhone 14' className='object-contain w-full h-full'></img>
            </div>
        </div>

    </div>
  )
}

export default HeroGrods;