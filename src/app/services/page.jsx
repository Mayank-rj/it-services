import React from "react";
import Link from "next/link";
import Features from "../components/services/Features/Features";

export default function Service() {
  return (
    <>
      <section className="relative w-full h-screen flex flex-col md:items-center justify-center pl-[5%] md:pl-0 md:text-center overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <h1 className="text-4xl sm:text-6xl font-bold text-white z-10">
          <span className="text-purple-400">Discover</span>,{" "}
          <span className="text-pink-500">Develop</span>,{" "}
          <span className="text-yellow-400">Deploy</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl z-10">
          the true potential of your business with our digital engineering
          services
        </p>
        <Link href="/contact" className="z-10">
          <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg hover:opacity-80 transition-all">
            Let's Discuss Opportunities →
          </button>
        </Link>
      </section>
      <section className="px-[10%]">
        <Features />
      </section>
    </>
  );
}
