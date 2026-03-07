import React from 'react'

import Hero from '@/components/about/Hero';
import Card from '@/components/about/Card';
import Comments from '@/components/about/Comments';

const page = () => {
  return (
    <div className='overflow-hidden'>
       <Hero/>
       <Card/>
      <Comments/>
      
    </div>
  )
}

export default page