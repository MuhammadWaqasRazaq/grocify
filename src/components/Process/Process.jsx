import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled,TbCircleNumber2Filled,TbCircleNumber3Filled,TbCircleNumber4Filled } from 'react-icons/tb'
import { PiFactory, PiPlant } from 'react-icons/pi'
import { SlBadge } from 'react-icons/sl'
import { BsTruck } from 'react-icons/bs'
export default function Process() {

    let renderstep=steps.map(item=>{
        return (
            <div className={`flex-1 basis-[300px] ${item.id % 2=== 0? 'md:-mt-60':''}`}>
                <span className='flex justify-center items-center rounded-full w-18 h-18 text-8xl bg-zinc-800 text-white outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed mx-auto' >{item.number}</span>
                 <div className='flex items-center mt-10 gap-x-5'>
                    
                        <span className='flex  justify-center items-center
                        bg-gradient-to-b from-orange-400 to-orange-500 text-white w-15 h-15 rounded-full text-3xl '>{item.icon}</span>
    
                    <div className='flex-1'>
                        <h4 className='text-zinc-800 text-2xl font-bold'>
                            {item.title}
                        </h4>
                        <p className='text-zinc-600 mt-2'>
                            {item.para}
                        </p>
                    </div>

                </div>
            </div>
        )
    })
  return (
    <div className=" max-w-[1400px] mx-auto px-10 py-20 mt-20">
        <div className="mr-auto w-fit">
            <Heading highlight="Our" heading=" Process "/>
        </div>

        <div className=' flex flex-wrap items-center justify-center md:mt-20 mt-10 md:pt-30 gap-y-17'>
            {renderstep}
        </div>
    </div>
  )
}


const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: "Sourcing",
        para:
            "We source produce from local and certified farms. " +
            "Items are picked in season at peak ripeness.",
        icon: <PiPlant />,
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: "Manufacturing",
        para:
            "Produce is cleaned and handled gently. " +
            "Minimal, careful processing preserves nutrients.",
        icon: <PiFactory />,
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: "Quality Control",
        para:
            "Every batch is inspected and sampled. " +
            "Tests ensure safety and consistent quality.",
        icon: <SlBadge />,
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: "Logistics",
        para:
            "Cold‑chain transport keeps items fresh. " +
            "Fast, reliable routing delivers on time.",
        icon: <BsTruck />,
    },
];

