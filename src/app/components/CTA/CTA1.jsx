"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA1({ heading, description, buttonName }) {
  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center min-h-[30vh] bg-gray-900 text-white px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
        <p className="text-purple-700 font-semibold mt-3">{description}</p>
        <Link
          href="/contact"
          className="mt-5 px-6 py-2 border-2 border-purple-700 text-white rounded-full hover:bg-purple-700 transition duration-300"
        >
          {buttonName} →
        </Link>
      </motion.div>
    </>
  );
}
