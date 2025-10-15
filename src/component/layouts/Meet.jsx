import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import teamOne from "/src/assets/teamOne.png";
import teamTwo from "/src/assets/teamTwo.png";
import teamThree from "/src/assets/teamThree.png";
import teamFour from "/src/assets/teamFour.png";

const teamData = [
  {
    img: teamOne,
    title: "Paladins",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
  },
  {
    img: teamTwo,
    title: "CS:GO",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    img: teamThree,
    title: "DOTA 2",
    desc: "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    img: teamFour,
    title: "VALORANT",
    desc: "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
  },
];

const Meet = () => {
  return (
    <div className="bg-[#191919] py-[80px] md:py-[100px]">
      <Container>
        {/* ====== Section Title ====== */}
        <Flex className="justify-end">
          <div className="flex flex-col items-end relative group">
            <h2 className="text-white text-[26px] sm:text-[32px] md:text-[38px] font-semibold font-munna text-right w-[450px]">
              MEET OUR PROFESSIONAL ELITE{" "}
              <span className="text-[#DB4444]">TEAM</span>
            </h2>
            <span className="h-[2px] bg-[#DB4444] w-0 group-hover:w-40 transition-all duration-500 mt-3"></span>
          </div>
        </Flex>

        {/* ====== Team Grid ====== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden font-munna rounded-md"
            >
              {/* Background Image */}
              <Image
                imgSrc={member.img}
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-500"></div>

              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                <h3 className="text-[18px] sm:text-[20px] font-semibold">
                  {member.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] mt-2 leading-[20px]">
                  {member.desc}
                </p>
                <button className="mt-4 bg-[#DB4444] px-4 py-1 text-[13px] rounded-sm hover:bg-[#b33535] transition">
                  Know more
                </button>
                <div className="flex gap-3 mt-4">
                  {[<FaFacebookF />, <FaLinkedinIn />, <FaTwitter />].map(
                    (icon, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#DB4444] hover:bg-[#b33535] transition cursor-pointer"
                      >
                        {icon}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Title for non-hover state */}
              <h3 className="absolute bottom-5 left-5 text-white text-[18px] sm:text-[20px] font-semibold z-10 group-hover:opacity-0 transition-opacity duration-300">
                {member.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Meet;
