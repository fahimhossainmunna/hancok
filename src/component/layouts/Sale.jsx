import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Produc from "../Produc";
import itemonei from "/src/assets/proOne.png";
import itemoneii from "/src/assets/protwo.png";
import itemoneiii from "/src/assets/prothree.png";
import itemoneiiii from "/src/assets/profour.png";

const Sale = () => {
  return (
    <>
      <div className="py-[60px] md:py-[100px] bg-[#191919]">
        <Container>
          {/* Title Section */}
          <Flex className="justify-center md:justify-end mb-8 px-4">
            <div className="flex items-center gap-3 group relative justify-center md:justify-end text-center md:text-right">
              <h2 className="text-white text-[26px] sm:text-[32px] md:text-[38px] font-semibold font-munna w-full md:w-[454px] mb-2">
                TOP GAMES ON BLACK FRIDAY SALE
              </h2>
              <span className="h-[2px] absolute bg-red-500 w-0 transition-all duration-500 group-hover:w-40 bottom-0 right-0"></span>
            </div>
          </Flex>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 justify-items-center">
            {/* Card 1 */}
            <div>
              <Produc
                profuctImg={itemonei}
                badgtxt="-40%"
                oldPrice="$19.99"
                newPrice="$7.99"
              />
              <div>
                <h3 className="text-[20px] sm:text-[22px] text-[#ffffff] font-semibold font-munna py-3">
                  Horizon Zero Dawn™ Complete
                </h3>
                <h3 className="text-[14px] sm:text-[16px] text-[#666666] font-fahim">
                  Guerrilla Games
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div>
              <Produc
                profuctImg={itemoneii}
                badgtxt="-40%"
                oldPrice="$19.99"
                newPrice="$7.99"
              />
              <div>
                <h3 className="text-[20px] sm:text-[22px] text-[#ffffff] font-semibold font-munna py-3">
                  Disciples: Liberation
                </h3>
                <h3 className="text-[14px] sm:text-[16px] text-[#666666] font-fahim">
                  Frima Studio
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div>
              <Produc
                profuctImg={itemoneiii}
                badgtxt="-40%"
                oldPrice="$19.99"
                newPrice="$7.99"
              />
              <div>
                <h3 className="text-[20px] sm:text-[22px] text-[#ffffff] font-semibold font-munna py-3">
                  Football Manager 2025
                </h3>
                <h3 className="text-[14px] sm:text-[16px] text-[#666666] font-fahim">
                  Sports Games
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div>
              <Produc
                profuctImg={itemoneiiii}
                badgtxt="-40%"
                oldPrice="$19.99"
                newPrice="$7.99"
              />
              <div>
                <h3 className="text-[20px] sm:text-[22px] text-[#ffffff] font-semibold font-munna py-3">
                  Industries of Titan
                </h3>
                <h3 className="text-[14px] sm:text-[16px] text-[#666666] font-fahim">
                  Brace Yourself Games
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Sale;
