"use client";
import React from "react";
import Card from "./Card";

export default function WhyChooseUs({ heading, description, cardInfo }) {
  return (
    <>
      <div className="my-20 px-[5%] md:px-[10%]">
        <div className="my-10">
          <h1 className="text-4xl font-bold">{heading}</h1>
          <p className="my-5">{description}</p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center p-4">
          {cardInfo.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
