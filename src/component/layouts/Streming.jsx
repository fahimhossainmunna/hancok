import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import itemone from "/src/assets/vone.png";
import itemonei from "/src/assets/vtwo.png";
import itemoneii from "/src/assets/vthree.png";
import cont from "/src/assets/consetone.png";
import contt from "/src/assets/consettwo.png";
import conti from "/src/assets/consetthree.png";
import conttii from "/src/assets/consetfour.png";

const Streming = () => {
  return (
    <>
      <div className="py-[80px] md:py-[100px] bg-gradient-to-b from-[#050505] to-[#121212]">
        <Container>
          {/* Heading */}
          <Flex className="flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 group relative">
              <h2 className="text-white text-[26px] sm:text-[30px] md:text-[38px] font-semibold font-fahim mb-2 leading-tight text-center md:text-left">
                LIVE STREAMING VIDEO BY HANCOK
              </h2>
              <span className="h-[3px] absolute bg-red-500 w-0 transition-all duration-500 group-hover:w-32 md:group-hover:w-40 bottom-0 left-1/2 md:left-0 transform md:translate-x-0 -translate-x-1/2"></span>
            </div>

            {/* 🔴 Live Button */}
            <button className="flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold text-sm md:text-base transition-all duration-300 shadow-[0_0_15px_rgba(255,0,0,0.5)] animate-pulse">
              <span className="h-3 w-3 bg-white rounded-full animate-ping"></span>
              🔴 LIVE NOW
            </button>
          </Flex>

          {/* Top Game Preview Images */}
          <Flex className="flex-col md:flex-row gap-4 md:gap-6 mt-10 items-center justify-center">
            {[itemone, itemonei, itemoneii].map((img, i) => (
              <div
                key={i}
                className="hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_3px_rgba(255,255,255,0.15)] rounded-xl overflow-hidden"
              >
                <Image
                  imgSrc={img}
                  className="rounded-xl object-cover w-[90vw] sm:w-[450px] h-[220px] sm:h-[280px]"
                />
              </div>
            ))}
          </Flex>

          {/* Match Score Section 1 */}
          <div className="flex flex-col lg:flex-row items-center justify-around mt-14 gap-8">
            {/* Left Team */}
            <div className="flex justify-center items-center w-full lg:w-auto">
              <div className="w-[90%] sm:w-[360px] md:w-[420px] h-[110px] md:h-40 bg-[#1d1d1d] [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)] flex items-center justify-around rounded-lg shadow-lg hover:shadow-[0_0_25px_3px_rgba(255,0,0,0.5)] transition-all duration-500">
                {/* logo animation only */}
                <Image
                  imgSrc={cont}
                  className="w-[70px] md:w-[90px] transition-transform duration-500 hover:-translate-y-2"
                />
                <h3 className="text-[22px] md:text-[32px] text-white font-semibold font-munna">
                  TEAM DELTA
                </h3>
              </div>
            </div>

            {/* Score */}
            <div className="text-[36px] md:text-[65px] text-white font-bold font-fahim text-center">
              <h3>9 : 12</h3>
            </div>

            {/* Right Team */}
            <div className="flex justify-center items-center w-full lg:w-auto">
              <div className="w-[90%] sm:w-[360px] md:w-[420px] h-[110px] md:h-40 bg-[#1d1d1d] [clip-path:polygon(0_0,100%_0,100%_100%,10%_100%)] flex items-center justify-around rounded-lg shadow-lg hover:shadow-[0_0_25px_3px_rgba(255,0,0,0.5)] transition-all duration-500">
                <h3 className="text-[22px] md:text-[32px] text-white font-semibold font-munna">
                  TEAM ALPHA
                </h3>
                {/* logo animation only */}
                <Image
                  imgSrc={contt}
                  className="w-[70px] md:w-[90px] transition-transform duration-500 hover:-translate-y-2"
                />
              </div>
            </div>
          </div>

          {/* Match Score Section 2 */}
          <div className="flex flex-col lg:flex-row items-center justify-around mt-14 gap-8">
            {/* Left Team */}
            <div className="flex justify-center items-center w-full lg:w-auto">
              <div className="w-[90%] sm:w-[360px] md:w-[420px] h-[110px] md:h-40 bg-[#1d1d1d] [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)] flex items-center justify-around rounded-lg shadow-lg hover:shadow-[0_0_25px_3px_rgba(255,0,0,0.5)] transition-all duration-500">
                {/* logo animation only */}
                <Image
                  imgSrc={conti}
                  className="w-[70px] md:w-[100px] transition-transform duration-500 hover:-translate-y-2"
                />
                <h3 className="text-[22px] md:text-[32px] text-white font-semibold font-munna">
                  TEAM DEVILS
                </h3>
              </div>
            </div>

            {/* Score */}
            <div className="text-[36px] md:text-[65px] text-white font-bold font-fahim text-center">
              <h3>17 : 8</h3>
            </div>

            {/* Right Team */}
            <div className="flex justify-center items-center w-full lg:w-auto">
              <div className="w-[90%] sm:w-[360px] md:w-[420px] h-[110px] md:h-40 bg-[#1d1d1d] [clip-path:polygon(0_0,100%_0,100%_100%,10%_100%)] flex items-center justify-around rounded-lg shadow-lg hover:shadow-[0_0_25px_3px_rgba(255,0,0,0.5)] transition-all duration-500">
                <h3 className="text-[22px] md:text-[32px] text-white font-semibold font-munna">
                  TEAM NINJA
                </h3>
                {/* logo animation only */}
                <Image
                  imgSrc={conttii}
                  className="w-[70px] md:w-[100px] transition-transform duration-500 hover:-translate-y-2"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Streming;
