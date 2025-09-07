import React from "react";
import Container from "../Container";

const About = () => {
  return (
    <div className="bg-[#121212] py-6">
      <Container>
        <div className="flex items-center gap-3 group relative">
          <h2 className="text-white text-[38px] font-semibold font-fahim w-[518px]">
            ABOUT THE BIGGEST HANCOCK COMMUNITY
          </h2>
          <span className="h-[2px] absolute bg-red-500 w-0 transition-all duration-500 group-hover:w-40 mt-22 ml-50"></span>
        </div>
      </Container>
    </div>
  );
};

export default About;
