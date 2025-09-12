import React from 'react'

const BadgeTwo = ({className,btxt,btextTo,badprice}) => {
  return (
    <>
    <div className="">{badprice}</div>
   <div className={`text-[25px] text-[#fff] font-semibold font-fahim py-5`}>{btextTo}</div>
   <div className={`${className}`}>{btxt}</div>
    </>
  )
}

export default BadgeTwo