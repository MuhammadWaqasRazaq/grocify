import React from "react";
import Heading from "../Heading/Heading";
import Fruitcat from "../../assets/fruits-and-veggies.png";
import Dairytcat from "../../assets/dairy-and-eggs.png";
import Meat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";
import {Link} from 'react-router-dom'
function Category() {
  const cardrender = category.map((card) => {
    return (
      <div className="flex-1  basis-[300px]" key={card.id}>
        <div className=" w-full min-h-[30vh] relative -mb-10">
          <img src={card.image} className="absolute bottom-0" alt="img" />
        </div>
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          {/* <Button content="See All"></Button> */}
          <Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>Shop Now</Link>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-20 py-20 ">
        <Heading highlight="Shop" heading=" By Category"></Heading>
        {/* {category cards} */}
        <div className="flex gap-10 md:mt-15 flex-wrap">{cardrender}</div>
      </div>
    </section>
  );
}

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits and Vagies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: Fruitcat,
    path:'/fruits'
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: Dairytcat,
    path:'/dairy'
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: Meat,
    path:'/seafood'
  },
];
