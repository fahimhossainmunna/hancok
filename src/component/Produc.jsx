import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Badge from './Badge'

const Produc = ({profuctImg,badgtxt,oldPrice,newPrice}) => {
  return (
    <>
    <Container>
      <div className="relative ">
       <Image imgSrc={profuctImg}/>

        {/* Badge + Price wrapper */}
        <div className="absolute -bottom-35 left-0 flex items-center gap-3">
          <Badge badgtext={badgtxt} />
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-400">{oldPrice}</span>
            <span className="text-red-500 font-semibold">{newPrice}</span>
          </div>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Produc
//         <Image imgSrc={profuctImg} className="w-full" />
//  <div className="relative">

//         {/* Badge + Price wrapper */}
//         <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
//           <Badge badgtext={badgtxt} />
//           <div className="flex items-center gap-2">
//             <span className="line-through text-gray-400">{oldPrice}</span>
//             <span className="text-red-500 font-semibold">{newPrice}</span>
//           </div>
//         </div>
//       </div>
