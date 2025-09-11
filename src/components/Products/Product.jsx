import Heading from "../Heading/Heading";
import { useState } from "react";
import Products from "../ProductList/ProductList";
import Card from "../Card.jsx/Card";
import Button from "../Button/Button";
import {Link} from 'react-router-dom'


export default function Product() {
  const [activetab, setactivetab] = useState('All');
  const category = ['All', "Fruits", "Vegetables", "Dairy", "SeaFood"];

  let filteritems=activetab==='All'?Products:Products.filter(item=>item.category === activetab)

  const renderCards=filteritems.slice(0,8).map(product=>{
    return(
        <Card image={product.image} name={product.name} price={product.price} key={product.id}/>
    )
  })

  return (
    <div className="max-w-[1400px] mx-auto px-10 py-20">
      <Heading highlight="Our" heading=" Products" />
      <div className="flex gap-3 justify-center  mt-10 flex-wrap ">
        {category.map((item) => {
          return (
            <button key={item}
              className={`px-5 py-2 text-lg rounded-lg  cursor-pointer
                ${activetab === item ?'bg-gradient-to-b from-orange-400 to-orange-500 text-white':'bg-zinc-100'}`} 
                onClick={()=>{setactivetab(item)}}>
              {item}
            </button>
          );
        })}
      </div>


        {/* product listing */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-7">
            {renderCards}
        </div>

            <div className="mt-15 flex justify-center">
               <Link to="/allproducts" className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>View All</Link>
            </div>


    </div>
  );


  
}
