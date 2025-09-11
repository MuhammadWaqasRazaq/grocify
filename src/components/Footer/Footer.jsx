import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="max-w-[1400px] flex flex-wrap mx-auto px-10 gap-y-12">

        <div className="flex-1 basis-[300px]">
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </a>
          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <p className="text-zinc-800 mt-6">2025 &copy; all Rights Reserved</p>
        </div>

        <ul className="flex-1">
          <li className="text-zinc-800 text-2xl font-bold">
            <h5>Company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className=" text-zinc-800 hover:text-orange-500">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className=" text-zinc-800 hover:text-orange-500">
              FaQ's
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li className="text-zinc-800 text-2xl font-bold">
            <h5>Support</h5>
          </li>
          <li className="mt-6">
            <a href="#" className=" text-zinc-800 hover:text-orange-500">
              Support center
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className=" text-zinc-800 hover:text-orange-500">
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className=" text-zinc-800 hover:text-orange-500">
              Contact us
            </a>
          </li>
        </ul>

        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
          <p className="mt-6 text-zinc-600">
            Questions or Feedbacks?
            <br />
            We'd love to hear from you
          </p>
          <div className=" flex bg-white p-1 rounded-lg mt-6">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Eamil Address"
              className="h-[5vh] pl-4 flex-1 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-500 to-orange-500 rounded-lg text-white p-2 text-2xl  hover:to-orange-600 cursor-pointer">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
