import React from 'react'

export default function ProductSlugHeader() {
  return (
    <div>
            <div className="w-full border-t border-b py-4 mb-6">
              <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Product Details</h1>
                <ul className="flex items-center space-x-2">
                  <li className="text-gray-600 hover:text-black cursor-pointer">
                    Home
                  </li>
                  <li className="text-gray-400">/</li>
                  <li className="text-gray-600 hover:text-black cursor-pointer">
                    Shop
                  </li>
                  <li className="text-gray-400">/</li>
                  <li className="text-gray-900">Portable Electric Grinder Maker</li>
                </ul>
              </div>
            </div>
    </div>
  )
}
