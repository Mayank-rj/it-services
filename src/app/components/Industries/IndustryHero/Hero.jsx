import Link from "next/link";
import "./Hero.css";
export default function Hero() {
  return (
    <div className="relative bg-black text-white md:h-[80vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 flex items-start justify-end flex-col ps-4"
        style={{ backgroundColor: "rgba(11, 17, 32, 1)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center remove-clip-path"
          style={{
            backgroundImage: "url('/hero/hero_sample.jpg')",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 60%)",
          }}
        ></div>
        <h2 className="hidden md:block text-white z-20 text-2xl mb-2">
          {" "}
          HEllo WORLD
        </h2>
        <h3 className="hidden md:block text-white z-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          <br />
          impedit corporis obcaecati quam aperiam? Totam neque maiores fugiat
          <br />
          placeat blanditiis, eos ipsa eaque accusantium error, <br /> rem odit
          incidunt itaque dolor.
        </h3>

        <div
          className="absolute inset-0 opacity-50"
          style={{ backgroundColor: "rgba(11, 17, 32, 1)" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 md:p-20">
        <h1 className="text-3xl md:text-5xl font-bold">Industries We Serve</h1>
        <p className="text-base md:text-lg mt-4 max-w-2xl">
          Discover how DianApps breakthrough technologies are transforming
          industries.
        </p>
        <Link
          href="/contact"
          className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full"
        >
          Talk to our Experts
        </Link>
      </div>
    </div>
  );
}
