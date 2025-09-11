import React,{useState}from 'react'
import { FaHeart } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { Link } from 'react-router-dom';



function Navbar() {


const [showmneu, setShowmne]= useState(false);

const togglemenu =()=>{
    setShowmne(!showmneu);
}

  return (
    <header className='bg-white fixed top-0 right-0 left-0 z-50 shadow-lg'>
        <nav className='mx-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center'>

            {/* logo */}
            <Link to="/" className='text-3xl font-bold'>
                Gr<span className='text-orange-500 uppercase'>o</span>cify
            </Link>

            {/* Desktop menu */}
            <ul className=" md:flex items-center gap-x-15 hidden">
                <li><a href="#" className='font-semibold  text-orange-500 '>Home</a></li>
                <li><a href="#" className='font-semibold text-zinc-800 hover:text-orange-500 '>About Us</a></li>
                <li><a href="#" className='font-semibold text-zinc-800 hover:text-orange-500'>Process</a></li>
                <li><a href="#" className='font-semibold text-zinc-800 hover:text-orange-500'>Contact</a></li>
            </ul>

            {/* Nav Action */}
            <div className='flex items-center gap-x-5'>
                {/* input field */}
                <div className="md:flex  p-1 border-2 border-orange-500 rounded-full hidden">
                    <input type="text" name="text" id="text" placeholder='search.....' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'/>
                    <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoSearch /></button>
                </div>
                <a href="#"  className='text-zinc-800 text-2xl hover:text-orange-500'>
                    <FaHeart />
                </a>
                <a href="#"  className='text-zinc-800 text-2xl'>
                    <HiShoppingBag />

                </a>
                {/* hamburgur */}
                <a href="#" className='text-zinc-800 text-3xl md:hidden ' onClick={togglemenu}><TbMenu2 /></a>
            </div>
            {/* mobile menu */}
         
                 <ul className={`flex flex-col gap-y-12 p-10 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl items-center gap-x-15 md:hidden absolute  top-30 -left-full transform -translate-x-1/5 transition-all duration-500 ${showmneu ? 'left-1/2':""}`}>
                <li><a href="#" className='font-semibold  text-orange-500 '>Home</a></li>
                <li><a href="#" className='font-semibold text-zinc-800 hover:text-orange-500'>About Us</a></li>
                <li><a href="#" className='font-semibold text-zinc-800 hover:text-orange-500'>Process</a></li>
                <li><a href="#" className='font-semibold text-zinc-800 hover:text-orange-500'>Contact</a></li>

                <li className='flex items-center gap-x-5'>
                {/* input field */}
                <div className="flex  p-1 border-2 border-orange-500 rounded-full md:hidden">
                    <input type="text" name="text" id="text" placeholder='search.....' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'/>
                    <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoSearch /></button>
                </div>
               
            </li>
                
            </ul>
        
        </nav>
    </header>
  )
}

export default Navbar