"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn("Credentials-Admin-Login", {
      email,
      password,
      redirect: true,
      callbackUrl: "/admin/dashboard",
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='70' patternTransform='scale(4) rotate(120)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(212,29.3%,36.1%,1)'/><path d='M-4.8 4.44L4 16.59 16.14 7.8M32 30.54l-13.23 7.07 7.06 13.23M-9 38.04l-3.81 14.5 14.5 3.81M65.22 4.44L74 16.59 86.15 7.8M61 38.04l-3.81 14.5 14.5 3.81'  stroke-linecap='square' stroke-width='6' stroke='hsla(211,52.7%,10.8%,1)' fill='none'/><path d='M59.71 62.88v3h3M4.84 25.54L2.87 27.8l2.26 1.97m7.65 16.4l-2.21-2.03-2.03 2.21m29.26 7.13l.56 2.95 2.95-.55'  stroke-linecap='square' stroke-width='6' stroke='hsla(75,6.2%,87.5%,1)' fill='none'/><path d='M58.98 27.57l-2.35-10.74-10.75 2.36M31.98-4.87l2.74 10.65 10.65-2.73M31.98 65.13l2.74 10.66 10.65-2.74'  stroke-linecap='square' stroke-width='6' stroke='hsla(219,37.2%,16.9%,1)' fill='none'/><path d='M8.42 62.57l6.4 2.82 2.82-6.41m33.13-15.24l-4.86-5.03-5.03 4.86m-14-19.64l4.84-5.06-5.06-4.84'  stroke-linecap='square' stroke-width='6' stroke='hsla(214,22.5%,56.5%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-144,-504)' fill='url(%23a)'/></svg>")`,
      }}
    >
      <section className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="font-bold text-2xl text-gray-800">Welcome Admin</h2>
          <p className="text-gray-600">Login to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="examplemail@gmail.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-textdark4 text-[#fff] py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* <div className="text-center mt-4">
          <a href="#" className="text-textdark3 text-base hover:text-blue-600">
            Forgot your password?
          </a>
        </div> */}

        {/* <div className="text-center mt-4">
          <button className="w-full bg-[#F9FAFB] text-[#606882] py-4 border border-gray-300 rounded-lg hover:text-dark hover:bg-gray-200 flex items-center justify-center transition duration-200">
            <Image
              src="/google.svg"
              width={20}
              height={20}
              alt="Google logo"
              className="mr-2"
            />
            Sign In with Google
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-[#606882]">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-textdark4 hover:text-blue-600">
              Sign Up Now!
            </a>
          </p>
        </div> */}
      </section>
    </div>
  );
}
