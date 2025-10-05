import React from "react";
import Container from "../Container";
import Image from "../Image";

// ✅ Corrected relative imports (adjust "../" if needed based on your folder structure)
import cOne from "../assets/categoryOne.png";
import cOnei from "../assets/categoryTwo.png";
import cOneii from "../assets/categoryThree.png";
import cOneiii from "../assets/categoryFour.png";
import cOneiiii from "../assets/categoryFive.png";

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
            <div className="max-w-[600px] text-center lg:text-left z-20">
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

            {/* Right Images */}
            <div className="relative flex justify-center w-full lg:w-auto min-h-[380px] sm:min-h-[420px]">
              <Image
                imgSrc={cOne}
                className="absolute right-2 sm:right-6 top-0 z-30 w-[180px] sm:w-[260px] md:w-[300px] transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:z-50"
              />
              <Image
                imgSrc={cOnei}
                className="absolute right-[70px] sm:right-[100px] top-6 z-20 w-[160px] sm:w-[240px] md:w-[280px] transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:z-50"
              />
              <Image
                imgSrc={cOneii}
                className="absolute right-[140px] sm:right-[160px] top-10 z-10 w-[140px] sm:w-[220px] md:w-[250px] transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:z-50"
              />
              <Image
                imgSrc={cOneiii}
                className="absolute right-[-30px] sm:right-[-10px] top-8 z-20 w-[180px] sm:w-[240px] md:w-[280px] transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:z-50"
              />
              <Image
                imgSrc={cOneiiii}
                className="absolute right-[-80px] sm:right-[-40px] top-12 z-10 w-[140px] sm:w-[200px] md:w-[250px] transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:z-50"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Catalog;








<div className="">
                  <Image
                    imgSrc={cOne}
                    className={
                      "absolute right-22 top-10  z-11 w-[300px] h-[360px]   md:w-[300px] md:h-[360px] transition-all duration-300 hover:z-40 hover:scale-110 hover:-translate-y-2"
                    }
                  />
                  <Image
                    imgSrc={cOnei}
                    className={
                      "absolute right-46 top-14 z-10 w-[280px] h-[330px] md:right-50  md:w-[250px] md:h-[320px] transition-all duration-300 hover:z-40 hover:scale-110 hover:-translate-y-2"
                    }
                  />

                  <Image
                    imgSrc={cOneii}
                    className={
                      "absolute right-68 top-18  w-[250px] h-[300px] md:right-66  md:w-[250px] md:h-[280px]  transition-all duration-300 hover:z-40 hover:scale-110 hover:-translate-y-2"
                    }
                  />
                  <Image
                    imgSrc={cOneiii}
                    className={
                      "absolute right-3 top-15  w-[280px] h-[330px] md:-right-1  md:w-[250px] md:h-[320px] z-3 transition-all duration-300 hover:z-40 hover:scale-110 hover:-translate-y-2"
                    }
                  />
                  <Image
                    imgSrc={cOneiiii}
                    className={
                      "absolute -right-10 top-18 md:-right-15  w-[160px] h-[200px] md:w-[250px] md:h-[300px]  transition-all duration-300 hover:z-40 hover:scale-110 hover:-translate-y-2"
                    }
                  />
                </div>





import Image from "../Image";
import cOne from "/src/assets/cetagoryOne.png";
import cOnei from "/src/assets/catagoryTwo.png";
import cOneii from "/src/assets/catagoeyThreee.png";
import cOneiii from "/src/assets/catagoryfour.png";
import cOneiiii from "/src/assets/catagoryfive.png";



<div className="relative flex justify-center w-full lg:w-auto min-h-[380px] sm:min-h-[420px]">
              <Image
                imgSrc={cOne}
                className="absolute right-2 sm:right-6 top-0 z-30 w-[180px] sm:w-[260px] md:w-[300px] transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:z-50"
              />
              <Image
                imgSrc={cOnei}
                className="absolute right-[70px] sm:right-[100px] top-6 z-20 w-[160px] sm:w-[240px] md:w-[280px] transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:z-50"
              />
              <Image
                imgSrc={cOneii}
                className="absolute right-[140px] sm:right-[160px] top-10 z-10 w-[140px] sm:w-[220px] md:w-[250px] transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:z-50"
              />
              <Image
                imgSrc={cOneiii}
                className="absolute right-[-30px] sm:right-[-10px] top-8 z-20 w-[180px] sm:w-[240px] md:w-[280px] transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:z-50"
              />
              <Image
                imgSrc={cOneiiii}
                className="absolute right-[-80px] sm:right-[-40px] top-12 z-10 w-[140px] sm:w-[200px] md:w-[250px] transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:z-50"
              />
            </div>