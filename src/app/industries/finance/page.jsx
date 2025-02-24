import CTA from "@/app/components/CTA/CTA";
import Features from "@/app/components/Industries/features/Features";
import HeroSec from "@/app/components/Industries/industriesHero/HeroSec";
import WhyChooseUs from "@/app/components/Industries/WhyChooseUs/WhyChooseUs";
import React from "react";

export default function Finance() {
  const featuresCardInfo = [
    {
      title: "Custom Fintech Solutions",
      description:
        "We develop innovative financial technology solutions to streamline transactions and enhance security.",
    },
    {
      title: "Banking & Payment Systems",
      description:
        "Seamlessly integrate with banking systems and payment gateways for smooth financial operations.",
    },
    {
      title: "Investment & Wealth Management",
      description:
        "Leverage data-driven strategies to optimize investment portfolios and manage wealth efficiently.",
    },
    {
      title: "Regulatory Compliance & Security",
      description:
        "Ensure compliance with financial regulations and protect user data with top-tier security measures.",
    },
    {
      title: "AI-Driven Financial Analytics",
      description:
        "Utilize AI-powered insights to make informed financial decisions and predictions.",
    },
    {
      title: "Blockchain & Cryptocurrency Integration",
      description:
        "Implement blockchain solutions for secure and transparent financial transactions.",
    },
  ];

  const whyChooseCardInfo = [
    {
      title: "Industry Expertise",
      description:
        "Our team has extensive experience in fintech, banking, and financial services.",
    },
    {
      title: "Secure & Compliant Solutions",
      description:
        "We prioritize security and compliance to meet financial industry standards.",
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "Leverage advanced analytics to enhance financial operations and strategies.",
    },
    {
      title: "Seamless Integrations",
      description:
        "Easily integrate our solutions with existing financial infrastructures.",
    },
    {
      title: "Flexible Engagement Models",
      description:
        "Choose from various models tailored to your business needs.",
    },
    {
      title: "Cost-Effective Solutions",
      description: "Get top-tier financial solutions at competitive rates.",
    },
  ];
  return (
    <div>
      <HeroSec
        heading="Finance & Fintech Solutions"
        backgroundImage={"url('/hero/hero_sample.jpg')"}
      />
      <Features
        heading="Comprehensive Financial Technology Services"
        description="From digital banking solutions to AI-powered financial analytics, we provide innovative services to transform the finance sector."
        cardInfo={featuresCardInfo}
      />
      <CTA
        heading={"Looking for Cutting-Edge Fintech Solutions?"}
        description={
          "Let’s build secure and innovative financial systems together!"
        }
        buttonName={"Get in Touch"}
      />
      <WhyChooseUs
        heading={"Why Choose Us for Finance Solutions?"}
        description={
          "With years of experience in financial technology, we deliver secure, scalable, and data-driven fintech solutions tailored to your needs."
        }
        cardInfo={whyChooseCardInfo}
      />
      <CTA
        heading={"Let’s Revolutionize Financial Services Together"}
        description={
          "Take your financial business to the next level with our expertise."
        }
        buttonName={"Let's Connect"}
      />
    </div>
  );
}
