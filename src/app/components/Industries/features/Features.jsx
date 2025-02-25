import React from "react";
import Card from "./Card";

export default function Features({ heading, description, cardInfo }) {
  return (
    <>
      <div className="mt-96 mb-20 px-[5%] md:px-[10%]">
        <div className="mb-10">
          <h1 className="text-4xl mb-10">
            Our <span className="text-purple-600">{heading}</span> Solutions
          </h1>
          <p>{description}</p>
        </div>
        <div className="flex flex-wrap justify-evenly gap-8">
          {cardInfo.map((card, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-5">
              <Card title={card.title} description={card.description} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
