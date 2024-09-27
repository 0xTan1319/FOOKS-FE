import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-col xl:w-1/3 md:block hidden'>
      <ul className="menu menu-horizontal px-1">
        <li className='text-[25px] font-bold pb-5 text-end'>
          <a href="#">Breaking News</a>
        </li>
        <li className='text-[25px] font-bold pb-5 text-end'>
          <a href="#">Videos</a>
        </li>
        <li className='text-[25px] font-bold pb-5 text-end'>
          <a href="#">Tweets</a>
        </li>
        <li className='text-[25px] font-bold pb-5 text-end'>
          <a href="#">Explorer</a>
        </li>
        <li className='text-[25px] font-bold pb-5 text-end'>
          <a href="#">Cloobs</a>
        </li>
        <li className='text-[25px] font-bold pb-5 text-end'>
          <a href="#">More</a>
        </li>
        <li className='text-[25px] font-bold pb-5 text-end'>
          <i className="fa facebook"></i>
          <i className="fa discord"></i>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
