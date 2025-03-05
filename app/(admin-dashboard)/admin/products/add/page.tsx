import React from "react";

export default function page() {
  return (
    <>
      <title>Add Products</title>
      <div className=" max-w-screen">
        {/* Card 1 */}
        <div className="bg-white p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Product Information
          </h2>
          <p className="text-gray-600">
            Enter the details of the product you want to add.
          </p>
        </div>
      </div>
    </>
  );
}
