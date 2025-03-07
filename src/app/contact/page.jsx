"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0b1120] shadow-lg rounded-lg text-[#ededed]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col space-y-6 text-center md:text-left"
      >
        <h2 className="text-2xl font-bold text-[#a78bfa]">
          Contact Information
        </h2>
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-[#7c3aed] text-xl" />
            <p>123 Tech Street, IT City, 56789</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-[#7c3aed] text-xl" />
            <p>+1 234 567 890</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-[#7c3aed] text-xl" />
            <p>contact@itservices.com</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-[#a78bfa]">
          Get in Touch
        </h2>
        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          validationSchema={Yup.object({
            name: Yup.string().min(2, "Too short").required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            subject: Yup.string().min(3, "Too short").required("Required"),
            message: Yup.string().min(10, "Too short").required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              // alert("Message sent successfully!");
              setShowPopup(true);
              resetForm();
              setSubmitting(false);
            }, 2000);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded bg-[#171717] text-[#ededed] border-[#7c3aed]"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded bg-[#171717] text-[#ededed] border-[#7c3aed]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-2 border rounded bg-[#171717] text-[#ededed] border-[#7c3aed]"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-2 border rounded h-32 bg-[#171717] text-[#ededed] border-[#7c3aed]"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#7c3aed] text-white p-2 rounded hover:bg-[#a78bfa]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#171717] border border-purple-200 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-2">🎉 Thank You! 🎉</h2>
            <p>
              Your message has been successfully sent! <br />
              Our expert team will get back to you soon. <br />
              We can't wait to collaborate on something extraordinary. 🚀
            </p>
            <button
              className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
