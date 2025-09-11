import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import itemone from "/src/assets/vone.png"
import itemonei from "/src/assets/vtwo.png"
import itemoneii from "/src/assets/vthree.png"
import cont from "/src/assets/consetone.png"
import contt from "/src/assets/consettwo.png"
import conti from "/src/assets/consetthree.png"
import conttii from "/src/assets/consetfour.png"

const Streming = () => {
  return (
    <>
      <div className="py-[100px] bg-[#080808]">
        <Container>
          <Flex>
            <div className="flex items-center gap-3 group relative">
              <h2 className="text-white text-[38px] font-semibold font-fahim w-[446px] mb-2">
                LIVE STREAMIN VIDEO BY HANCOK
              </h2>
              <span className="h-[2px] absolute bg-red-500 w-0 transition-all duration-500 group-hover:w-40 mt-22 ml-35"></span>
            </div>
           

          </Flex>
        <Flex className={'gap-x-3 mt-6'}>
             <div className="">
                <Image imgSrc={itemone}/>
            </div>
             <div className="">
                <Image imgSrc={itemonei}/>
            </div>
             <div className="">
                <Image imgSrc={itemoneii}/>
            </div>
        </Flex>
        <div className="flex items-center justify-around mt-12">
            <div className="flex justify-center items-center ">
      
      <div className="w-[426px] h-40 bg-[#212121] [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)] flex items-center justify-around ">
        <Image imgSrc={cont}/>
        <h3 className="text-[32px] text-white font-medium font-munna">TEAM DELTA</h3>
      </div>
    </div>
    <div className="text-[40px] text-white font-medium font-fahim">
        <h3>9:12</h3>
    </div>
    <div className="flex justify-center items-center ">
      
      <div className="w-[426px] h-40 bg-[#212121] [clip-path:polygon(0_0,100%_0,100%_100%,10%_100%)] flex items-center justify-around ">
        <h3 className="text-[32px] text-white font-medium font-munna">TEAM ALPHA</h3>
         <Image imgSrc={contt}/>
      </div>
    </div>
        </div>
        <div className="flex items-center justify-around mt-12">
            <div className="flex justify-center items-center ">
      
      <div className="w-[426px] h-40 bg-[#212121] [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)] flex items-center justify-around ">
        <Image imgSrc={conti} className={'w-[100px]'}/>
        <h3 className="text-[32px] text-white font-medium font-munna">TEAM DEVILS</h3>
      </div>
    </div>
    <div className="text-[40px] text-white font-medium font-fahim">
        <h3>17:8</h3>
    </div>
    <div className="flex justify-center items-center ">
      
      <div className="w-[426px] h-40 bg-[#212121] [clip-path:polygon(0_0,100%_0,100%_100%,10%_100%)] flex items-center justify-around ">
        <h3 className="text-[32px] text-white font-medium font-munna">TEAM NINJA</h3>
         <Image imgSrc={conttii} className={'w-[100px]'}/>
      </div>
    </div>
        </div>
        </Container>
      </div>
    </>
  );
};

export default Streming;
