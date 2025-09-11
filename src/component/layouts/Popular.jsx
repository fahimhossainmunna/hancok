import React from "react";
import Container from "../Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "../Image";
import imgonee from "/src/assets/g1One.png"
import imgtwoo from "/src/assets/gtav.jpg"
import imgthree from "/src/assets/fifaOne.jpg"
import imgfour from "/src/assets/horaizon.jpg"
import imgfive from "/src/assets/gtwo.png"
import imgsix from "/src/assets/fifatwo.jpg"
import imgseven from "/src/assets/gfour.jpg"
import imgeight from "/src/assets/forzafive.jpg"
import imgnine from "/src/assets/gtavtwo.jpg"
import imgten from "/src/assets/pcgame.jpg"

const Popular = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };
  return (
    <>
    <div className="bg-[url(/image/gameTwo.jpg)] w-[full] py-[100px] bg-no-repeat bg-cover bg-center">
      <Container>
          <div className="flex items-center gap-3 group relative justify-end">
            <h2 className="text-white text-[38px] font-semibold font-munna w-[454px] mb-2 text-end">
              POPULAR GAMES AROUND THE WORLD
            </h2>
            <span className="h-[2px] absolute bg-red-500 w-0 transition-all duration-500 group-hover:w-40 mt-22 mr-30"></span>
          </div>
          <div className="py-[50px] mt-8 gap-x-2">
             <Slider {...settings}>
        <div>
        <Image imgSrc={imgonee} className={'h-[250px] w-[400px] border  hover:border-cyan-500 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] transition-all duration-300'}/>
        </div>
        <div>
           <Image imgSrc={imgtwoo} className={'h-[250px] w-[400px] border  hover:border-cyan-500 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] transition-all duration-300'}/>
        </div>
        <div>
          <Image imgSrc={imgthree} className={'h-[250px] w-[400px] border  hover:border-cyan-500 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] transition-all duration-300'}/>
        </div>
        <div>
          <Image imgSrc={imgfour} className={'h-[250px] w-[400px] border  hover:border-cyan-500 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] transition-all duration-300'}/>
        </div>
        <div>
          <Image imgSrc={imgfive} className={'h-[250px] w-[400px] border  hover:border-cyan-500 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] transition-all duration-300'}/>
        </div>
        <div>
         <Image imgSrc={imgsix} className={'h-[250px] w-[400px] border  hover:border-cyan-500 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] transition-all duration-300'}/>
        </div>
        <div>
          <Image imgSrc={imgseven} className={'h-[250px] w-[400px] border  hover:border-cyan-500 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] transition-all duration-300'}/>
        </div>
        <div>
          <Image imgSrc={imgeight} className={'h-[250px] w-[400px] border  hover:border-cyan-500 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] transition-all duration-300'}/>
        </div>
        <div>
          <Image imgSrc={imgnine} className={'h-[250px] w-[400px] border  hover:border-cyan-500 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] transition-all duration-300'}/>
        </div>
        <div>
          <Image imgSrc={imgten} className={'h-[250px] w-[400px] border  hover:border-cyan-500 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] transition-all duration-300'}/>
        </div>
      </Slider>
          </div>
        </Container>
        </div>
     
    </>
  );
};

export default Popular;


// hover:border-cyan-400 
//   hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)]