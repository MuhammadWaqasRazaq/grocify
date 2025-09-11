import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import bgall from '../../assets/all-banner.jpg'
export const Allproducts = () => {
  return (
    <div>
        <Categorypage title="All Products" bgimage={bgall} categories={['All']}/>
    </div>
  )
}
