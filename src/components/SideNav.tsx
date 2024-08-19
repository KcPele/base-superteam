import Link from 'next/link'
import React from 'react'

export const SideNav = ({isOpen}: any) => {
  return (
    <div
      // id="navbar"
      className={`transition-all duration-300 absolute top-20 left-0 z-50 h-screen w-full text-start text-basebgblack bg-basewhite bg-opacity-75 ${
        isOpen ? "lg:hidden block animate-slideIn" : "animate-slideOut"
      }`}
    >
      <ul className="flex flex-col tracking-wider w-4/6 bg-basewhite h-screen lg:hidden">
        <li className="border flex flex-col">
          <Link href={"/"} className='py-5 px-5 w-full hover:bg-basebrown border-b'> Learn </Link>
        </li>
        <li className="border flex flex-col">
          <Link href={"/"} className='py-5 px-5 w-full hover:bg-basebrown border-b'>Projects </Link>{" "}
        </li>
        <li className="border flex flex-col">
          <Link href={"/bounty"} className='py-5 px-5 w-full hover:bg-basebrown border-b'> Bounties </Link>
        </li>
        <li className="border flex flex-col">
          <Link href={"/"} className='py-5 px-5 w-full hover:bg-basebrown border-b'> Resources </Link>
        </li>
        <li className="border flex flex-col">
          <Link href={"/"} className='py-5 px-5 w-full hover:bg-basebrown border-b'> About</Link>
        </li>
      </ul>
      <div className="flex items-center mt-5 px-5 gap-5">
        <Link href={"/create-project"}>
          <p className="">Post Bounties</p>
        </Link>
        <Link href={"/create-profile"}>
          <p className="page-transition bg-baseblue hover:bg-transparent border border-baseblue hover:text-baseblue rounded-full py-2 px-3 text-basewhite text-xs flex">
            Create Account
          </p>
        </Link>
      </div>
    </div>
  )
}
