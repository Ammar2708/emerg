import Chose from '@/components/home/Chose'
import Hero from '@/components/home/Hero'
import Pay from '@/components/home/Pay'
import Serve from '@/components/home/Serve'
import React from 'react'


const page = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
     <Serve/>
      <Chose/>
     <Pay/> 
    </div>
  )
}

export default page