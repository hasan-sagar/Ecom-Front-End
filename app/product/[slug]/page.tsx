import React from 'react';
import {use} from 'react';
export default  function SingleProductPage({params}: {params: Promise<{ slug: string }>}) {

  const { slug } = use (params);
  console.log(slug);

  return (
    <div className="container mx-auto p-4">
      <div className="w-full border-t border-b p-4 mb-4">
        <h1 className="text-2xl font-bold">Shop Details</h1>
      </div>
      <ul className="flex space-x-4 mb-4">
        <li className="text-gray-600 hover:text-black cursor-pointer">Home</li>
        <li className="text-gray-600 hover:text-black cursor-pointer">Shop Details</li>
      </ul>
      <div>
        {/* Add more content related to the product here */}
        <p>Product slug: {slug}</p>
      </div>
    </div>
  );
}