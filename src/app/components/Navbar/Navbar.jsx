"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Navbar.css";
import { menuData } from "../../../assests/menuData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faBars,
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBehance,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import { useRouter } from "next/router";

const DropDown = ({ item, setIsMobileMenuOpen, setActiveMenu, isMobile }) => {
  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  };

  return (
    <Link href={item.path} onClick={handleItemClick}>
      <div
        className={`flex flex-col items-start border border-transparent p-1 hover:border hover:border-white rounded-md ${
          isMobile && "py-4 border-b-2"
        }`}
      >
        <p
          className={`text-purple-300 font-semibold flex items-center gap-3 mb-1 ${
            isMobile && "text-2xl"
          }`}
        >
          <FontAwesomeIcon icon={item.icon} className="text-lg" />
          {item.label}
        </p>
        <p className={`text-white text-sm  ${isMobile && "text-lg"}`}>
          {item.description}
        </p>
      </div>
    </Link>
  );
};

const Menu = ({ title, items, onClick, isMobile, setIsMobileMenuOpen }) => {
  return (
    <div
      className={`group md:ms-8 h-20 flex items-center ${
        isMobile && "border-b-2"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <Link
          href={`/${title.toLowerCase()}`}
          className={`text-white md:text-lg font-bold hover:text-purple-300 ${
            isMobile && "text-2xl"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {title}
        </Link>
        {isMobile && (
          <span
            className="mr-8 text-purple-600 text-3xl"
            onClick={(e) => onClick(e, title)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        )}
      </div>

      {/* Dropdown Content */}
      {!isMobile && (
        <div className="absolute z-50 left-0 top-full w-screen bg-[#0b1120] shadow-lg p-6 grid grid-cols-4 gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
          {/* Left Section: Image & Description */}
          <div className="col-span-1 flex flex-col items-start justify-center p-4">
            <img
              src="/your-image.jpg"
              alt="Industry Overview"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white mt-4 text-sm leading-relaxed">
              Discover how our solutions can revolutionize your industry with
              cutting-edge innovation.
            </p>
          </div>
          {/* Right Section: Dropdown Lists */}
          <div className="col-span-3 grid grid-cols-3 gap-6">
            {items.map((item, index) => (
              <DropDown key={index} item={item} isMobile={false} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Hamburger menu state
  const [isMobile, setIsMobile] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (e, title) => {
    e.preventDefault();
    if (isMobile) {
      setActiveMenu(title);
    }
  };

  const handleBackClick = () => {
    setActiveMenu(null); // Show the main dropdown menu
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null); // Reset menu state
  };

  return (
    <nav className="bg-[#0b1120] shadow-md relative">
      <div className="md:container mx-auto md:flex justify-between items-center px-5">
        {/* Logo */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="text-gray-800 text-md font-semibold text-center">
            <Link href="/" className="flex flex-col items-center text-white">
              <img src="/" alt="Logo" className="h-12" />
              Bada Bhai Hai Na
            </Link>
          </div>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden block focus:outline-none text-4xl text-purple-800"
          >
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/about"
            className="text-white text-lg font-bold hover:text-purple-300"
          >
            About Us
          </Link>

          {Object.keys(menuData).map((key) => (
            <Menu
              key={key}
              title={key}
              items={menuData[key]}
              onClick={handleMenuClick}
              isMobile={false}
            />
          ))}

          <Link
            href="/blog"
            className="text-white text-lg font-bold hover:text-purple-300"
          >
            Blog
          </Link>

          {/* Contact Us Button (Desktop) */}
          <Link
            href="/contact"
            className="bg-purple-600 text-white text-lg font-bold py-2 px-4 rounded-full hover:bg-purple-700"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Full-Screen Menu */}
        <div
          className={`fixed inset-0 bg-[#0b1120] z-50 p-6 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } right-0 overflow-y-auto`}
        >
          {/* Top Bar: Back Button & Close Button */}
          <div className="flex justify-between items-center mb-6">
            {activeMenu ? (
              <button
                onClick={handleBackClick}
                className="text-purple-600 text-2xl"
              >
                <FontAwesomeIcon icon={faChevronLeft} /> Back
              </button>
            ) : (
              <span className="w-8" /> // Placeholder to align close button
            )}

            <button
              onClick={handleCloseMenu}
              className="text-purple-600 text-4xl"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Menu Content */}
          {!activeMenu ? (
            <div className="flex flex-col space-y-6">
              <Link
                href="/about"
                className="flex items-center text-white font-bold h-20 text-2xl border-b-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              {Object.keys(menuData).map((key) => (
                <Menu
                  key={key}
                  title={key}
                  items={menuData[key]}
                  onClick={handleMenuClick}
                  isMobile={true}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
              ))}

              <Link
                href="/blog"
                className="flex items-center text-white font-bold h-20 text-2xl border-b-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <div className="text-center text-white font-bold text-lg">
                <div className="contact-number text-3xl">
                  📞 +91 98765 43210
                </div>
              </div>
              {/* Social Media Icons */}
              <div className="flex justify-center space-x-6 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faTwitter} size="3x" />
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faBehance} size="3x" />
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 max-h-[90vh] overflow-y-auto">
              {menuData[activeMenu].map((item, index) => (
                <DropDown
                  key={index}
                  item={item}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                  isMobile={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Responsive Go to Top Button */}
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-purple-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-purple-800 transition-all duration-300 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
