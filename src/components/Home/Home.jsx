import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Product from '../Products/Product'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Testimonials from '../testimonials/Testimonials'
import Footer from '../Footer/Footer'
function Home() {
  return (
    <div>
         <Hero></Hero>
         <Category></Category>
         <Values></Values>
         <Product/>
         <Discount/>
         <Process/>
         <Testimonials/>

    </div>
   
  )
}

export default Home