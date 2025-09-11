import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import Bgfruits from '../../assets/fruits-banner.jpg'

export default function Fruits() {
  return (
    <div>
      <Categorypage title="Fruits & Vagies" bgimage={Bgfruits} categories={['Fruits','Vegetables']}/>
    </div>
  )
}
