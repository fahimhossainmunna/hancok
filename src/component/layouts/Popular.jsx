import React from "react";
import Container from "../Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "../Image";
import imgonee from "/src/assets/g1One.png";
import imgtwoo from "/src/assets/gtav.jpg";
import imgthree from "/src/assets/fifaOne.jpg";
import imgfour from "/src/assets/horaizon.jpg";
import imgfive from "/src/assets/gtwo.png";
import imgsix from "/src/assets/fifatwo.jpg";
import imgseven from "/src/assets/gfour.jpg";
import imgeight from "/src/assets/forzafive.jpg";
import imgnine from "/src/assets/gtavtwo.jpg";
import imgten from "/src/assets/pcgame.jpg";
import Flex from "../Flex";

const Popular = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const images = [
    imgonee,
    imgtwoo,
    imgthree,
    imgfour,
    imgfive,
    imgsix,
    imgseven,
    imgeight,
    imgnine,
    imgten,
  ];

  return (
    <div className="bg-[url('/image/gameTwo.jpg')] bg-no-repeat bg-cover bg-center py-[80px] md:py-[100px] relative z-10">
      {/* Overlay for dark premium effect */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <Container>
        <Flex className={"justify-end relative z-10"}>
          <div className="flex items-center gap-3 group relative justify-end">
            <h2 className="text-white text-[26px] sm:text-[32px] md:text-[38px] font-semibold font-munna w-full sm:w-[454px] mb-2 text-end leading-tight">
              POPULAR GAMES AROUND THE WORLD
            </h2>
            <span className="h-[2px] absolute bg-red-500 w-0 transition-all duration-500 group-hover:w-40 bottom-[-6px] right-0"></span>
          </div>
        </Flex>

        {/* Slider Section */}
        <div className="py-[50px] mt-8 gap-x-2 relative z-10">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-2">
                <div className="group relative overflow-hidden rounded-[20px] shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-500">
                  <Image
                    imgSrc={img}
                    className="h-[200px] sm:h-[250px] md:h-[300px] w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                    <p className="text-white text-lg font-fahim mb-4">
                      Explore Game
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Popular;
