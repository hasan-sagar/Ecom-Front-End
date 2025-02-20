// import React from "react";
// import {
//   FiTruck,
//   FiRefreshCcw,
//   FiShield,
//   FiMessageCircle,
// } from "react-icons/fi";

// const ShippingBenefitsBanner = () => {
//   const benefits = [
//     {
//       icon: <FiTruck className="w-12 h-12 text-blue-600" />,
//       title: "Free Shipping",
//       description: "For all orders $200",
//       gradient: "from-blue-500/20 to-blue-600/10",
//       hoverGradient: "hover:from-blue-500/30 hover:to-blue-600/20",
//       borderColor: "border-blue-400",
//     },
//     {
//       icon: <FiRefreshCcw className="w-12 h-12 text-purple-600" />,
//       title: "1 & 1 Returns",
//       description: "Cancellation after 1 day",
//       gradient: "from-purple-500/20 to-purple-600/10",
//       hoverGradient: "hover:from-purple-500/30 hover:to-purple-600/20",
//       borderColor: "border-purple-400",
//     },
//     {
//       icon: <FiShield className="w-12 h-12 text-green-600" />,
//       title: "Secure Payments",
//       description: "Guarantee secure payments",
//       gradient: "from-green-500/20 to-green-600/10",
//       hoverGradient: "hover:from-green-500/30 hover:to-green-600/20",
//       borderColor: "border-green-400",
//     },
//     {
//       icon: <FiMessageCircle className="w-12 h-12 text-amber-600" />,
//       title: "24/7 Support",
//       description: "Anywhere & anytime",
//       gradient: "from-amber-500/20 to-amber-600/10",
//       hoverGradient: "hover:from-amber-500/30 hover:to-amber-600/20",
//       borderColor: "border-amber-400",
//     },
//   ];

//   return (
//     <div className="w-full bg-gradient-to-r py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className={`flex items-center gap-5 p-5 bg-gradient-to-br ${benefit.gradient} ${benefit.hoverGradient} backdrop-blur-sm rounded-xl ${benefit.borderColor} border-l-4 shadow-lg transform hover:-translate-y-1 transition-all duration-300 group`}
//             >
//               <div className="flex-shrink-0 p-3 bg-white bg-opacity-90 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
//                 {benefit.icon}
//               </div>
//               <div>
//                 <h3 className="font-bold text-lg text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-sm font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
//                   {benefit.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShippingBenefitsBanner;

import React from "react";
import {
  FiTruck,
  FiRefreshCcw,
  FiShield,
  FiMessageCircle,
} from "react-icons/fi";

const ShippingBenefitsBanner = () => {
  const benefits = [
    {
      icon: <FiTruck className="w-12 h-12 text-blue-600" />,
      title: "Free Shipping",
      description: "For all orders $200",
      gradient: "from-blue-500/20 to-blue-600/10",
      hoverGradient: "hover:from-blue-500/30 hover:to-blue-600/20",
      borderColor: "border-blue-400",
    },
    {
      icon: <FiRefreshCcw className="w-12 h-12 text-purple-600" />,
      title: "1 & 1 Returns",
      description: "Cancellation after 1 day",
      gradient: "from-purple-500/20 to-purple-600/10",
      hoverGradient: "hover:from-purple-500/30 hover:to-purple-600/20",
      borderColor: "border-purple-400",
    },
    {
      icon: <FiShield className="w-12 h-12 text-green-600" />,
      title: "Secure Payments",
      description: "Guarantee secure payments",
      gradient: "from-green-500/20 to-green-600/10",
      hoverGradient: "hover:from-green-500/30 hover:to-green-600/20",
      borderColor: "border-green-400",
    },
    {
      icon: <FiMessageCircle className="w-12 h-12 text-amber-600" />,
      title: "24/7 Support",
      description: "Anywhere & anytime",
      gradient: "from-amber-500/20 to-amber-600/10",
      hoverGradient: "hover:from-amber-500/30 hover:to-amber-600/20",
      borderColor: "border-amber-400",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r py-12 relative">
      {/* Half-width top border */}
      <div className="absolute top-0 left-[37%] w-1/4 h-[1px] bg-backgroundColor"></div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex items-center gap-5 p-5 bg-gradient-to-br ${benefit.gradient} ${benefit.hoverGradient} backdrop-blur-sm rounded-xl ${benefit.borderColor} border-l-4 shadow-lg transform hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className="flex-shrink-0 p-3 bg-white bg-opacity-90 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingBenefitsBanner;
