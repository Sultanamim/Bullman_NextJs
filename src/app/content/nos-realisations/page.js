import { achievement } from '@/config'
import Breadcrumb from '@/utils/Breadcrumb'
import React from 'react'

export default function page() {
  return (
    <div className='mt-[55px]  '>
    <div className='ml-[70px]'>
      <Breadcrumb slug={"NOS RÉALISATIONS"} />
    </div>
    
    <div className=' mt-24 grid grid-cols-4 px-64 '>
    {achievement.map((item, index)=>(
        <div key={index} className=' flex items-center justify-center my-5 '>{<img src={item} className=' w-44 h-40 rounded-[15px] shadow-lg'  />} </div>
    ))}
    </div>
    </div>
  )
}
