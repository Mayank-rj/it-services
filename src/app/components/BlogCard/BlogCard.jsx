import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";

export default function BlogCard() {
  const blogs = [
    {
      title: "Time for Update: iOS 15 Update has finally arrived!",
      description:
        "The new power-packed iOS 15 Update is finally out in the market and we cannot wait to share what it has to offer.",
      image: "/ios15.jpg",
      link: "#",
    },
    {
      title: "The 2021 Harsh Reality of Website Hacking & Security",
      description:
        "Many brands/businesses tell their customers that their websites are completely secure and unhackable.",
      image: "/security.jpg",
      link: "#",
    },
    {
      title: "How to Optimize Your Website for Voice Search?",
      description:
        "What started off as an in-trend is soon becoming one of the only ways users would look for information on the internet.",
      image: "/voice-search.jpg",
      link: "#",
    },
    {
      title: "8 Big 2021 Digital Trends You Should Consider",
      description:
        "There might be a range of new digital trends in the market, but these are the biggest ones to focus on.",
      image: "/trends.jpg",
      link: "#",
    },
  ];
  return (
    <>
      <div className="w-full p-6 my-16 text-white">
        <div className="flex justify-between items-center mb-8 md:px-10">
          <h2 className="text-3xl font-bold">Our Blogs</h2>
          <Link
            href="/blog"
            className="text-lg text-purple-600 hover:underline"
          >
            See all
          </Link>
        </div>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={16}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.5 },
          }}
          className="w-full"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <Link href={blog.link}>
                <div className="w-full max-w-xs bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
                  <div className="overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={320}
                      height={160}
                      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                    <p className="text-sm text-gray-400">{blog.description}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
