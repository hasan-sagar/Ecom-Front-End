"use client";
import React, { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <section className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full'>
        <div className="text-center mb-8">
          <h2 className='font-bold text-2xl text-gray-800'>Sign In to your account</h2>
          <p className='text-gray-600'>Enter your details below</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              id='email'
              type='email'
              placeholder='examplemail@gmail.com'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className='block text-gray-700 mb-2'>Password</label>
            <input
              id='password'
              type='password'
              placeholder='Enter your password'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200'>Sign In</button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-blue-600 hover:underline">Forgot your password?</a>
        </div>

        <div className="text-center mt-4">
          <button className='w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-200'>
            Sign In with Google
          </button>
        </div>
      </section>
    </div>
  );
}