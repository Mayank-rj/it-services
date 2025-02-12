"use client"; // ✅ Ensures this component runs on the client side

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUser,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

export default function ModalForm({ closeModal }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Too Short!").required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
        .required("Phone is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values) => {
      alert("Form submitted successfully!");
      closeModal();
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Get in Touch</h2>
          <X className="cursor-pointer text-yellow-400" onClick={closeModal} />
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Let’s convert your ideas into action!
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-800">
            <FontAwesomeIcon icon={faUser} className="text-yellow-400 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="bg-transparent w-full outline-none text-white"
              {...formik.getFieldProps("name")}
            />
          </div>
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-400 text-sm">{formik.errors.name}</p>
          )}

          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-800">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-yellow-400 mr-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="bg-transparent w-full outline-none text-white"
              {...formik.getFieldProps("email")}
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-400 text-sm">{formik.errors.email}</p>
          )}

          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-800">
            <FontAwesomeIcon icon={faPhone} className="text-yellow-400 mr-2" />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your Phone Number"
              className="bg-transparent w-full outline-none text-white"
              {...formik.getFieldProps("phone")}
            />
          </div>
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-400 text-sm">{formik.errors.phone}</p>
          )}

          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-800">
            <FontAwesomeIcon
              icon={faMessage}
              className="text-yellow-400 mr-2"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              className="bg-transparent w-full outline-none text-white resize-none"
              rows="3"
              {...formik.getFieldProps("message")}
            ></textarea>
          </div>
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-400 text-sm">{formik.errors.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded-lg font-bold hover:bg-yellow-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
