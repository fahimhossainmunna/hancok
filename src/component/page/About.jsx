import React from "react";
import Container from "../Container";
import Image from "../Image";
import leftone from "/src/assets/imgone.png";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-[#121212] py-6">
      <Container>
        <div className="flex items-center gap-3 group relative">
          <h2 className="text-white text-[38px] font-semibold font-fahim w-[518px] mb-2">
            ABOUT THE BIGGEST HANCOCK COMMUNITY
          </h2>
          <span className="h-[2px] absolute bg-red-500 w-0 transition-all duration-500 group-hover:w-40 mt-22 ml-50"></span>
        </div>
        <div className="flex items-center mt-7 justify-between">
          <div className="">
            <Image imgSrc={leftone} />
          </div>
          <div className="">
            <h3 className="text-[27px] font-fahim text-[#fff] font-semibold">MOST POPULAR GAMING PLATFORM.</h3>
            <div className="flex items-center gap-x-3 my-1">
              <span className="text-[#FF4655] text-2xl"><FaCheck/></span>
              <h4 className="text-[18px] text-[#fff] font-munna ">Friendly Clan & Mates</h4>
            </div>
            <div className="flex items-center gap-x-3 my-1">
              <span className="text-[#FF4655] text-2xl"><FaCheck/></span>
              <h4 className="text-[18px] text-[#fff] font-munna ">We Provide Gaming Accesories</h4>
            </div>
            <div className="flex items-center gap-x-3 my-1">
              <span className="text-[#FF4655] text-2xl"><FaCheck/></span>
              <h4 className="text-[18px] text-[#fff] font-munna ">Largest Online Gaming Community & Shop</h4>
            </div>
            <div className="flex items-center gap-x-3 my-1">
              <span className="text-[#FF4655] text-2xl"><FaCheck/></span>
              <h4 className="text-[18px] text-[#fff] font-munna ">Hancok reaches more than 150 million monthly users</h4>
            </div>
            <div className="flex items-center gap-x-3 my-1">
              <span className="text-[#FF4655] text-2xl"><FaCheck/></span>
              <h4 className="text-[18px] text-[#fff] font-munna ">We are leading global media brand for games</h4>
            </div>
            
            <p className="text-[18px] font-fahim text-[#fff] w-[467px] mt-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo
              sed odio temporibus magni quia eveniet odit placeat repellat quod
              ipsum modi necessitatibus, dolorum officia!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-12">
          <div className="py-[25px] px-[100px] bg-[#212121] rounded-bl-[70px] rounded-tr-[70px]">
            <h3 className="text-white text-[60px] font-semibold font-munna">112 k</h3>
            <p className="text-white text-[18px] font-light font-fahim">Community Earning</p>
          </div>
          <div className="py-[25px] px-[100px] bg-[#212121] rounded-bl-[70px] rounded-tr-[70px]">
            <h3 className="text-white text-[60px] font-semibold font-munna">12M</h3>
            <p className="text-white text-[18px] font-light font-fahim">Total Member</p>
          </div>
          <div className="py-[25px] px-[100px] bg-[#212121] rounded-bl-[70px] rounded-tr-[70px]">
            <h3 className="text-white text-[60px] font-semibold font-munna">100 k</h3>
            <p className="text-white text-[18px] font-light font-fahim">Streams Complete</p>
          </div>
          <div className="py-[25px] px-[100px] bg-[#212121] rounded-bl-[70px] rounded-tr-[70px]">
            <h3 className="text-white text-[60px] font-semibold font-munna">844 k</h3>
            <p className="text-white text-[18px] font-light font-fahim">Total Sponsers</p>
          </div>
        
        </div>
      </Container>
    </div>
  );
};

export default About;
