import CTA from "@/app/components/CTA/CTA";
import Features from "@/app/components/Industries/features/Features";
import HeroSec from "@/app/components/Industries/industriesHero/HeroSec";
import WhyChooseUs from "@/app/components/Industries/WhyChooseUs/WhyChooseUs";
import React from "react";

export default function Sports() {
  const featuresCardInfo = [
    {
      title: "Custom Sports App Development",
      description:
        "Create tailored sports applications for fan engagement, athlete management, and event tracking.",
    },
    {
      title: "Live Streaming & Score Updates",
      description:
        "Provide real-time match updates, live streaming, and instant scoreboards for sports enthusiasts.",
    },
    {
      title: "AI-Powered Performance Analytics",
      description:
        "Leverage AI and data analytics to track and improve athlete performance.",
    },
    {
      title: "Fantasy Sports & Betting Platforms",
      description:
        "Develop secure and engaging fantasy sports and betting applications with real-time data.",
    },
    {
      title: "Sports E-commerce Integration",
      description:
        "Enable seamless shopping experiences for sports merchandise and gear.",
    },
    {
      title: "Event & Ticket Management",
      description:
        "Streamline sports event planning with online ticket booking and venue management systems.",
    },
  ];

  const whyChooseCardInfo = [
    {
      title: "Industry Expertise",
      description:
        "We have extensive experience in sports tech, building cutting-edge digital solutions for teams, leagues, and fans.",
    },
    {
      title: "Scalable & Secure Solutions",
      description:
        "Our sports applications are built for growth, ensuring high security and performance.",
    },
    {
      title: "Fan-Centric Design",
      description:
        "We create engaging platforms that enhance the fan experience and interaction.",
    },
    {
      title: "Seamless Third-Party Integrations",
      description:
        "Integrate with sports data providers, live streaming services, and social media platforms.",
    },
    {
      title: "Cost-Effective Development",
      description:
        "We offer high-quality sports tech solutions at competitive prices.",
    },
    {
      title: "Advanced Data Analytics",
      description:
        "Utilize sports data analytics to improve athlete performance and fan engagement.",
    },
  ];
  return (
    <div>
      <HeroSec
        heading="Transforming the Sports with Technology"
        backgroundImage={"url('/hero/hero_sample.jpg')"}
      />
      <Features
        heading="Innovative Technology for the Sports Industry"
        description="From AI-powered analytics to real-time engagement platforms, we build cutting-edge sports solutions."
        cardInfo={featuresCardInfo}
      />
      <CTA
        heading={"Looking to Build a Sports Tech Platform?"}
        description={
          "Let’s develop an engaging and high-performing sports solution together!"
        }
        buttonName={"Get in Touch"}
      />
      <WhyChooseUs
        heading={"Why Choose Us for Sports App Development?"}
        description={
          "With years of expertise in sports technology, we create secure, scalable, and engaging solutions for teams, leagues, and fans."
        }
        cardInfo={whyChooseCardInfo}
      />
      <CTA
        heading={"Let’s Transform the Sports Industry Together"}
        description={
          "Innovate your sports platform with our cutting-edge technology solutions."
        }
        buttonName={"Let's Connect"}
      />
    </div>
  );
}
