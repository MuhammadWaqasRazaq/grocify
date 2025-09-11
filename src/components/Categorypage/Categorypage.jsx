import React from 'react'
import Banner from '../Banner/Banner'
import products from '../ProductList/ProductList'
import Card from '../Card.jsx/Card'
import Product from '../Products/Product'

function Categorypage({title,bgimage,categories=[]}) {


    let filteritems=categories.includes('All')
    ? products
    : products.filter(item=>categories.includes(item.category))

    const renderproducts = filteritems.map((product)=>{
       return <Card image={product.image} name={product.name} price={product.price}  />
    })
  return (
    <div>
        <Banner title={title} bgimage={bgimage}/>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10'>
            {renderproducts}
        </div>
    </div>
  )
}

export default Categorypage