import React from "react";
import Container from "../Container";
import { FaAnglesRight } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="bg-[url('/image/banner.png')] bg-no-repeat bg-center bg-cover w-full pt-[180px] pb-[100px] md:pt-[200px] relative">
      <div className="absolute inset-0 bg-black/50"></div> {/* overlay for better text visibility */}
      <Container>
        <div className="relative z-10">
          {/* Text Section */}
          <h3 className="text-[22px] sm:text-[24px] md:text-[27px] text-white font-fahim tracking-wide mb-2">
            LIFE TIME
          </h3>

          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] text-white font-fahim font-semibold leading-tight">
            GAMING EXPERIENCE
          </h1>

          <p className="text-[15px] sm:text-[16px] text-[#f0f0f0] font-fahim max-w-[520px] pb-[35px] sm:pb-[45px] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            alias voluptas optio. Veritatis recusandae pariatur qui dignissimos
            dolore similique ad adipisci eum. Quos aliquid fugiat magni illum
            eius?
          </p>

          {/* Button */}
          <button
            className="py-[12px] px-[25px] bg-white font-fahim text-[#121212] border-2 border-transparent
              transition-all duration-300 rounded-md
              hover:bg-black 
              hover:text-white 
              hover:border-cyan-400 
              hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)]
              active:scale-95"
          >
            <div className="flex items-center gap-x-2">
              <h3 className="mb-1 text-[16px] tracking-wide">View More</h3>
              <FaAnglesRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </button>

          {/* Social Icons */}
          <div className="text-white flex items-center gap-x-4 mt-[150px] sm:mt-[200px] md:mt-[250px] lg:mt-[300px] text-2xl">
            <FaFacebook className="cursor-pointer hover:text-[#FF4655] transition-transform duration-300 hover:scale-110" />
            <FaLinkedin className="cursor-pointer hover:text-[#FF4655] transition-transform duration-300 hover:scale-110" />
            <AiFillTwitterCircle className="cursor-pointer hover:text-[#FF4655] transition-transform duration-300 hover:scale-110" />
            <FaInstagram className="cursor-pointer hover:text-[#FF4655] transition-transform duration-300 hover:scale-110" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
