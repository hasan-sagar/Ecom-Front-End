"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
      <section className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="font-bold text-2xl text-gray-800">
            Create an Account
          </h1>
          <p className="text-gray-600">Enter your details below</p>
        </div>

        <div className="text-center mb-8">
          <button className="w-full bg-[#F9FAFB] text-[#606882] py-3 border border-gray-300 rounded-lg hover:text-dark hover:bg-gray-200 flex items-center justify-center transition duration-200">
            <Image
              src="/google.svg"
              width={20}
              height={20}
              alt="Google logo"
              className="mr-2"
            />{" "}
            Sign In with Google
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-gray-700 mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
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
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-2"
            >
              Re-type Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-type your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-textdark4 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-[#606882]">
            Already have an account?{" "}
            <a href="#" className="text-[#1c274c] hover:text-blue-600">
              Sign In Now
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
