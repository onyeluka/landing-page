import React from 'react'
import {
  
    CodeIcon,
    FingerPrintIcon,
    VideoCameraIcon,
    ChipIcon
} from '@heroicons/react/solid'

import bgImg from '../assets/images/hero.png';
const Hero = () => {
  return ( 

    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='text-luka'>React is the Best</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>React Js & Tailwind</h1>
            <p className='text-luka'>Use State, Redux and React.</p>
            <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div>
            <img className='w-full' src={bgImg} alt="/" />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl'>
            <p>Data Services</p>
            <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 text-slate-500'><ChipIcon className='h-6 text-indigo-600' /> Fin Tech</p>
                <p className='flex px-4 py-2 text-slate-500'><CodeIcon className='h-6 text-indigo-600' /> Node, React & Next</p>
                <p className='flex px-4 py-2 text-slate-500'><VideoCameraIcon className='h-6 text-indigo-600' /> Video Apps</p>
                <p className='flex px-4 py-2 text-slate-500'><FingerPrintIcon className='h-6 text-indigo-600' /> Security Systems</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero