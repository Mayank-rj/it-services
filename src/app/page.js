"use client";
import Image from "next/image";
import { Count } from "./components/Count";
import AutoTyping from "./components/AutoTyping/AutoTyping";
import React, { useState, useEffect } from "react";
import ModalForm from "./components/modalForm/ModalForm";
import Link from "next/link";
import HeroSection from "./components/HeroSection/HeroSection";
import TechnologiesTab from "./components/TechnologiesTab/TechnologiesTab";
import ContactForm from "./components/ContactForm/ContactForm";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import CTA from "./components/CTA/CTA";
import Projects from "./components/Projects/Projects";
import BlogCard from "./components/BlogCard/BlogCard";

export default function Home() {
  const servicesData = [
    {
      title: "UI/UX Design",
      description:
        "We offer a range of solutions to enhance your business growth and digital presence.",
      path: "/services/ui_ux_design",
      services: [{ name: "Figma", icon: "🎨" }],
    },
    {
      title: "Website Development",
      description:
        "We offer a range of solutions to enhance your business growth and digital presence.",
      path: "/services/website_development",
      services: [
        { name: "Frontend", icon: "🖥️" },
        { name: "Backend", icon: "⚙️" },
        { name: "FullStack", icon: "🔄" },
        { name: "DevOps", icon: "🚀" },
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "We offer a range of solutions to enhance your business growth and digital presence.",
      path: "/services/mobile_app_development",
      services: [
        { name: "Android", icon: "🤖" },
        { name: "iOS", icon: "🍏" },
        { name: "Native", icon: "⚛️" },
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "We offer a range of solutions to enhance your business growth and digital presence.",
      path: "/services/digital_marketing",
      services: [
        { name: "SEO", icon: "🔍" },
        { name: "SEM", icon: "📢" },
        { name: "SMO", icon: "📱" },
      ],
    },
    {
      title: "CMS Website",
      description:
        "We offer a range of solutions to enhance your business growth and digital presence.",
      path: "/services/cms_website",
      services: [
        { name: "WordPress", icon: "📝" },
        { name: "Shopify", icon: "🛒" },
        { name: "Wix", icon: "🌐" },
      ],
    },
    {
      title: "Salesforce Development",
      description:
        "We offer a range of solutions to enhance your business growth and digital presence.",
      path: "/services/salesforce_development",
      services: [
        { name: "Implementation", icon: "🛠️" },
        { name: "Consulting", icon: "💡" },
        { name: "Sales Cloud", icon: "☁️" },
        { name: "Service Cloud", icon: "📄" },
      ],
    },
    {
      title: "Custom Software Development",
      description:
        "We offer a range of solutions to enhance your business growth and digital presence.",
      path: "/services/custom_software_development",
      services: [
        { name: "CRM", icon: "📊" },
        { name: "ERP", icon: "🏢" },
        { name: "Product", icon: "📦" },
      ],
    },
  ];

  const projectData = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicaboet distinctio illo vitae soluta temporibus maxime totam recusandae fuga. Quaerat veritatis at impedit nesciunt minus similique, quos repellat soluta quod.",
      imageURL: "/projects/porject1.jpg",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicaboet distinctio illo vitae soluta temporibus maxime totam recusandae fuga. Quaerat veritatis at impedit nesciunt minus similique, quos repellat soluta quod.",
      imageURL: "/projects/porject2.webp",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicaboet distinctio illo vitae soluta temporibus maxime totam recusandae fuga. Quaerat veritatis at impedit nesciunt minus similique, quos repellat soluta quod.",
      imageURL: "/projects/porject1.jpg",
    },
  ];

  // const [showModal, setShowModal] = useState(false);
  // const [timer, setTimer] = useState(null);

  // const handleMouseMove = () => {
  //   if (timer) clearTimeout(timer);
  //   setTimer(setTimeout(() => setShowModal(true), 5000)); // 5 sec inactivity
  // };

  // useEffect(() => {
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     if (timer) clearTimeout(timer);
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, [timer]);

  return (
    <>
      {/* Need Background Image in gif and content for this */}
      <HeroSection />

      {/* Need Content for this */}
      <section className="px-[10%] my-32">
        <h1 className="text-start text-6xl font-bold my-6">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              path={service.path}
              services={service.services}
            />
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-start text-6xl font-bold my-6 px-[10%] md:text-center">
          Case Study
        </h1>
        {projectData.map((project, i) => (
          <Projects
            key={i}
            name={project.name}
            description={project.description}
            imageURL={project.imageURL}
          />
        ))}
      </section>

      {/* Need patterned background Image for this CTA */}
      <section className="my-32">
        <CTA
          heading={"Starting a new project or want to collaborate with us?"}
          description={"Let’s craft brilliance together!"}
          buttonName={"Get in Touch"}
        />
      </section>

      {/* Need Icons or image for this  */}
      <div className="px-[10%] my-32">
        <TechnologiesTab />
      </div>

      <section>
        <BlogCard />
      </section>

      <section>
        <ContactForm />
      </section>
    </>
  );
}
