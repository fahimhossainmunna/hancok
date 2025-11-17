import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/Navbar.png";
import { FaGlobe, FaSignOutAlt, FaSearch, FaTimes } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80;
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About us", id: "about" },
    { name: "Game", id: "game" },
    { name: "Streamin", id: "streamin" },
    { name: "Sale", id: "sale" },
    { name: "Team", id: "team" },
    { name: "FAQ", id: "faq" },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <>
      {/* ===== Header Navbar ===== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0c0c0c]/90 backdrop-blur-md shadow-[0_0_10px_rgba(255,70,85,0.2)] py-4 transition-all duration-300 ">
        <Container>
          <Flex className="items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-x-4">
              <Image
                imgSrc={logo}
                className="w-[110px] hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-x-6 text-[16px] font-fahim text-[#DDDDDD]">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="cursor-pointer hover:text-[#FF4655] transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#FF4655] group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>

            {/* Right Icons */}
            <div className="flex items-center gap-x-5 text-white text-lg">
              <FaGlobe className="cursor-pointer hover:text-[#FF4655] transition-transform duration-300 hover:scale-110" />
              <div className="hidden md:flex items-center gap-x-2 cursor-pointer hover:text-[#FF4655] transition">
                <FaSignOutAlt className="hover:rotate-12 transition-transform duration-300" />
                <span className="text-[16px] font-fahim">Sign In</span>
              </div>
              <FaSearch className="cursor-pointer hover:text-[#FF4655] transition-transform duration-300 hover:scale-110" />
              <div
                className="md:hidden text-[#FF4655] text-2xl cursor-pointer hover:rotate-90 transition-transform duration-300"
                onClick={() => setMenuOpen(true)}
              >
                <FaBarsProgress />
              </div>
            </div>
          </Flex>
        </Container>
      </header>

      {/* ===== Overlay + Drawer (header er baire) ===== */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          menuOpen ? "opacity-100 visible z-[998]" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] 
        bg-gradient-to-b from-[#1a1a1a]/95 via-[#0d0d0d]/90 to-[#000000]/90
        backdrop-blur-lg border-l border-[#ff4655]/20
        text-white p-6 transform transition-transform duration-500 ease-in-out 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        z-[999] shadow-[-6px_0_15px_rgba(255,70,85,0.15)] overflow-y-auto`}
      >
        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-3">
          <h2 className="text-[#FF4655] text-xl font-semibold tracking-wide">
            Menu
          </h2>
          <FaTimes
            onClick={() => setMenuOpen(false)}
            className="text-2xl cursor-pointer hover:text-[#FF4655] transition-transform duration-300 hover:rotate-90"
          />
        </div>

        {/* ===== Mobile Menu with Moving Line Effect ===== */}
        <ul className="flex flex-col gap-4 text-[18px] font-fahim">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="relative group cursor-pointer hover:text-[#FF4655] transition-all duration-700 border-b border-gray-700 pb-2 hover:translate-x-2"
            >
              {item.name}
              {/* Moving underline effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF4655] transition-all duration-500 ease-out group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-x-3 text-[#DDDDDD] group cursor-pointer hover:text-[#FF4655] transition-all duration-300">
          <FaSignOutAlt className="group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-[16px] font-fahim">Sign In</span>
        </div>
      </div>
    </>
  );
};

export default Header;
