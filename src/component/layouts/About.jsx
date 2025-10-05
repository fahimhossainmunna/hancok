import React from "react";
import Container from "../Container";
import Image from "../Image";
import leftone from "/src/assets/imgone.png";
import { FaCheck } from "react-icons/fa";
import Flex from "../Flex";

const About = () => {
  return (
    <div className="bg-[#121212] py-10 md:py-16">
      <Container>
        {/* Heading */}
        <Flex className="justify-start">
          <div className="flex items-center gap-3 group relative text-center md:text-left">
            <h2 className="text-white text-[26px] sm:text-[32px] md:text-[38px] font-semibold font-fahim max-w-[518px] mb-2 leading-tight">
              ABOUT THE BIGGEST HANCOCK COMMUNITY
            </h2>
            <span className="h-[2px] absolute bg-red-500 w-0 transition-all duration-500 group-hover:w-40 bottom-[-6px] left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0"></span>
          </div>
        </Flex>

        {/* About Section */}
        <div className="flex flex-col lg:flex-row items-center mt-10 justify-between gap-10">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image imgSrc={leftone} className="rounded-[20px] shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-105 transition-all duration-500" />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-[22px] sm:text-[25px] md:text-[27px] font-fahim text-[#fff] font-semibold mb-4">
              MOST POPULAR GAMING PLATFORM.
            </h3>

            {/* Feature list */}
            <div className="space-y-2">
              {[
                "Friendly Clan & Mates",
                "We Provide Gaming Accesories",
                "Largest Online Gaming Community & Shop",
                "Hancok reaches more than 150 million monthly users",
                "We are leading global media brand for games",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-x-3 my-1">
                  <span className="text-[#FF4655] text-2xl">
                    <FaCheck />
                  </span>
                  <h4 className="text-[16px] sm:text-[18px] text-[#fff] font-munna">
                    {text}
                  </h4>
                </div>
              ))}
            </div>

            {/* Paragraph */}
            <p className="text-[16px] sm:text-[18px] font-fahim text-[#ccc] max-w-[470px] mt-[20px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo
              sed odio temporibus magni quia eveniet odit placeat repellat quod
              ipsum modi necessitatibus, dolorum officia!
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { number: "112 k", title: "Community Earning" },
            { number: "12M", title: "Total Member" },
            { number: "100 k", title: "Streams Complete" },
            { number: "844 k", title: "Total Sponsors" },
          ].map((item, i) => (
            <div
              key={i}
              className="py-[25px] px-[60px] sm:px-[80px] md:px-[100px] bg-[#1E1E1E] rounded-bl-[50px] rounded-tr-[50px] hover:bg-[#FF4655]/10 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,70,85,0.5)] text-center"
            >
              <h3 className="text-white text-[40px] sm:text-[50px] md:text-[60px] font-semibold font-munna">
                {item.number}
              </h3>
              <p className="text-white text-[16px] sm:text-[18px] font-light font-fahim">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;
