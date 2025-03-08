import CTA1 from "@/app/components/CTA/CTA1";
import Features from "@/app/components/Industries/features/Features";
import HeroSec from "@/app/components/Industries/industriesHero/HeroSec";
import WhyChooseUs from "@/app/components/Industries/WhyChooseUs/WhyChooseUs";
import React from "react";

export default function OnDemand() {
  const featuresCardInfo = [
    {
      title: "Custom On-Demand App Development",
      description:
        "Build tailored on-demand applications for various industries, ensuring seamless user experience.",
    },
    {
      title: "Real-Time Tracking & Notifications",
      description:
        "Implement live tracking and push notifications for better customer engagement and transparency.",
    },
    {
      title: "AI-Driven Personalization",
      description:
        "Leverage AI to provide customized recommendations and user experiences based on behavior analysis.",
    },
    {
      title: "Seamless Payment Integration",
      description:
        "Enable secure and multiple payment gateways, ensuring smooth transactions for users.",
    },
    {
      title: "Robust Admin & Vendor Panel",
      description:
        "Manage users, vendors, and service providers efficiently with a powerful dashboard.",
    },
    {
      title: "Scalable Cloud-Based Solutions",
      description:
        "Ensure high performance and reliability with scalable cloud-based infrastructure for your app.",
    },
  ];

  const whyChooseCardInfo = [
    {
      title: "Industry Expertise",
      description:
        "We specialize in developing innovative on-demand applications tailored to various business needs.",
    },
    {
      title: "User-Centric Design",
      description:
        "Our apps prioritize user experience, ensuring smooth navigation and functionality.",
    },
    {
      title: "Advanced Analytics & Insights",
      description:
        "Utilize data-driven insights to optimize performance and customer engagement.",
    },
    {
      title: "Seamless Third-Party Integrations",
      description:
        "Integrate effortlessly with payment systems, CRM, and logistics management tools.",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "We deliver high-quality on-demand apps at competitive prices.",
    },
    {
      title: "Security & Compliance",
      description:
        "Ensure data protection and compliance with industry regulations for safe transactions.",
    },
  ];
  return (
    <div>
      <HeroSec
        heading="Revolutionizing Industries with On-Demand"
        backgroundImage={"url('/hero/hero_sample.jpg')"}
      />
      <Features
        heading="Innovative Technology for the On-Demand Industry"
        description="From real-time tracking to AI-driven personalization, we build cutting-edge solutions to power on-demand services."
        cardInfo={featuresCardInfo}
      />
      <CTA1
        heading={"Looking to Build an On-Demand App?"}
        description={
          "Let’s create a seamless and scalable on-demand platform together!"
        }
        buttonName={"Get in Touch"}
      />
      <WhyChooseUs
        heading={"Why Choose Us for On-Demand App Development?"}
        description={
          "With extensive experience in the on-demand sector, we craft scalable, feature-rich applications that drive business growth."
        }
        cardInfo={whyChooseCardInfo}
      />
      <CTA1
        heading={"Let’s Transform the On-Demand Industry Together"}
        description={
          "Innovate your on-demand platform with our advanced technology solutions."
        }
        buttonName={"Let's Connect"}
      />
    </div>
  );
}
