import CTA1 from "@/app/components/CTA/CTA1";
import Features from "@/app/components/Industries/features/Features";
import HeroSec from "@/app/components/Industries/industriesHero/HeroSec";
import WhyChooseUs from "@/app/components/Industries/WhyChooseUs/WhyChooseUs";
import React from "react";

export default function Logistics() {
  const featuresCardInfo = [
    {
      title: "Real-Time Fleet Tracking",
      description:
        "Optimize your logistics with real-time GPS tracking and route optimization solutions.",
    },
    {
      title: "Warehouse Management Systems",
      description:
        "Improve inventory control and warehouse operations with advanced management software.",
    },
    {
      title: "AI-Powered Logistics Analytics",
      description:
        "Leverage AI for demand forecasting, cost optimization, and predictive maintenance.",
    },
    {
      title: "Last-Mile Delivery Solutions",
      description:
        "Enhance customer satisfaction with efficient, on-time last-mile delivery systems.",
    },
    {
      title: "Supply Chain Automation",
      description:
        "Streamline operations with automated workflows and smart logistics integrations.",
    },
    {
      title: "Freight Management & Optimization",
      description:
        "Increase efficiency and reduce costs with AI-driven freight scheduling and tracking.",
    },
  ];

  const whyChooseCardInfo = [
    {
      title: "Industry Expertise",
      description:
        "We have extensive experience in logistics technology, offering tailored solutions for businesses of all sizes.",
    },
    {
      title: "Scalable Solutions",
      description:
        "Our systems are designed to grow with your business, providing flexibility and adaptability.",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Utilize analytics to enhance operational efficiency and reduce costs.",
    },
    {
      title: "Seamless Third-Party Integrations",
      description:
        "Integrate effortlessly with existing ERP, CRM, and logistics management software.",
    },
    {
      title: "Cost-Effective Technology",
      description:
        "Maximize your logistics potential with high-quality, affordable tech solutions.",
    },
    {
      title: "Enhanced Security & Compliance",
      description:
        "Ensure data security and regulatory compliance with our robust logistics solutions.",
    },
  ];
  return (
    <div>
      <HeroSec
        heading="Logistics & Supply Chain Technology"
        backgroundImage={"url('/hero/hero_sample.jpg')"}
      />
      <Features
        heading="Innovative Technology for the Logistics Industry"
        description="From real-time fleet tracking to AI-driven logistics analytics, we provide cutting-edge solutions to streamline supply chain management."
        cardInfo={featuresCardInfo}
      />
      <CTA1
        heading={"Want to Optimize Your Logistics Operations?"}
        description={
          "Let’s build a seamless and efficient logistics tech solution together!"
        }
        buttonName={"Get in Touch"}
      />
      <WhyChooseUs
        heading={"Why Choose Us for Logistics & Supply Chain Solutions?"}
        description={
          "With deep expertise in logistics tech development, we create scalable, efficient, and cost-effective solutions to enhance supply chain operations."
        }
        cardInfo={whyChooseCardInfo}
      />
      <CTA1
        heading={"Let’s Transform the Logistics Industry Together"}
        description={
          "Innovate your supply chain and logistics business with our technology solutions."
        }
        buttonName={"Let's Connect"}
      />
    </div>
  );
}
