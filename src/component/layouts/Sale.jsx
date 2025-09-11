import React from "react";
import Container from "../Container";
import Flex from "../Flex";

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
        </Container>
      </div>
    </>
  );
};

export default Sale;
