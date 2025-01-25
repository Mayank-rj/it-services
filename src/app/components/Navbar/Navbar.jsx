"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";
import { menuData } from "../../../assests/menuData";

const DropDown = ({ item, setIsMobileMenuOpen, setActiveMenu }) => {
  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  };

  return (
    <div className="flex flex-col items-start">
      <Link
        href={item.path}
        onClick={handleItemClick}
        className="text-gray-800 font-semibold"
      >
        {item.label}
      </Link>
      <p className="text-gray-500 text-sm">{item.description}</p>
    </div>
  );
};

const Menu = ({ title, items, onClick, isMobile }) => {
  return (
    <>
      <div className="group ms-8 h-20 flex items-center">
        <Link
          href="/"
          onClick={(e) => onClick(e, title)}
          className="text-gray-600 hover:text-gray-800"
        >
          {title}
        </Link>

        {/* Full-width Dropdown content (shown on hover on desktop) */}
        {!isMobile && (
          <div className="absolute z-10 left-0 top-full w-screen bg-white shadow-lg p-6 grid grid-cols-3 gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
            {items.map((item, index) => (
              <DropDown key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // state for hamburger menu

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const handleMenuClick = (e, title) => {
    e.preventDefault();
    if (isMobile) {
      setActiveMenu(title);
      setIsMobileMenuOpen(false);
    }
  };

  const handleBackClick = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div
        className={"md:container mx-auto md:flex justify-between items-center"}
      >
        {/* Logo */}
        <div className="flex justify-between px-5">
          <div className="text-gray-800 text-md font-semibold text-center">
            <Link href="/" className="flex flex-col items-center">
              <img src="/" alt="Logo" style={{ height: "50px" }} />
              Bada Bhai Hai Na
            </Link>
          </div>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden block focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <span className="text-2xl text-gray-800">&times;</span>
            ) : (
              <div className="space-y-2">
                <span className="block w-8 h-0.5 bg-gray-800"></span>
                <span className="block w-8 h-0.5 bg-gray-800"></span>
                <span className="block w-8 h-0.5 bg-gray-800"></span>
              </div>
            )}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          } md:flex space-x-8 items-center transition-max-height duration-300 ease-in-out overflow-hidden md:overflow-visible`}
        >
          {/* About us Button */}
          <div className="group ms-8 h-20 flex items-center">
            <Link
              href="/flexi-od"
              className="text-gray-600 hover:text-gray-800"
            >
              About Us
            </Link>
          </div>

          {!activeMenu
            ? Object.keys(menuData).map((key) => (
                <Menu
                  key={key}
                  title={key}
                  items={menuData[key]}
                  onClick={handleMenuClick}
                  isMobile={isMobile}
                />
              ))
            : null}

          {/* Blog Button */}
          <div className="group ms-8 h-20 flex items-center">
            <Link
              href="/flexi-od"
              className="text-gray-600 hover:text-gray-800"
            >
              Blog
            </Link>
          </div>

          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700"
          >
            Contact us
          </Link>
        </div>

        {/* Submenu for Mobile */}
        {isMobile && activeMenu && (
          <div className="fixed inset-0 bg-white z-50 p-6">
            {/* Close (Cross) Icon at the Top Right */}
            <button
              onClick={() => setActiveMenu(null)}
              className="absolute top-4 right-4 text-2xl"
            >
              &times;
            </button>

            <button
              onClick={handleBackClick}
              className="text-purple-600 font-semibold mb-4"
            >
              &larr; Back
            </button>

            <div className="grid grid-cols-2 gap-4">
              {menuData[activeMenu].map((item, index) => (
                <DropDown
                  key={index}
                  item={{ ...item, path: item.path }}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                  setActiveMenu={setActiveMenu}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
