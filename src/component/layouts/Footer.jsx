import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Image from "../Image";
import fonei from "/src/assets/fone.png";
import foneii from "/src/assets/ftwo.png";
import foneiii from "/src/assets/fthree.png";
import foneiv from "/src/assets/ffour.png";
import fonev from "/src/assets/fffive.png";
import fonevi from "/src/assets/fsix.png";

const Footer = () => {
  return (
    <div className="bg-[#121212] py-[50px] text-white">
      <Container>
       
        {/* Footer Section */}
        <footer className=" border-t border-gray-800 pt-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
            {/* Logo and About */}
            <div>
              <h2 className="text-2xl font-bold mb-3">
                Hancock <span className="text-red-500">.</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                vero officiis rem consectetur sunt cupiditate eius obcaecati,
                culpa, aspernatur aperiam id.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-[#2c2c2c] p-3 rounded-full hover:bg-[#ff4d57] transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-[#2c2c2c] p-3 rounded-full hover:bg-[#ff4d57] transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="bg-[#2c2c2c] p-3 rounded-full hover:bg-[#ff4d57] transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-[#2c2c2c] p-3 rounded-full hover:bg-[#ff4d57] transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">
                LINKS
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
                <li><a href="#" className="hover:text-red-500 transition">About</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Tournament</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Contact</a></li>
              </ul>
            </div>

            {/* Teams */}
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">
                TEAMS
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-red-500">PALADINS</a></li>
                <li><a href="#" className="hover:text-red-500 transition">CS:GO</a></li>
                <li><a href="#" className="hover:text-red-500 transition">DOTA 2</a></li>
                <li><a href="#" className="hover:text-red-500 transition">VALORANT</a></li>
              </ul>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">
                GALLERY
              </h3>
              <div className="grid grid-cols-3 gap-2">
                <Image imgSrc={fonei} alt="Gallery" className="rounded-sm object-cover" />
                <Image imgSrc={foneii} alt="Gallery" className="rounded-sm object-cover" />
                <Image imgSrc={foneiii} alt="Gallery" className="rounded-sm object-cover" />
                <Image imgSrc={foneiv} alt="Gallery" className="rounded-sm object-cover" />
                <Image imgSrc={fonev} alt="Gallery" className="rounded-sm object-cover" />
                <Image imgSrc={fonevi} alt="Gallery" className="rounded-sm object-cover" />
              </div>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
            © 2025 All rights reserved by{" "}
            <span className="text-red-500">Themebea.</span>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
