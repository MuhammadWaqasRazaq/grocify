import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import bgseafood from "../../assets/seafood-banner.jpg"
function Seafood() {
  return (
   <Categorypage title="Sea Foods" bgimage={bgseafood} categories={['SeaFood','Meat']}/>
  )
}

export default Seafood