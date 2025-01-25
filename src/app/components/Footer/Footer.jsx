import "./Footer.css";
import { footerData } from "../../../assests/footerData";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-gray-100 p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          {/* Loan Categories */}
          <div className="md:col-span-2">
            <h1 className="text-2xl font-medium mb-2">Web Plant</h1>
            <p className="mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              molestiae libero esse, deleniti beatae impedit corporis. Animi
              dicta dolore beatae perspiciatis eaque modi blanditiis minima
              pariatur hic? Accusantium, esse sed!
            </p>
            <h2 className="mt-2">
              Email : <a href="mailto:abc@gmail.com">abc@gmail.com</a>
            </h2>
            <h2 className="mt-2">
              Contact : <a href="tel:+919999999999">+91 99999 99999</a>
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.149091025043!2d77.19862449093203!3d28.523566464882784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f0dd053fdd%3A0x97d95c1a5860139f!2sSaket%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1737800124385!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul>
              {footerData.Services.map((item, index) => (
                <li key={index} className="mb-2 relative">
                  <Link
                    href={item.path}
                    className="hover:text-white relative group"
                  >
                    {item.label}
                    {/* Custom underline */}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              {footerData["Quick Links"].map((item, index) => (
                <li key={index} className="mb-2 relative">
                  <Link
                    href={item.path}
                    className="hover:text-white relative group"
                  >
                    {item.label}
                    {/* Custom underline */}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
              {/* Social Icons with Hover Effect */}
              <h2 className="text-4xl mt-8">Follow Us</h2>
              <li className="flex gap-8 my-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <i className="fab fa-facebook-f text-3xl"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-600 transition-colors"
                >
                  <i className="fab fa-instagram text-3xl"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-800 transition-colors"
                >
                  <i className="fab fa-linkedin-in text-3xl"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <i className="fab fa-twitter text-3xl"></i>
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <i className="fab fa-behance text-3xl"></i>
                </a>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-yellow-100 text-2xl hover:text-yellow-400 hover:underline"
                >
                  Write For Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600" />

        {/* Footer Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 mt-10">
          <div className="logo flex items-center gap-4 justify-center md:justify-start">
            <img src="/" alt="Web Plant" className="h-12" />
            <p className="text-2xl font-medium"> Web Plant</p>
          </div>
          <div className="text-center text-sm text-gray-400 mt-4 md:mt-0">
            Made with ❤️ in India
          </div>
          <div className="text-center text-sm text-gray-400 mt-4 md:mt-0">
            © 2025 Web Plant. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
