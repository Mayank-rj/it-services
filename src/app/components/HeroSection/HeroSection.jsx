import Link from "next/link";
import React from "react";
import AutoTyping from "../AutoTyping/AutoTyping";

export default function HeroSection() {
  return (
    <>
      <div className="relative min-h-[80vh] flex items-center justify-start p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* Background Image */}
        <div className="absolute w-auto inset-0 -z-10">
          <div
            className="w-full
            h-full
            max-h-[80vh]
            p-24
            relative
            overflow-hidden
            block
            z-10
            bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20240913/pngtree-a-detailed-shot-of-wireless-headphones-resting-in-tall-grass-on-image_16192587.jpg')]
            bg-cover
            bg-no-repeat
            bg-center
            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-gray-900
            before:to-transparent
            before:opacity-75
            before:z-[-5]"
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl text-left text-white">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold my-6">
            Welcome to Next.js
          </h1>
          <div>
            <AutoTyping
              texts={[
                "Build amazing web apps.",
                "Fast, scalable, and modern.",
                "Deploy with ease!",
              ]}
              typingSpeed={100}
              erasingSpeed={50}
              delay={1500}
            />
          </div>
          {/* Gradient Button */}
          <Link
            href="/portfolio"
            className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-all duration-500 hover:bg-gradient-to-l"
          >
            View Our Projects
          </Link>
        </div>
      </div>
    </>
  );
}
