import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects({ name, description, imageURL }) {
  return (
    <>
      {/* Show in Desktop View */}
      <div
        className="relative min-h-screen bg-fixed bg-center bg-cover hidden md:flex items-center justify-end px-10"
        style={{
          backgroundImage: `url('${imageURL}')`,
        }}
      >
        <div className="bg-black h-screen bg-opacity-80 p-6 shadow-lg flex items-center">
          <div>
            <h2 className="text-xl font-bold">Tech Stacks</h2>
            <p className="mt-2 text-white">React</p>
            <p className="mt-2 text-white">Next.js</p>
            <p className="mt-2 text-white">Tailwind CSS</p>
            <p className="mt-2 text-white">Node.js</p>
          </div>
        </div>
        <div className="p-6 max-w-lg">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="my-4 text-gray-700">{description}</p>
          <Link
            href="/portfolio"
            className="mt-5 px-6 py-2 border-2 border-purple-700 text-white rounded-full hover:bg-purple-700 transition duration-300"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* Show this in mobile view  */}

      <div className="flex flex-col items-center bg-black text-white py-8 px-4 rounded-md mx-[10%] my-10 md:hidden">
        {/* Logo & Icons */}
        <div className="flex items-center justify-between w-full max-w-md">
          {/* Project Name and LOGO */}
          <div className="flex items-center space-x-2">
            <Image src={imageURL} alt="Curu Logo" width={50} height={50} />
            <h1 className="text-2xl font-bold">{name}</h1>
          </div>
          {/* TechStacks Images */}
          <div className="flex space-x-4">
            <Image src="/web-icon.png" alt="Web" width={30} height={30} />
            <Image src="/apple-icon.png" alt="Apple" width={30} height={30} />
            <Image
              src="/google-icon.png"
              alt="Google Play"
              width={30}
              height={30}
            />
          </div>
        </div>

        {/* Title & Description */}
        <div className="text-center mt-6">
          <h2 className="text-yellow-400 text-xl font-semibold">{name}</h2>
          <p className="text-lg text-left">{description}</p>
        </div>

        {/* Porject Preview */}
        <div className="relative mt-8 flex justify-center">
          <Image
            src={imageURL}
            alt="Curu App Preview"
            width={300}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
