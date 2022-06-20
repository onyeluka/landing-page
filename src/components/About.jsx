import React from 'react';

const About = () => {
  return (
    <div className="w-full my-32 ">
<div class="max-w-[1240px] mx-auto">
    <div className='text-center'>
        <h2 className="text-5xl font-bold">The Best Front End Frame Work</h2>
        <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum at odit fugit dolore temporibus?

        </p>
    </div>
    <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
        <div className="border py 8 rounded-xl  shadow-xl">
            <p className='text-6xl font-bold text-indigo-600'>75%</p>
            <p className="text-gray-400 mt-2">Developers</p>
        </div>
        <div className="border py 8 rounded-xl  shadow-xl">
            <p className='text-6xl font-bold text-indigo-600'>1M+</p>
            <p className="text-gray-400 mt-2">Apps</p>
        </div>
        <div className="border py 8 rounded-xl  shadow-xl">
            <p className='text-6xl font-bold text-indigo-600'>75M+</p>
            <p className="text-gray-400 mt-2">Websites</p>
        </div>
    </div>
</div>
    </div>
  )
}

export default About