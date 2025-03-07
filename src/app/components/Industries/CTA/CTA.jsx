import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <div className="relative flex items-center justify-center px-6 py-10">
      <div className="relative w-full max-w-5xl rounded-2xl p-[3px] bg-gradient-to-r from-cyan-400 to-purple-500">
        {/* Inner Card */}
        <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#0a192f] to-[#1a053d] p-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            <span className="text-purple-400">
              Digitally transform your business’
            </span>{" "}
            potential
          </h2>
          <p className="mt-2 text-lg md:text-2xl font-semibold text-white">
            with industry-best development services
          </p>
          <Link
            href="/contact"
            className="mt-6 md:text-lg rounded-lg bg-purple-600 px-6 py-2 text-white transition hover:bg-purple-700"
          >
            Connect with an Expert →
          </Link>
        </div>
      </div>
    </div>
  );
}
