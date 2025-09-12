import React from 'react'

const Badge = ({badgtext,className}) => {
  return (
   <>
  <div className={`bg-[#FF4655] text-white px-4 py-2 flex justify-center items-center ${className}`}>
      {badgtext}
    </div>
   </>
  )
}

export default Badge