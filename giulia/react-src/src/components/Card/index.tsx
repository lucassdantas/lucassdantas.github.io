import React from 'react'
import flowerImg from '@/assets/giulia.jpg'
export const Card = () => {
  return (
    <div className='rounded-lg relative flex flex-col justify-center items-center p-4 shadow-md bg-white mb-12 w-fit'>
      <img src={flowerImg} className='rounded-full w-[120px] h-[120px]'/>
      <h3 className="font-bold my-2 text-lg">Giulia Lima</h3>
        <p>A beleza mais bela</p>
        <p>Que me conduz a Jesus</p>
    </div>
  )
}
