import React from "react";
import Container from "../Container";
import { FaAnglesRight } from "react-icons/fa6";
import { FaFacebook,FaLinkedin,FaInstagram  } from "react-icons/fa";

import { AiFillTwitterCircle } from "react-icons/ai";



const Banner = () => {
  return (
    <div className="bg-[url('/image/banner.png')] bg-no-repeat bg-center bg-cover w-full pt-[200px] pb-[100px]">
      <Container>
        <div className="">
          <h3 className="text-[27px] text-[#fff] font-fahim">LIFE TIME</h3>
          <h1 className="text-[60px] text-[#fff] font-fahim font-semibold">
            GAMING EXPERIENCE
          </h1>
          <p className="text-[16px] text-[#fff] font-fahim w-[521px] pb-[45px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            alias voluptas optio. Veritatis recusandae pariatur qui dignissimos
            dolore similique ad adipisci eum. Quos aliquid fugiat magni illum
            eius?
          </p>
          <button
            className="py-[12px] px-[25px] bg-white font-fahim text-[#121212] border-2 border-transparent
  transition-all duration-300
  hover:bg-black 
  hover:text-white 
  hover:border-cyan-400 
  hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)]"
          >
            <div className="flex  items-center gap-x-2">
              <h3 className="mb-1 text-[16px]">View More</h3>
              <FaAnglesRight />
            </div>
          </button>
          <div className="text-white flex items-center gap-x-3 mt-[300px] text-2xl">
            <FaFacebook/>
            <FaLinkedin/>
            <AiFillTwitterCircle/>
            <FaInstagram/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
