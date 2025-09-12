import React from 'react'
import Image from './Image'
import BadgeTwo from './BadgeTwo'

const Producttwo = ({proImg,btxtt,bbtext,className}) => {
  return (
   <>
   <div className="">
   
    <Image imgSrc={proImg} className={`${className}`} />
    <BadgeTwo btextTo={bbtext} btxt={btxtt}  className={'text-[16px] text-[#FF4655] font-fahim font-semibold'}/>
   </div>
   </>
  )
}

export default Producttwo