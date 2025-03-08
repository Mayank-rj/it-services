import CTA1 from "@/app/components/CTA/CTA1";
import Features from "@/app/components/Industries/features/Features";
import HeroSec from "@/app/components/Industries/industriesHero/HeroSec";
import WhyChooseUs from "@/app/components/Industries/WhyChooseUs/WhyChooseUs";
import React from "react";

export default function HealthCare() {
  const featuresCardInfo = [
    {
      title: "Healthcare App Development",
      description:
        "Our agile developers work around multiple use cases of the mHealth sector. From health tracking apps to lab management, we have everything planned for you.",
    },
    {
      title: "Healthcare App Development",
      description:
        "Our agile developers work around multiple use cases of the mHealth sector. From health tracking apps to lab management, we have everything planned for you.",
    },
    {
      title: "Healthcare App Development",
      description:
        "Our agile developers work around multiple use cases of the mHealth sector. From health tracking apps to lab management, we have everything planned for you.",
    },
    {
      title: "Healthcare App Development",
      description:
        "Our agile developers work around multiple use cases of the mHealth sector. From health tracking apps to lab management, we have everything planned for you.",
    },
    {
      title: "Healthcare App Development",
      description: "Our agile developers work around multiple use ",
    },
    {
      title: "Healthcare App Development",
      description:
        "Our agile developers work around multiple use cases of the mHealth sector. From health tracking apps to lab management, we have everything planned for you.",
    },
  ];

  const whyChooseCardInfo = [
    {
      title: "High Security",
      description:
        "Ensuring data is protected with top-notch security measures.",
    },
    {
      title: "Better Interoperability",
      description:
        "Making your software seamlessly integrate with health data for better outcomes.",
    },
    {
      title: "Technology Inclusion",
      description: "Leveraging advanced tech to provide better solutions.",
    },
    {
      title: "Customer Satisfaction",
      description: "Prioritizing user experience for maximum satisfaction.",
    },
    {
      title: "Flexible Engagement Models",
      description: "Offering adaptable models to suit diverse business needs.",
    },
    {
      title: "Cost-effective Rates",
      description: "Providing the best solutions at affordable rates.",
    },
  ];
  return (
    <div>
      <HeroSec
        heading="Health Care Heading"
        backgroundImage={"url('/hero/hero_sample.jpg')"}
      />
      <Features
        heading="Healthcare App Development"
        description="We help you make healthcare accessible and affordable for the masses in a timeline and price that would suit the business needs. With extensive experience in both consumer-end and in-hospital healthcare solutions, we help you transform the domain."
        cardInfo={featuresCardInfo}
      />
      <CTA1
        heading={"Have a Healthcare Project Idea?"}
        description={"Bring it to us to build something extraordinary!"}
        buttonName={"Get in Touch"}
      />
      <WhyChooseUs
        heading={
          "Why Choose Micro Web for Healthcare App Development Solutions?"
        }
        description={
          "Micro Web has worked with more than 50+ healthcare firms helping them transform the space through digitalization. Our team of mHealth developers know what it takes to make secure, innovative solutions. The experience that we have gathered over the years makes us the top healthcare software development company in the USA and Australia."
        }
        cardInfo={whyChooseCardInfo}
      />
      <CTA1
        heading={"Let’s Digitalize the Health and Care Sector Together"}
        description={"It’s time to make healthcare accessible"}
        buttonName={"Let's Connect"}
      />
    </div>
  );
}
