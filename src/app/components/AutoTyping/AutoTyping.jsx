"use client";
import React, { useEffect, useState } from "react";

export default function AutoTyping({
  texts,
  typingSpeed = 100,
  erasingSpeed = 50,
  delay = 1500,
}) {
  const [textIndex, setTextIndex] = useState(0); // Track which text in array
  const [displayedText, setDisplayedText] = useState(""); // What is shown
  const [isDeleting, setIsDeleting] = useState(false); // Whether deleting or typing

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayedText.length < texts[textIndex].length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][prev.length]);
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      // Erasing effect
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, erasingSpeed);
    } else if (
      !isDeleting &&
      displayedText.length === texts[textIndex].length
    ) {
      // Wait before deleting
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to the next text after deleting
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length); // Loop back to first
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    erasingSpeed,
    delay,
  ]);

  return (
    <h1 className="text-md sm:text-md md:text-xl lg:text-2xl xl:text-3xl font-bold">
      Do More With {displayedText}
      <span className="animate-blink">|</span> {/* Cursor effect */}
    </h1>
  );
}
