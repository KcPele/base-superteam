"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import { ConnectButton } from "./connect-button/ConnectButton";

export const NavBar = () => {
  const {} = useAccount();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");

      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("bg-black", "shadow-lg", "border-b-1", "text-white");
          navbar.classList.remove("bg-transparent");
        } else {
          navbar.classList.add("bg-transparent");
          navbar.classList.remove("bg-black", "shadow-lg", "border-b-1", "text-white");
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
      <h1 className="font-bold">
        Base<span className="text-baseblue">Earn</span>
      </h1>
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
          <p className="text-baseblue">Post Bounties</p>
        </Link>
        <ConnectButton />
      </div>
    </div>
  );
};
