import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Producttwo from "../Producttwo";
import itemoneeI from "/src/assets/consol.png";
import itemoneeIi from "/src/assets/keybord.png";
import itemoneeIii from "/src/assets/monitor.png";
import itemoneeIiii from "/src/assets/consol.png";

const Accessorise = () => {
  return (
    <>
      <div className="py-[100px] bg-[#121212]">
        <Container>
          <Flex>
            <div className="flex items-center gap-3 group relative">
              <h2 className="text-white text-[28px] md:text-[38px] font-semibold font-fahim w-full md:w-[518px] mb-2">
                WE PROVIDE ALL GAMING ACCESORIES
              </h2>
              <span className="h-[2px] absolute bg-red-500 w-0 transition-all duration-500 group-hover:w-40 mt-22 ml-50"></span>
            </div>
          </Flex>

          {/* Responsive Grid Instead of Fixed Flex */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Item 1 */}
            <div className="py-[22px] px-[20px] md:px-[35px] bg-[#212121] text-center rounded-lg">
              <h3 className="text-[30px] md:text-[40px] text-white font-medium font-fahim mb-4">
                $95
              </h3>
              <Producttwo
                proImg={itemoneeI}
                className={
                  "transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-2"
                }
                bbtext={"Gaming Controller"}
                btxtt={"Add To Cart"}
              />
            </div>

            {/* Item 2 */}
            <div className="py-[22px] px-[20px] md:px-[35px] bg-[#212121] text-center rounded-lg">
              <h3 className="text-[30px] md:text-[40px] text-white font-medium font-fahim mb-4">
                $95
              </h3>
              <Producttwo
                proImg={itemoneeIi}
                className={
                  "transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-2"
                }
                bbtext={"Gaming Keyboard"}
                btxtt={"Add To Cart"}
              />
            </div>

            {/* Item 3 */}
            <div className="py-[22px] px-[20px] md:px-[35px] bg-[#212121] text-center rounded-lg">
              <h3 className="text-[30px] md:text-[40px] text-white font-medium font-fahim mb-4">
                $95
              </h3>
              <Producttwo
                proImg={itemoneeIii}
                className={
                  "transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-2"
                }
                bbtext={"Gaming Monitor"}
                btxtt={"Add To Cart"}
              />
            </div>

            {/* Item 4 */}
            <div className="py-[22px] px-[20px] md:px-[35px] bg-[#212121] text-center rounded-lg">
              <h3 className="text-[30px] md:text-[40px] text-white font-medium font-fahim mb-4">
                $95
              </h3>
              <Producttwo
                proImg={itemoneeIiii}
                className={
                  "transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-2"
                }
                bbtext={"Gaming Controller"}
                btxtt={"Add To Cart"}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Accessorise;
