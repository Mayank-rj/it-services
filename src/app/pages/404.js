import Link from "next/link";
import React from "react";

export default function ErrorPage() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Oops! Page not found.
          </h2>
          <p className="text-gray-500 mb-6">
            The page you're looking for might have been moved or deleted.
          </p>
          <Link href="/">
            <a className="inline-block px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg transition duration-300 hover:bg-red-400">
              Go back to Home
            </a>
          </Link>
        </div>
        <div className="mt-8">
          {/* <img
            src="/images/error.png"
            alt="Error Illustration"
            className="w-64 mx-auto animate-bounce"
          /> */}
        </div>
      </div>
    </>
  );
}
