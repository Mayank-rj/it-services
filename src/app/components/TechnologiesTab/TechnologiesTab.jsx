"use client";
import React from "react";
import { useState } from "react";
import {
  LucideIcon,
  Code,
  Database,
  Cloud,
  Server,
  Smartphone,
  BarChart,
  Settings,
} from "lucide-react";
import Image from "next/image";

const categories = [
  {
    name: "Frontend Programming Languages",
    icon: Code,
    key: "frontend",
    items: [
      { name: "CSS", icon: "/css-icon.png" },
      { name: "HTML", icon: "/html-icon.png" },
      { name: "Javascript", icon: "/js-icon.png" },
      { name: "Angular", icon: "/angular-icon.png" },
      { name: "React", icon: "/react-icon.png" },
      { name: "Vue.js", icon: "/vue-icon.png" },
      { name: "Ember", icon: "/ember-icon.png" },
      { name: "Meteor", icon: "/meteor-icon.png" },
      { name: "Next.js", icon: "/nextjs-icon.png" },
    ],
  },
  {
    name: "Backend Programming Languages",
    icon: Server,
    key: "backend",
    items: [],
  },
  { name: "Mobile", icon: Smartphone, key: "mobile", items: [] },
  { name: "Big Data", icon: BarChart, key: "bigdata", items: [] },
  {
    name: "Databases / Data Storages",
    icon: Database,
    key: "databases",
    items: [],
  },
  {
    name: "Cloud DB, Warehouses And Storage",
    icon: Cloud,
    key: "cloud",
    items: [],
  },
  { name: "DevOps", icon: Settings, key: "devops", items: [] },
];
export default function TechnologiesTab() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const activeItems =
    categories.find((cat) => cat.key === activeCategory)?.items || [];

  return (
    <>
      <section>
        <h1 className="text-start text-4xl my-6">
          Tech Capapbility Driven Digital
        </h1>

        <div className="flex flex-col md:flex-row h-screen md:h-[70vh] bg-black text-white rounded-2xl overflow-hidden">
          {/* Sidebar */}
          <div className="w-full md:w-1/3 bg-purple-700 p-4 flex flex-col gap-2 rounded-tl-2xl rounded-bl-2xl overflow-y-auto">
            {categories.map(({ name, icon: Icon, key }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex text-left items-center gap-2 p-3 rounded-lg transition-all ${
                  activeCategory === key ? "bg-purple-900" : ""
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </button>
            ))}
          </div>
          {/* Main Content */}
          <div className="flex-1 bg-white p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-tr-2xl rounded-br-2xl overflow-y-auto">
            {activeItems.length > 0 ? (
              activeItems.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow"
                >
                  <Image src={icon} alt={name} width={40} height={40} />
                  <span>{name}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Soon available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
