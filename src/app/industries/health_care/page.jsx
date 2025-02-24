import CTA from "@/app/components/CTA/CTA";
import Features from "@/app/components/Industries/features/Features";
import HeroSec from "@/app/components/Industries/industriesHero/HeroSec";
import React from "react";

export default function HealthCare() {
  const cardInfo = [
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
  return (
    <div>
      <HeroSec
        heading="Health Care Heading"
        backgroundImage={"url('/hero/hero_sample.jpg')"}
      />
      <Features
        heading="Healthcare App Development"
        description="We help you make healthcare accessible and affordable for the masses in a timeline and price that would suit the business needs. With extensive experience in both consumer-end and in-hospital healthcare solutions, we help you transform the domain."
        cardInfo={cardInfo}
      />
      <CTA
        heading={"Have a Healthcare Project Idea?"}
        description={"Bring it to us to build something extraordinary!"}
        buttonName={"Get in Touch"}
      />
    </div>
  );
}
