'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSec() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* Parallax Heading */}
      <div
        className="fixed left-0 w-full text-white text-4xl font-bold flex items-center justify-center h-24 z-10 transition-all duration-300"
      >
        <p className="text-right">Parallax Heading</p> 
      </div>

      {/* Scrollable Content */}
      <div className="h-screen bg-gray-900 flex flex-col items-center justify-start text-white pt-96">
        {/* Add blank space above the image */}
        <Image
          src="/hero/hero_sample.jpg"
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-full px-20 "
        />
      </div>
    </div>
  );
}
