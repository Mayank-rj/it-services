import CTA from "@/app/components/CTA/CTA";
import Features from "@/app/components/Industries/features/Features";
import HeroSec from "@/app/components/Industries/industriesHero/HeroSec";
import WhyChooseUs from "@/app/components/Industries/WhyChooseUs/WhyChooseUs";
import React from "react";

export default function Travel() {
  const featuresCardInfo = [
    {
      title: "Custom Travel App Development",
      description:
        "Create seamless travel applications for booking, itinerary planning, and real-time assistance.",
    },
    {
      title: "AI-Powered Travel Recommendations",
      description:
        "Leverage AI to provide personalized travel suggestions and enhance customer experiences.",
    },
    {
      title: "Real-Time Flight & Hotel Booking",
      description:
        "Enable users to book flights, hotels, and vacation packages with real-time availability.",
    },
    {
      title: "Secure Payment Gateway Integration",
      description:
        "Implement safe and efficient payment solutions for hassle-free transactions.",
    },
    {
      title: "Travel Insurance & Assistance",
      description:
        "Offer integrated travel insurance options and real-time support services.",
    },
    {
      title: "Multi-Language & Currency Support",
      description:
        "Provide seamless experiences with multilingual support and global payment options.",
    },
  ];

  const whyChooseCardInfo = [
    {
      title: "Industry Expertise",
      description:
        "We specialize in travel tech, building innovative and customer-centric solutions.",
    },
    {
      title: "Scalable & Secure Solutions",
      description:
        "Our travel applications are designed for scalability, security, and high performance.",
    },
    {
      title: "User-Friendly Experience",
      description:
        "We develop intuitive travel platforms to enhance the user journey.",
    },
    {
      title: "Seamless Third-Party Integrations",
      description:
        "Integrate with airlines, hotels, and payment providers effortlessly.",
    },
    {
      title: "Cost-Effective Development",
      description:
        "We deliver high-quality travel solutions at competitive prices.",
    },
    {
      title: "AI & Data Analytics",
      description:
        "Utilize AI-driven insights to enhance travel planning and customer engagement.",
    },
  ];
  return (
    <div>
      <HeroSec
        heading="Innovating Travel with Technology"
        backgroundImage={"url('/hero/hero_sample.jpg')"}
      />
      <Features
        heading="Innovative Technology for the Travel Industry"
        description="From AI-powered recommendations to seamless booking experiences, we build cutting-edge travel solutions."
        cardInfo={featuresCardInfo}
      />
      <CTA
        heading={"Looking to Build a Travel Tech Platform?"}
        description={
          "Let’s create an innovative and seamless travel experience together!"
        }
        buttonName={"Get in Touch"}
      />
      <WhyChooseUs
        heading={"Why Choose Us for Travel App Development?"}
        description={
          "With years of expertise in travel technology, we create secure, scalable, and user-friendly solutions for travel businesses."
        }
        cardInfo={whyChooseCardInfo}
      />
      <CTA
        heading={"Let’s Transform the Travel Industry Together"}
        description={
          "Innovate your travel platform with our cutting-edge technology solutions."
        }
        buttonName={"Let's Connect"}
      />
    </div>
  );
}
