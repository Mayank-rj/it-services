import CTA1 from "@/app/components/CTA/CTA1";
import Features from "@/app/components/Industries/features/Features";
import HeroSec from "@/app/components/Industries/industriesHero/HeroSec";
import WhyChooseUs from "@/app/components/Industries/WhyChooseUs/WhyChooseUs";
import React from "react";

export default function ECommerce() {
  const featuresCardInfo = [
    {
      title: "Custom E-commerce Development",
      description:
        "We build tailored e-commerce platforms that enhance user experience and drive sales.",
    },
    {
      title: "Multi-Platform Integration",
      description:
        "Seamlessly integrate your e-commerce store with multiple platforms for a unified experience.",
    },
    {
      title: "Secure Payment Gateway",
      description:
        "Ensure safe and smooth transactions with our robust payment gateway integrations.",
    },
    {
      title: "SEO & Digital Marketing",
      description:
        "Boost your online presence and increase traffic with our expert digital marketing solutions.",
    },
    {
      title: "Inventory & Order Management",
      description:
        "Optimize your supply chain with our efficient inventory management solutions.",
    },
    {
      title: "Customer Support & Chatbots",
      description:
        "Enhance customer engagement with AI-driven chatbots and 24/7 support solutions.",
    },
  ];

  const whyChooseCardInfo = [
    {
      title: "Scalable Solutions",
      description:
        "Our e-commerce platforms are designed to grow with your business, ensuring scalability.",
    },
    {
      title: "User-Friendly Interfaces",
      description:
        "We prioritize intuitive UI/UX design to enhance the shopping experience.",
    },
    {
      title: "Data-Driven Strategies",
      description:
        "Leverage analytics and insights to optimize your online store’s performance.",
    },
    {
      title: "Mobile Commerce Optimization",
      description: "Ensure seamless shopping experiences across all devices.",
    },
    {
      title: "Flexible Engagement Models",
      description:
        "Choose from various models tailored to your business needs.",
    },
    {
      title: "Affordable Pricing",
      description: "Get top-tier e-commerce solutions at competitive rates.",
    },
  ];
  return (
    <div>
      <HeroSec
        heading="E-commerce Development Solutions"
        backgroundImage={"url('/hero/hero_sample.jpg')"}
      />
      <Features
        heading="End-to-End E-commerce Services"
        description="From building custom e-commerce websites to optimizing conversions, we provide comprehensive solutions to scale your online store."
        cardInfo={featuresCardInfo}
      />
      <CTA1
        heading={"Ready to Launch Your E-commerce Store?"}
        description={"Let’s build a high-performing online store together!"}
        buttonName={"Get in Touch"}
      />
      <WhyChooseUs
        heading={"Why Choose Us for E-commerce Development?"}
        description={
          "With years of experience in e-commerce development, we help businesses create scalable, secure, and high-converting online stores."
        }
        cardInfo={whyChooseCardInfo}
      />
      <CTA1
        heading={"Let’s Transform Your Online Business"}
        description={
          "Take your e-commerce store to the next level with our expertise."
        }
        buttonName={"Let's Connect"}
      />
    </div>
  );
}
