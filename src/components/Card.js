import React from 'react'

const Card = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>delicious ice Cream's </p>
                {/* <p className='px-2'>Through 8/26</p> */}
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Taste Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="../../image/card/ice-cream.jpg" alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>hot and sweet tea, coffe</p>
                {/* <p className='px-2'>Through 8/26</p> */}
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Taste Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="../../image/card/indian_spiced_tea.jpg" alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Chill cool drinks</p>
                {/* <p className='px-2'>Through 8/26</p> */}
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Taste Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="../../image/card/rose-milk-1.jpg" alt="" />
        </div>
    </div>
  )
}

export default Card