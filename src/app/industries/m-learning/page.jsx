import CTA from "@/app/components/CTA/CTA";
import Features from "@/app/components/Industries/features/Features";
import HeroSec from "@/app/components/Industries/industriesHero/HeroSec";
import WhyChooseUs from "@/app/components/Industries/WhyChooseUs/WhyChooseUs";
import React from "react";

export default function MLearning() {
  const featuresCardInfo = [
    {
      title: "Interactive e-Learning Platforms",
      description:
        "Develop engaging and interactive learning platforms with multimedia integration.",
    },
    {
      title: "AI-Powered Personalized Learning",
      description:
        "Leverage AI to deliver customized learning experiences tailored to individual needs.",
    },
    {
      title: "Gamification & Microlearning Modules",
      description:
        "Enhance learning retention with gamified experiences and bite-sized educational content.",
    },
    {
      title: "Mobile & Cross-Platform Learning Solutions",
      description:
        "Ensure seamless learning experiences across multiple devices and platforms.",
    },
    {
      title: "Virtual Classrooms & Collaboration Tools",
      description:
        "Enable real-time interaction and collaboration between students and instructors.",
    },
    {
      title: "LMS & Course Management Systems",
      description:
        "Manage courses, assessments, and progress tracking with advanced learning management systems.",
    },
  ];

  const whyChooseCardInfo = [
    {
      title: "Industry Expertise",
      description:
        "We specialize in cutting-edge m-learning solutions to transform digital education.",
    },
    {
      title: "Scalable Learning Solutions",
      description:
        "Our platforms are designed for scalability, catering to institutions, corporations, and individual learners.",
    },
    {
      title: "Engaging & Intuitive UX/UI",
      description:
        "We create user-friendly interfaces for an immersive learning experience.",
    },
    {
      title: "Seamless Third-Party Integrations",
      description:
        "Integrate effortlessly with existing LMS, CRM, and education tools.",
    },
    {
      title: "Cost-Effective Development",
      description:
        "We deliver high-quality learning solutions at competitive prices.",
    },
    {
      title: "Data Security & Compliance",
      description:
        "Ensure student data protection and compliance with education industry standards.",
    },
  ];
  return (
    <div>
      <HeroSec
        heading="Transforming Digital Education"
        backgroundImage={"url('/hero/hero_sample.jpg')"}
      />
      <Features
        heading="Innovative Technology for the m-Learning Industry"
        description="From AI-driven personalization to gamified learning, we create cutting-edge solutions to revolutionize digital education."
        cardInfo={featuresCardInfo}
      />
      <CTA
        heading={"Want to Enhance Digital Learning?"}
        description={
          "Let’s build a seamless and engaging m-learning solution together!"
        }
        buttonName={"Get in Touch"}
      />
      <WhyChooseUs
        heading={"Why Choose Us for m-Learning Solutions?"}
        description={
          "With expertise in e-learning and education technology, we create scalable, engaging, and effective m-learning solutions tailored to modern learners."
        }
        cardInfo={whyChooseCardInfo}
      />
      <CTA
        heading={"Let’s Revolutionize Education Together"}
        description={
          "Innovate your m-learning platform with our advanced technology solutions."
        }
        buttonName={"Let's Connect"}
      />
    </div>
  );
}
