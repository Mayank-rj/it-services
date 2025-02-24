import React from "react";
import { Clock } from "lucide-react";

export default function Card({ title, description }) {
  return (
    <div className="bg-black text-white p-6 rounded-2xl shadow-lg w-80 flex flex-col items-center text-center">
      <div className="bg-gray-900 p-4 rounded-full flex items-center justify-center mb-4 hover:bg-purple-500 transition-colors duration-300">
        <Clock
          size={32}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold text-purple-400 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
