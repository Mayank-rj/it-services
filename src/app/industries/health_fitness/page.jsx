import CTA from "@/app/components/CTA/CTA";
import Features from "@/app/components/Industries/features/Features";
import HeroSec from "@/app/components/Industries/industriesHero/HeroSec";
import WhyChooseUs from "@/app/components/Industries/WhyChooseUs/WhyChooseUs";
import React from "react";

export default function HealthFitness() {
  const featuresCardInfo = [
    {
      title: "Personalized Fitness Apps",
      description:
        "We develop customized fitness applications to track workouts, diet, and overall wellness.",
    },
    {
      title: "Virtual Training & Coaching Platforms",
      description:
        "Enable users to access professional training and coaching sessions online with interactive tools.",
    },
    {
      title: "Wearable Tech Integration",
      description:
        "Integrate with smart wearables to monitor health metrics and improve fitness tracking.",
    },
    {
      title: "AI-Powered Health Analytics",
      description:
        "Leverage AI for real-time health monitoring, personalized recommendations, and insights.",
    },
    {
      title: "Gym & Wellness Management Systems",
      description:
        "Streamline gym operations with smart booking, membership, and payment solutions.",
    },
    {
      title: "Nutrition & Diet Planning Solutions",
      description:
        "Provide AI-based meal plans and diet tracking for a comprehensive health management experience.",
    },
  ];

  const whyChooseCardInfo = [
    {
      title: "Industry Expertise",
      description:
        "Our team has extensive experience in the health and fitness industry, delivering cutting-edge technology solutions.",
    },
    {
      title: "User-Centric Design",
      description:
        "We prioritize intuitive interfaces and seamless experiences for users and trainers alike.",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Leverage analytics to provide personalized recommendations and track progress effectively.",
    },
    {
      title: "Seamless Wearable Integrations",
      description:
        "Integrate with leading wearable devices for real-time health and fitness tracking.",
    },
    {
      title: "Flexible Business Models",
      description:
        "Choose scalable solutions tailored to fitness centers, trainers, and wellness startups.",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "Get high-quality health and fitness tech solutions at competitive rates.",
    },
  ];
  return (
    <div>
      <HeroSec
        heading="Health & Fitness Technology Solutions"
        backgroundImage={"url('/hero/hero_sample.jpg')"}
      />
      <Features
        heading="Innovative Technology for the Health & Fitness Industry"
        description="From fitness tracking apps to AI-powered health analytics, we provide cutting-edge solutions to elevate the health and fitness sector."
        cardInfo={featuresCardInfo}
      />
      <CTA
        heading={"Want to Revolutionize Health & Fitness?"}
        description={
          "Let’s build a seamless and efficient health and fitness tech solution together!"
        }
        buttonName={"Get in Touch"}
      />
      <WhyChooseUs
        heading={"Why Choose Us for Health & Fitness Solutions?"}
        description={
          "With extensive experience in health and fitness tech development, we create efficient, scalable, and user-friendly solutions for gyms, trainers, and individuals."
        }
        cardInfo={whyChooseCardInfo}
      />
      <CTA
        heading={"Let’s Elevate the Health & Fitness Industry Together"}
        description={
          "Innovate your health and fitness business with our technology solutions."
        }
        buttonName={"Let's Connect"}
      />
    </div>
  );
}
