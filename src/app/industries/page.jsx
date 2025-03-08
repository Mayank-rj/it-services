"use client";
import React from "react";
import Hero from "../components/Industries/IndustryHero/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import CTA2 from "../components/CTA/CTA2";
import Link from "next/link";

export default function Industries() {
  const cards = [
    {
      id: 1,
      title: "Health Care",
      description:
        "Offering digital solutions like custom software development, UI/UX design, and mobile apps to enhance patient care and streamline healthcare operations.",
      image: "/hero/3412.jpg",
      icon: "⚕️",
      url: "/industries/health_care",
    },
    {
      id: 2,
      title: "Food",
      description:
        "Developing user-friendly websites, mobile apps, and custom software for the food industry to improve online ordering, delivery, and customer engagement.",
      image: "/hero/3412.jpg",
      icon: "🍽️",
      url: "/industries/food",
    },
    {
      id: 3,
      title: "Business",
      description:
        "Helping businesses scale with custom software solutions, CMS websites, and digital marketing to optimize processes and drive growth.",
      image: "/hero/3412.jpg",
      icon: "🏢",
      url: "/industries/business",
    },
    {
      id: 4,
      title: "Health & Fitness",
      description:
        "Providing fitness apps, websites, and digital marketing strategies to help fitness businesses grow and engage users in a digital-first environment.",
      image: "/hero/3412.jpg",
      icon: "🏋️",
      url: "/industries/health_fitness",
    },
    {
      id: 5,
      title: "M-Learning",
      description:
        "Creating mobile learning platforms with UI/UX design and app development to provide seamless educational experiences on the go.",
      image: "/hero/3412.jpg",
      icon: "🎓",
      url: "/industries/m-learning",
    },
    {
      id: 6,
      title: "Travel",
      description:
        "Building custom travel apps, websites, and digital marketing campaigns to enhance the travel experience for businesses and customers alike.",
      image: "/hero/3412.jpg",
      icon: "✈️",
      url: "/industries/travel",
    },
    {
      id: 7,
      title: "On Demand",
      description:
        "Designing on-demand service platforms with custom software and app development to provide quick, efficient service in various industries.",
      image: "/hero/3412.jpg",
      icon: "⚡",
      url: "/industries/on_demand",
    },
    {
      id: 8,
      title: "E-Commerce",
      description:
        "Developing custom e-commerce platforms, CMS websites, and mobile apps that help online businesses boost sales and streamline operations.",
      image: "/hero/3412.jpg",
      icon: "🛒",
      url: "/industries/e-commerce",
    },
    {
      id: 9,
      title: "Sports",
      description:
        "Creating sports apps, websites, and custom software solutions to enhance fan engagement, team management, and performance tracking.",
      image: "/hero/3412.jpg",
      icon: "🏅",
      url: "/industries/sports",
    },
    {
      id: 10,
      title: "Finance",
      description:
        "Developing tailored financial platforms with custom software, CMS websites, and digital marketing strategies for the finance industry.",
      image: "/hero/3412.jpg",
      icon: "💰",
      url: "/industries/finance",
    },
    {
      id: 11,
      title: "SaaS",
      description:
        "Building SaaS platforms with custom software development, UI/UX design, and CMS solutions to optimize workflows and customer engagement.",
      image: "/hero/3412.jpg",
      icon: "☁️",
      url: "/industries/saas",
    },
    {
      id: 12,
      title: "Logistics",
      description:
        "Offering custom software solutions, mobile apps, and digital marketing to optimize supply chain management and logistics operations.",
      image: "/hero/3412.jpg",
      icon: "🚛",
      url: "/industries/logistics",
    },
  ];

  return (
    <>
      <section className="w-full overflow-hidden">
        <Hero />
      </section>
      <div>
        <h1 className="text-4xl my-10 text-center">HEADING !</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-20 p-6 mb-10">
        {cards.map((card) => (
          <Link href={card.url}>
            <motion.div
              key={card.id}
              className="relative overflow-hidden rounded-2xl shadow-lg bg-black text-white p-6 h-[80vh] flex flex-col justify-end"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="fill"
                  className="z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60"></div>
              </div>
              <div className="relative flex flex-col gap-5 z-20">
                <span className="text-3xl">{card.icon}</span>
                <h3 className="text-xl font-bold mt-2">{card.title}</h3>
                <p className="text-sm mt-2">{card.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      <div>
        <CTA2 />
      </div>
    </>
  );
}
