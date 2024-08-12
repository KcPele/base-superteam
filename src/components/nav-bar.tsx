"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { useAccount } from "wagmi";
import { ConnectButton } from "./connect-button/ConnectButton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const NavBar = () => {
  const {} = useAccount();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");

      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add(
            "bg-basebgblack",
            "shadow-lg",
            "border-b-1",
            "text-white"
          );
          navbar.classList.remove("bg-transparent");
        } else {
          navbar.classList.add("bg-transparent");
          navbar.classList.remove(
            "bg-basebgblack",
            "shadow-lg",
            "border-b-1",
            "text-white"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className="flex items-center justify-around p-5 text-center fixed w-full text-black bg-transparent"
    >
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
      <ul className="flex gap-5">
        <li className="hover:underline">
          <Link href={"/"}> Learn </Link>
        </li>
        <li className="hover:underline">
          <Link href={"/"}>Projects </Link>{" "}
        </li>
        <li className="hover:underline">
          <Link href={"/"}> Categories </Link>
        </li>
        <li className="hover:underline">
          <Link href={"/"}> Resources </Link>
        </li>
        <li className="hover:underline">
          <Link href={"/"}> About</Link>
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <Link href={"/"}>
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
