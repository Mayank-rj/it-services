"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSec({ heading, backgroundImage }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[130vh]">
      <div className="sticky top-1/2 -translate-y-1/2 text-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">{heading}</h1>
      </div>
      <div className="relative top-[30vh]">
        <div
          className="absolute top-[30vh] left-0 w-full h-screen bg-cover bg-center -z-10"
          style={{ backgroundImage: `${backgroundImage}` }}
        ></div>
      </div>
    </div>
  );
}
