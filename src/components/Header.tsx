import React from 'react';
import Image from "next/image";
import Logo from "@/Pictures/Logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo ">


        <Image src={Logo} width={185} height={41} alt="Picture of the author" />
        </div>

        <div className="navbtns">
        <ul className="head">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/shop"}>
            <li>Shop</li>
          </Link>
          <Link href={"/blog"}>
            <li>Blog</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        </div>

       <div className="icons">
       <img src='./contact-icon.png'></img>
          <img src='./search-icon.png'></img>
          <img src='./heart-icon.png'></img>
          <Link href={"/cart"}><img src='./cart-icon.png'></img></Link>
        </div>


      </div>
    </>
  );
}
