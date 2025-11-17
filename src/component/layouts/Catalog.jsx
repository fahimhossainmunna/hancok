import React from "react";
import Container from "../Container";
import Image from "../Image";

import cOne from "/src/assets/cetagoryOne.png";
import cOnei from "/src/assets/catagoryTwo.png";
import cOneii from "/src/assets/catagoeyThreee.png";
import cOneiii from "/src/assets/catagoryfour.png";
import cOneiiii from "/src/assets/catagoryfive.png";

const Catalog = () => {
  return (
    <div className="py-[70px] sm:py-[90px] md:py-[100px] bg-gradient-to-b from-[#151515] to-[#1f1f1f]">
      <Container>
        {/* Heading */}
        <h3 className="text-[18px] sm:text-[20px] text-[#fff] font-medium font-munna py-[20px] sm:py-[30px] text-center sm:text-left">
          Hancok Games Catalog
        </h3>

        <div className="bg-[#212121] rounded-2xl py-[40px] sm:py-[60px] px-[25px] sm:px-[50px] md:px-[100px] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Text */}
            <div className="max-w-[600px] text-center -ml-10 lg:text-left z-20">
              <h4 className="text-[16px] text-[#FF4655] font-fahim font-medium">
                Choose Your Favourite Game
              </h4>
              <h2 className="text-[28px] sm:text-[34px] md:text-[38px] text-[#fff] font-munna font-semibold uppercase py-[15px] leading-tight">
                Explore hancok catalog for your next favorite game!
              </h2>
              <p className="text-[14px] sm:text-[16px] text-[#999] font-fahim font-medium leading-relaxed">
                Discover a curated selection of premium titles across every
                genre. Whether you love strategy, racing, or adventure, find
                your perfect match today.
              </p>

              <button
                className="py-[10px] sm:py-[12px] px-[22px] sm:px-[28px] mt-[25px]
                bg-black font-fahim text-white border-2 border-transparent 
                hover:border-cyan-400 hover:shadow-[0_0_15px_2px_rgba(0,255,255,0.8)] 
                hover:scale-105 transition-all duration-500 rounded-lg"
              >
                Browse All
              </button>
            </div>

            {/* ✅ Right Images - Hero Focus Style */}
            <div className="relative w-[600px] h-[450px] flex items-center justify-center">
              {/* Left back images */}
              <Image
                imgSrc={cOne}
                className="absolute left-[20px] top-[50px] w-[220px] h-[300px] z-0 opacity-90 hover:scale-110 hover:z-60 transition-all duration-300"
              />
              <Image
                imgSrc={cOnei}
                className="absolute left-[90px] top-[100px] w-[240px] h-[320px] z-10 opacity-95 hover:scale-110 hover:z-60 transition-all duration-300"
              />

              {/* ✅ Center main image (hero) */}
              <Image
                imgSrc={cOneii}
                className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[270px] h-[360px] z-30 hover:scale-110 hover:z-30 transition-all duration-300"
              />

              {/* Right back images */}
              <Image
                imgSrc={cOneiii}
                className="absolute right-[90px] top-[100px] w-[240px] h-[320px] z-10 opacity-95 hover:scale-110 hover:z-30 transition-all duration-300"
              />
              <Image
                imgSrc={cOneiiii}
                className="absolute right-[20px] top-[50px] w-[220px] h-[300px] z-0 opacity-90 hover:scale-110 hover:z-30 transition-all duration-300"
              />
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
