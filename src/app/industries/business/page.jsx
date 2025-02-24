import CTA from "@/app/components/CTA/CTA";
import Features from "@/app/components/Industries/features/Features";
import HeroSec from "@/app/components/Industries/industriesHero/HeroSec";
import WhyChooseUs from "@/app/components/Industries/WhyChooseUs/WhyChooseUs";
import React from "react";

export default function Business() {
  const featuresCardInfo = [
    {
      title: "Market Research & Analysis",
      description:
        "We provide in-depth market research to help businesses identify opportunities and challenges, ensuring a data-driven approach to success.",
    },
    {
      title: "Business Strategy Development",
      description:
        "Our experts craft tailored business strategies that align with your goals, enhancing growth and sustainability.",
    },
    {
      title: "Sales & Lead Generation",
      description:
        "We help businesses generate quality leads and drive conversions through targeted sales strategies and digital marketing.",
    },
    {
      title: "Brand Positioning & Marketing",
      description:
        "Strengthen your brand identity and presence with our innovative marketing solutions, ensuring competitive advantage.",
    },
    {
      title: "Partnership & Networking",
      description:
        "Expand your business by building strategic partnerships and leveraging industry connections.",
    },
    {
      title: "Operational Efficiency Improvement",
      description:
        "Optimize your business operations with our expert consultation, ensuring seamless workflow and productivity.",
    },
  ];

  const whyChooseCardInfo = [
    {
      title: "Expert Guidance",
      description:
        "Our team of business consultants brings years of expertise to help you navigate complex challenges.",
    },
    {
      title: "Customized Solutions",
      description:
        "We tailor our strategies to meet your unique business needs, ensuring maximum impact.",
    },
    {
      title: "Data-Driven Approach",
      description:
        "We leverage analytics and insights to make informed business decisions.",
    },
    {
      title: "Scalability & Growth",
      description:
        "We focus on sustainable growth strategies to scale your business effectively.",
    },
    {
      title: "Flexible Engagement Models",
      description:
        "Choose from a variety of engagement models that best suit your business requirements.",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "Get top-notch business development services at competitive rates.",
    },
  ];
  return (
    <div>
      <HeroSec
        heading="Business Development Solutions"
        backgroundImage={"url('/hero/hero_sample.jpg')"}
      />
      <Features
        heading="Comprehensive Business Growth Services"
        description="We empower businesses to achieve their full potential by offering strategic guidance, market insights, and innovative solutions tailored to their unique needs."
        cardInfo={featuresCardInfo}
      />
      <CTA
        heading={"Looking to Scale Your Business?"}
        description={
          "Let’s collaborate to create a powerful business strategy!"
        }
        buttonName={"Get in Touch"}
      />
      <WhyChooseUs
        heading={"Why Choose Micro Web for Business App Development Solutions?"}
        description={
          "Our extensive experience in business consulting, strategy formulation, and market positioning has helped numerous businesses thrive. Let us help you navigate the path to success."
        }
        cardInfo={whyChooseCardInfo}
      />
      <CTA
        heading={"Let’s Elevate Your Business Together"}
        description={
          "Unlock new opportunities and achieve success with our expertise."
        }
        buttonName={"Let's Connect"}
      />
    </div>
  );
}
