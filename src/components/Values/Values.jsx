import { FaHeart, FaLeaf, FaSeedling, FaShield } from "react-icons/fa6";
import Heading from "../Heading/Heading";
import Basket from "../../assets/basket-full-vegetables.png";

export default function Values() {
  const leftValues = values.slice(0, 2).map((item) => {
    return (
      <div key={item.id} className="flex md:flex-row-reverse items-center gap-7">
        
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">{item.icon}</span>
        </div>

        <div className="md:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
    const rightValues = values.slice(2).map((item) => {
    return (
      <div key={item.id} className="flex items-center gap-7">
        
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">{item.icon}</span>
        </div>

        <div>
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });


  
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20 ">
        <Heading highlight="Our" heading=" Values" />

        <div className="flex md:flex-row flex-col  gap-15 mt-15">

          {/* left values */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">{leftValues}</div>

          {/* image */}
          <div className="md:flex w-1/2 hidden">
            <img src={Basket} alt="basket" />
          </div>

          {/* Right Values */}
          <div className="md:min-h-100 flex flex-col justify-between gap-15 " >{rightValues}</div>


        </div>

      </div>
    </section>
  );
}

const values = [
  {
    id: 1,
    title: "Trust",
    para: "We build lasting relationships through transparency, reliable service and consistent product quality so customers can depend on us every time.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "Sourced daily from trusted growers and moved quickly through efficient logistics to ensure produce arrives crisp, flavorful and at peak ripeness.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Strict hygiene protocols, traceability and regular third‑party inspections ensure every item meets high safety standards from farm to table.",
    icon: <FaShield />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Partnering with certified organic farms, we deliver produce grown without synthetic pesticides or GMOs for healthier food and sustainable practices.",
    icon: <FaSeedling />,
  },
];
