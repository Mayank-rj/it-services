import CTA from "@/app/components/CTA/CTA";
import Features from "@/app/components/Industries/features/Features";
import HeroSec from "@/app/components/Industries/industriesHero/HeroSec";
import WhyChooseUs from "@/app/components/Industries/WhyChooseUs/WhyChooseUs";
import React from "react";

export default function Saas() {
  const featuresCardInfo = [
    {
      title: "Custom SaaS Development",
      description:
        "Build scalable and secure SaaS applications tailored to your business needs.",
    },
    {
      title: "Cloud-Based Solutions",
      description:
        "Leverage cloud computing for enhanced performance, security, and accessibility.",
    },
    {
      title: "AI & Automation Integration",
      description:
        "Enhance SaaS capabilities with AI-driven automation and data analytics.",
    },
    {
      title: "Multi-Tenant Architecture",
      description:
        "Optimize resources with efficient multi-tenant SaaS architecture.",
    },
    {
      title: "Seamless API Integrations",
      description:
        "Integrate with third-party tools and services effortlessly.",
    },
    {
      title: "Subscription & Payment Management",
      description:
        "Implement secure, flexible subscription models and payment processing systems.",
    },
  ];

  const whyChooseCardInfo = [
    {
      title: "Proven Expertise",
      description:
        "We specialize in SaaS development with a strong track record of successful solutions.",
    },
    {
      title: "Scalable & Secure Solutions",
      description:
        "Our SaaS products are built for growth, security, and high performance.",
    },
    {
      title: "User-Friendly Interfaces",
      description:
        "We design intuitive SaaS platforms for seamless user experiences.",
    },
    {
      title: "Seamless Third-Party Integrations",
      description:
        "Connect effortlessly with CRM, ERP, and other business tools.",
    },
    {
      title: "Cost-Effective Development",
      description:
        "We offer high-quality SaaS solutions at competitive pricing.",
    },
    {
      title: "Compliance & Data Security",
      description:
        "Ensure data protection and compliance with industry regulations.",
    },
  ];
  return (
    <div>
      <HeroSec
        heading="Transforming Businesses with SaaS Solutions"
        backgroundImage={"url('/hero/hero_sample.jpg')"}
      />
      <Features
        heading="Innovative Technology for SaaS Industry"
        description="From AI-driven automation to cloud-based scalability, we build robust SaaS solutions that drive business growth."
        cardInfo={featuresCardInfo}
      />
      <CTA
        heading={"Looking to Build a SaaS Platform?"}
        description={
          "Let’s create a scalable and high-performing SaaS solution together!"
        }
        buttonName={"Get in Touch"}
      />
      <WhyChooseUs
        heading={"Why Choose Us for SaaS Development?"}
        description={
          "With extensive experience in SaaS development, we build secure, scalable, and user-friendly solutions that cater to modern business needs."
        }
        cardInfo={whyChooseCardInfo}
      />
      <CTA
        heading={"Let’s Transform the SaaS Industry Together"}
        description={
          "Innovate your SaaS platform with our advanced technology solutions."
        }
        buttonName={"Let's Connect"}
      />
    </div>
  );
}
