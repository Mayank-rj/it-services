"use client";
import Link from "next/link";
import React, { useState } from "react";

const TAB_CONTENT = {
  uiux: {
    text: "Designing user interfaces and experiences that are both intuitive and engaging, ensuring a seamless interaction with your product.",
    url: "/services/ui_ux_design",
  },
  website: {
    text: "Creating responsive and visually appealing websites tailored to meet your business goals and provide a great user experience.",
    url: "/services/website_development",
  },
  mobile: {
    text: "Developing custom mobile applications for both iOS and Android to enhance user engagement and expand your digital presence.",
    url: "/services/mobile_app_development",
  },
  marketing: {
    text: "Strategizing and executing targeted digital marketing campaigns to boost your online visibility, traffic, and conversions.",
    url: "/services/digital_marketing",
  },
  cms: {
    text: "Building content management systems (CMS) websites that empower you to manage and update your content effortlessly and effectively.",
    url: "/services/cms_website",
  },
  salesforce: {
    text: "Customizing Salesforce solutions to streamline your sales, marketing, and customer service processes for better efficiency and scalability.",
    url: "/services/salesforce_development",
  },
  software: {
    text: "Developing tailored software solutions to meet the unique needs of your business, ensuring enhanced functionality and growth.",
    url: "/services/custom_software_development",
  },
};

const TABS = [
  { key: "uiux", label: "UI/UX Design" },
  { key: "website", label: "Website Development" },
  { key: "mobile", label: "Mobile App Development" },
  { key: "marketing", label: "Digital Marketing" },
  { key: "cms", label: "CMS Website" },
  { key: "salesforce", label: "Salesforce Development" },
  { key: "software", label: "Custom Software Development" },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("uiux");

  return (
    <>
      <div className="text-white py-10">
        <h1 className="text-purple-400 text-3xl font-bold mb-4">
          Full-Fledged Android App Development Services
        </h1>
        <p className="text-gray-400 mb-8">
          As a leading Android app development company, we understand the
          importance of mobile apps in today's digital world. Our team of
          experienced developers, designers, and strategists is here to help
          turn your ideas into reality. We specialize in creating custom Android
          apps that are not only user-friendly but also deliver a seamless user
          experience.
        </p>
        <p className="text-gray-400 mb-8">
          Whether you have a complex application to build or a simple MVP
          android app, we are well-versed in providing the ultimate solutions
          with robust and innovative technologies while also ensuring that our
          team and you are on the same page by effectively communicating at
          every stage of the development.
        </p>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-4">
            {TABS.map(({ key, label }) => (
              <p
                key={key}
                className={`cursor-pointer py-2 md:py-4 pl-4 text-lg md:text-2xl ${
                  activeTab === key
                    ? "text-purple-600 font-medium border-l-4 border-purple-400"
                    : "text-gray-500 border-l-4 border-gray-500"
                }`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </p>
            ))}
          </div>
          <div className="w-full pt-8 md:w-1/2 relative">
            <p className="text-gray-400 mb-10 md:mb-0">
              {TAB_CONTENT[activeTab].text}
            </p>
            <Link
              href={TAB_CONTENT[activeTab].url}
              className="md:absolute md:bottom-4 md:top-auto md:right-4 md:left-auto w-auto bg-purple-600 text-white py-2 px-4 rounded-lg md:text-lg font-bold hover:bg-purple-400"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
