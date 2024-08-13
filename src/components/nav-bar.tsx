"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { useAccount } from "wagmi";
import { ConnectButton } from "./connect-button/ConnectButton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

export const NavBar = () => {
  const {} = useAccount();
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");

      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add(
            "bg-gradient-to-tr",
            "from-basebgblack",
            "to-basewhite",
            "shadow-lg",
            "border-b"
          );
          navbar.classList.remove("bg-transparent");
        } else {
          navbar.classList.add("bg-transparent");
          navbar.classList.remove(
            "bg-gradient-to-tr",
            "from-basebgblack",
            "to-basewhite",
            "shadow-lg",
            "border-b"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      name: "Learn",
      url: "/",
    },
    {
      name: "Projects",
      url: "/",
    },
    {
      name: "Bounties",
      url: "/bounty",
    },
    {
      name: "Resources",
      url: "/",
    },
    {
      name: "About",
      url: "/",
    },
  ];
  const navLinks = () => {
    return (
      <ul className="flex gap-2 lg:gap-5 flex-col md:flex-row">
        {links.map((link, index) => (
          <li
            key={index}
            className="hover:bg-gray-600/50 px-2 rounded-lg hover:text-white"
          >
            <Link href={link.url}>
              <p className="">{link.name}</p>
            </Link>
          </li>
        ))}
        <li className="block xs:hidden hover:bg-gray-600/50 px-2 rounded-lg hover:text-white">
          <Link className="" href={"/"}>
            <p className="">Post Bounties</p>
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <div
      id="navbar"
      className="flex z-50 items-center justify-between p-5 text-center fixed w-full bg-transparent"
    >
      <div className="flex gap-1 items-center">
        <div className="block md:hidden relative">
          {isOpen ? (
            <MdOutlineClose
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
              size={24}
            />
          ) : (
            <RxHamburgerMenu
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
              size={24}
            />
          )}
          {isOpen && (
            <div className="absolute w-40 rounded-lg text-white  bg-basebgblack bg-opacity-90">
              {navLinks()}
            </div>
          )}
        </div>

        <Link href={"/"}>
          <h1 className="font-bold text-lg flex">
            <Image
              src={Logo}
              alt="logo"
              height={30}
              width={30}
              className="h-5 w-5 m-auto"
            />
            Base<span className="text-baseblue">Earn</span>
          </h1>
        </Link>
      </div>
      <div className="hidden md:block">{navLinks()}</div>
      <div className="flex items-center gap-5">
        <Link className="hidden xs:block" href={"/"}>
          <p className="">Post Bounties</p>
        </Link>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
