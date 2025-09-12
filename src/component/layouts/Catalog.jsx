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
    <>
      <div className="py-[80px] bg-[#191919]">
        <Container>
          <h3 className="text-[20px] text-[#ffffff] font-medium font-munna py-[30px]">
            Hancok Games Catalog
          </h3>
          <div className="bg-[#212121] py-[42px] pl-[44px] px-[100px]">
            <div className="flex items-center justify-between relative">
              <div className="">
                <h3 className="text-[16px] text-[#FF4655] font-fahim font-medium pt-[50px]">
                  Choose Your Favourite Game
                </h3>
                <h2 className="text-[38px] text-[#ffffff] font-munna font-semibold w-[580px] py-[15px] uppercase">
                  Explore hancok catalog for your next favorite game!
                </h2>
                <p className="text-[16px] text-[#666666] font-fahim font-medium w-[601px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Delectus culpa ratione enim maiores nisi cupiditate non
                  nesciunt officia labore aut? Et, vero!
                </p>
                <button
                  className="py-[12px] px-[25px] bg-[#000000] font-fahim text-[#ffff] border-2 border-transparent
                  transition-all duration-300
                  hover:bg-black 
                  hover:text-white 
                  hover:border-cyan-400 
                  hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] mt-[25px] mb-[100px]"
                >
                  <div className="flex  items-center gap-x-2">
                    <h3 className="mb-1 text-[16px]">Browse All</h3>
                  </div>
                </button>
              </div>
              <div className="">
                <Image
                  imgSrc={cOne}
                  className={
                    "absolute right-22 top-10  z-11 w-[300px] h-[360px] transition-all duration-300 hover:z-40 hover:scale-110 hover:-translate-y-2"
                  }
                />
                <Image
                  imgSrc={cOnei}
                  className={
                    "absolute right-46 top-14 z-10 w-[280px] h-[330px] transition-all duration-300 hover:z-40 hover:scale-110 hover:-translate-y-2"
                  }
                />
                
                <Image
                  imgSrc={cOneii}
                  className={
                    "absolute right-68 top-18  w-[250px] h-[300px] transition-all duration-300 hover:z-40 hover:scale-110 hover:-translate-y-2"
                  }
                />
                <Image
                  imgSrc={cOneiii}
                  className={
                    "absolute right-3 top-14  w-[280px] h-[330px] z-3 transition-all duration-300 hover:z-40 hover:scale-110 hover:-translate-y-2"
                  }
                />
                <Image
                  imgSrc={cOneiiii}
                  className={
                    "absolute -right-10 top-18  w-[250px] h-[300px] transition-all duration-300 hover:z-40 hover:scale-110 hover:-translate-y-2"
                  }
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Catalog;
