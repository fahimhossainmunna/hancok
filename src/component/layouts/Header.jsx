import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/Navbar.png";
import { FaGlobe, FaSignOutAlt, FaSearch } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";


// =============
const Header = () => {
  return (
    <>
      <Container>
        <Flex className={"fixed flex items-center justify-between w-[1320px]"}>
          <div className="">
            <Image imgSrc={logo} />
            <div className="text-[#FF4655] text-2xl">
              <FaBarsProgress/>
            </div>
          </div>
          <div className="">
            <ul className="flex items-center gap-x-4 text-[16px] font-fahim text-[#DDDDDD]">
              <li className="hover:font-bold transition-all duration-200">Home</li>
              <li className="hover:font-bold transition-all duration-200">About us</li>
              <li className="hover:font-bold transition-all duration-200">Tornament</li>
              <li className="hover:font-bold transition-all duration-200">Store</li>
              <li className="hover:font-bold transition-all duration-200">Team</li>
              <li className="hover:font-bold transition-all duration-200">FAQ</li>
              <li className="hover:font-bold transition-all duration-200">Contact Us</li>
            </ul>
          </div>
          <div className="flex items-center gap-x-3 text-[#ffff]">
            <FaGlobe />
            <div className="flex items-center">
              <FaSignOutAlt />
              <span className="text-[16px] font-fahim text-[#ffffff]">
                Sign In
              </span>
            </div>
            <FaSearch />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Header;
