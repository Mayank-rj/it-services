"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function Feedback() {
  const [showPopup, setShowPopup] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too short!").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    feedback: Yup.string()
      .min(10, "Feedback must be at least 10 characters")
      .required("Feedback is required"),
    rating: Yup.number()
      .min(1, "Please select a rating")
      .required("Rating is required"),
  });

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 p-6 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Write For Us</h2>
        <p className="text-gray-300 mb-4">
          Thank you for showing interest in collaborating with DianApps and
          writing for us. We always welcome talented writers to join our team,
          whose writing skills are very firm and unique.
        </p>
        <p className="text-gray-300 mb-4">
          Indeed, technology is a vast topic. We are here to provide the best
          opportunity for the best talents who have unique ideas and can provide
          quality content under different technology categories.
        </p>
        <p className="text-gray-300">
          So if you believe that you can impart more knowledge and information
          to our readers, then you can join us today as a guest post writer!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 max-w-lg"
      >
        <div className="p-6 rounded-2xl shadow-lg bg-gray-900 text-white">
          <h2 className="text-2xl font-semibold text-center mb-4">
            We value your feedback
          </h2>
          <Formik
            initialValues={{ name: "", email: "", feedback: "", rating: 0 }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                setShowPopup(true);
                resetForm();
                setSubmitting(false);
              }, 2000);
            }}
          >
            {({ setFieldValue, values }) => (
              <Form className="space-y-4">
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`cursor-pointer transition-all ${
                        values.rating >= star
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }`}
                      onClick={() => setFieldValue("rating", star)}
                    />
                  ))}
                </div>
                <ErrorMessage
                  name="rating"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <Field
                  as="textarea"
                  name="feedback"
                  placeholder="Write your feedback here..."
                  className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded h-28"
                />
                <ErrorMessage
                  name="feedback"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded text-white font-semibold"
                  >
                    Submit Feedback
                  </button>
                </motion.div>
              </Form>
            )}
          </Formik>
        </div>
      </motion.div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#171717] border border-purple-200 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-2 text-[#7c3aed]">
              🎉 Thank You! 🎉
            </h2>
            <p className="text-white">
              Your feedback is invaluable to us! <br /> We appreciate you taking
              the time to share your thoughts. <br /> Your insights help us
              improve and provide even better services. 🚀
            </p>
            <button
              className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
