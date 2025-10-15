import React, { useEffect, useState } from "react";
import Container from "../Container";
import Image from "../Image";
import leftone from "/src/assets/imgone.png";
import { FaCheck } from "react-icons/fa";
import Flex from "../Flex";

const statsData = [
  { number: 112, suffix: "k", title: "Community Earning" },
  { number: 12, suffix: "M", title: "Total Member" },
  { number: 100, suffix: "k", title: "Streams Complete" },
  { number: 844, suffix: "k", title: "Total Sponsors" },
];

const About = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((item, index) => {
      let start = 0;
      const end = item.number;
      const duration = 2000; // Animation speed (2s)
      const increment = end / (duration / 30);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, 30);

      return timer;
    });

    return () => intervals.forEach((t) => clearInterval(t));
  }, []);

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
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start overflow-hidden rounded-[20px]">
            <Image
              imgSrc={leftone}
              className="rounded-[20px] shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-transform duration-500 ease-in-out hover:scale-105"
            />
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
          {statsData.map((item, i) => (
            <div
              key={i}
              className="relative py-[35px] px-[60px] sm:px-[70px] md:px-[80px] 
              bg-gradient-to-b from-[#1E1E1E] to-[#161616] 
              rounded-bl-[50px] rounded-tr-[50px] border border-transparent 
              hover:border-[#DB4444]/60 hover:shadow-[0_0_25px_rgba(219,68,68,0.3)] 
              transition-all duration-500 text-center overflow-hidden group"
            >
              {/* glow overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,68,68,0.12)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              {/* Animated Count */}
              <h3
                className="relative text-white text-[36px] sm:text-[44px] md:text-[52px] 
                font-semibold font-munna tracking-wide 
                group-hover:text-[#DB4444] transition-all duration-500 transform group-hover:scale-105"
              >
                {counts[i]}
                {item.suffix}
              </h3>

              <p className="relative text-gray-300 text-[15px] sm:text-[17px] font-fahim mt-2 group-hover:text-white transition-all duration-500">
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
