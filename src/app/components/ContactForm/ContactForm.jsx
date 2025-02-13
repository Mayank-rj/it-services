"use client";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const ContactForm = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const generateCaptcha = () => {
    const rand1 = Math.floor(Math.random() * 10) + 1;
    const rand2 = Math.floor(Math.random() * 10) + 1;
    setNum1(rand1);
    setNum2(rand2);
    setCaptchaAnswer(String(rand1 + rand2));
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      contact: "",
      budget: "",
      description: "",
      nda: false,
      captcha: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      contact: Yup.string()
        .matches(/^\d+$/, "Only numbers allowed")
        .min(10, "Must be at least 10 digits")
        .required("Contact number is required"),
      budget: Yup.string().required("Please select a budget range"),
      description: Yup.string()
        .min(20, "Must be at least 20 characters")
        .required("Project description is required"),
      captcha: Yup.string()
        .matches(new RegExp(`^${captchaAnswer}$`), "Incorrect answer")
        .required("Solve the captcha"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-700 via-black to-purple-700 px-6 py-12">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl items-center gap-10 lg:gap-24">
        <div className="text-white max-w-md text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Let's Talk</h1>
          <h2 className="text-2xl lg:text-3xl font-bold">
            Our Technology Experts Are Change Catalysts
          </h2>
          <p className="mt-2 text-lg">
            Book A Free Consultation Call With Our Experts Today
          </p>
        </div>

        <div className="bg-black/70 p-6 lg:p-8 rounded-xl w-full max-w-md shadow-lg border">
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {["fullName", "email", "contact"].map((field) => (
              <div key={field}>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={
                    field === "fullName"
                      ? "Full Name"
                      : field === "email"
                      ? "E-mail ID*"
                      : "Contact Number*"
                  }
                  className={`w-full p-3 rounded-lg bg-gray-800 text-white outline-none ${
                    formik.touched[field] && formik.errors[field]
                      ? "border border-red-500"
                      : ""
                  }`}
                  {...formik.getFieldProps(field)}
                />
                {formik.touched[field] && formik.errors[field] && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors[field]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <select
                name="budget"
                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
                {...formik.getFieldProps("budget")}
              >
                <option value="">Select a Budget Range</option>
                <option value="low">Less than $1000</option>
                <option value="mid">$1000 - $5000</option>
                <option value="high">Above $5000</option>
              </select>
              {formik.touched.budget && formik.errors.budget && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.budget}
                </p>
              )}
            </div>

            <div>
              <textarea
                name="description"
                placeholder="Describe Your Project/Idea In Brief"
                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
                {...formik.getFieldProps("description")}
              />
              {formik.touched.description && formik.errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.description}
                </p>
              )}
            </div>

            <label className="flex items-center text-white">
              <input
                type="checkbox"
                name="nda"
                className="mr-2"
                {...formik.getFieldProps("nda")}
              />
              Include Copy of a Non-Disclosure Agreement
            </label>

            <div>
              <div className="flex items-center space-x-3">
                <span className="text-white text-lg">
                  {num1} + {num2} =
                </span>
                <input
                  type="text"
                  name="captcha"
                  className="w-16 p-2 rounded-lg bg-gray-800 text-white outline-none"
                  {...formik.getFieldProps("captcha")}
                />
              </div>
              {formik.touched.captcha && formik.errors.captcha && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.captcha}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 disabled:bg-gray-500"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Request Proposal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
