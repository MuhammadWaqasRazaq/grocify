import React from 'react'
import Banner from '../Banner/Banner'
import Categorypage from '../Categorypage/Categorypage'
import bgdairy from "../../assets/dairy-banner.jpg"

function Dairy() {
  return (
    <div>
        <Categorypage title="Diary & eggs" bgimage={bgdairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy