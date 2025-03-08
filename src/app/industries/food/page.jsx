import CTA1 from "@/app/components/CTA/CTA1";
import Features from "@/app/components/Industries/features/Features";
import HeroSec from "@/app/components/Industries/industriesHero/HeroSec";
import WhyChooseUs from "@/app/components/Industries/WhyChooseUs/WhyChooseUs";
import React from "react";

export default function Food() {
  const featuresCardInfo = [
    {
      title: "Custom Food Delivery Solutions",
      description:
        "We develop seamless food delivery platforms to enhance ordering and delivery experiences.",
    },
    {
      title: "Restaurant Management Systems",
      description:
        "Optimize restaurant operations with efficient order, inventory, and staff management solutions.",
    },
    {
      title: "Online Ordering & POS Integration",
      description:
        "Enable smooth online ordering and integrate POS systems for streamlined transactions.",
    },
    {
      title: "Food Supply Chain Management",
      description:
        "Enhance food production and distribution with real-time supply chain tracking.",
    },
    {
      title: "AI-Powered Customer Insights",
      description:
        "Leverage AI to understand customer preferences and optimize menu offerings.",
    },
    {
      title: "Cloud Kitchen & Franchise Management",
      description:
        "Manage cloud kitchens and multiple franchise locations with smart technology solutions.",
    },
  ];

  const whyChooseCardInfo = [
    {
      title: "Industry Expertise",
      description:
        "Our team has deep experience in the food industry, delivering tailored technology solutions.",
    },
    {
      title: "User-Friendly Solutions",
      description:
        "We prioritize intuitive designs for seamless customer experiences and efficient restaurant operations.",
    },
    {
      title: "Data-Driven Optimization",
      description:
        "Leverage analytics to improve order efficiency and customer satisfaction.",
    },
    {
      title: "Seamless Third-Party Integrations",
      description:
        "Easily integrate with delivery services, payment gateways, and CRM tools.",
    },
    {
      title: "Flexible Business Models",
      description:
        "Choose scalable solutions tailored to restaurant chains, cloud kitchens, or startups.",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "Get high-quality food industry tech solutions at competitive rates.",
    },
  ];
  return (
    <div>
      <HeroSec
        heading="Food Industry Technology Solutions"
        backgroundImage={"url('/hero/hero_sample.jpg')"}
      />
      <Features
        heading="Innovative Technology for the Food Industry"
        description="From online food delivery apps to restaurant management systems, we provide cutting-edge solutions to elevate the food industry."
        cardInfo={featuresCardInfo}
      />
      <CTA1
        heading={"Want to Transform Your Food Business?"}
        description={
          "Let’s build a seamless and efficient food tech solution together!"
        }
        buttonName={"Get in Touch"}
      />
      <WhyChooseUs
        heading={"Why Choose Us for Food Industry Solutions?"}
        description={
          "With extensive experience in food tech development, we create efficient, scalable, and customer-focused solutions for restaurants and food businesses."
        }
        cardInfo={whyChooseCardInfo}
      />
      <CTA1
        heading={"Let’s Elevate the Food Industry Together"}
        description={
          "Innovate your food business with our technology solutions."
        }
        buttonName={"Let's Connect"}
      />
    </div>
  );
}
