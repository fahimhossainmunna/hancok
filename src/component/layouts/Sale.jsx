import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Produc from "../Produc";
import itemonei from "/src/assets/proOne.png"
import itemoneii from "/src/assets/protwo.png"
import itemoneiii from "/src/assets/prothree.png"
import itemoneiiii from "/src/assets/profour.png"

const Sale = () => {
  return (
    <>
      <div className="py-[100px] bg-[#191919]">
        <Container>
          <Flex className={"justify-end"}>
            <div className="flex items-center gap-3 group relative justify-end">
              <h2 className="text-white text-[38px] font-semibold font-munna w-[454px] mb-2 text-end">
                TOP GAMES ON BLACK FRIDAY SALE
              </h2>
              <span className="h-[2px] absolute bg-red-500 w-0 transition-all duration-500 group-hover:w-40 mt-22 mr-30"></span>
            </div>
            
          </Flex>
          <Flex className={"justify-between gap-x-3"}>

          <div className="">
            <Produc profuctImg={itemonei} badgtxt={"-40%"} oldPrice={'$19.99'} newPrice={'$7.99'} />
            <div className="">
              <h3 className="text-[22px] text-[#ffffff] font-semibold font-munna py-3">Horizon Zero Dawn™ Complet...</h3>
              <h3 className="text-[16px] text-[#666666] font-fahim">Guerrilla Games</h3>
            </div>
          </div>
          <div className="">
            <Produc profuctImg={itemoneii} badgtxt={"-40%"} oldPrice={'$19.99'} newPrice={'$7.99'} />
            <div className="">
              <h3 className="text-[22px] text-[#ffffff] font-semibold font-munna py-3">Disciples: Liberation</h3>
              <h3 className="text-[16px] text-[#666666] font-fahim">Frima Studio</h3>
            </div>
          </div>
          <div className="">
            <Produc profuctImg={itemoneiii} badgtxt={"-40%"} oldPrice={'$19.99'} newPrice={'$7.99'} />
            <div className="">
              <h3 className="text-[22px] text-[#ffffff] font-semibold font-munna py-3">Football Manager2025</h3>
              <h3 className="text-[16px] text-[#666666] font-fahim">Sports Games</h3>
            </div>
          </div>
          <div className="">
            <Produc profuctImg={itemoneiiii} badgtxt={"-40%"} oldPrice={'$19.99'} newPrice={'$7.99'} />
            <div className="">
              <h3 className="text-[22px] text-[#ffffff] font-semibold font-munna py-3">Industries of Titan</h3>
              <h3 className="text-[16px] text-[#666666] font-fahim">Brace Yourself Games</h3>
            </div>
          </div>
          </Flex>
        
        </Container>
      </div>
    </>
  );
};

export default Sale;
