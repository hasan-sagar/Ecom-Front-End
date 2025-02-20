// import React from "react";
// import AppNavbar from "./appNavbar/AppNavbar";
// import AppMenu from "./appMenu/AppMenu";
// import LandingPage from "./landingPage/LandingPage";
// import PromotionProduct from "./promotionProduct/PromotionProduct";
// import FlashSaleProduct from "./flashSaleCountdown/FlashSaleProduct";
// import NewArrivalProduct from "./newArrivalProduct/NewArrivalProduct";
// import MostSellingProduct from "./sellingProduct/MostSellingProduct";
// import ShippingBenefitsBanner from "./shippingBenefitsBanner/ShippingBenefitsBanner";
// import NewsletterSubscription from "./newsletterSubscription/NewsletterSubscription ";

// export default function AppLayout() {
//   return (
//     <>
//       <AppNavbar />
//       <AppMenu />
//       <LandingPage />
//       <NewArrivalProduct />
//       <PromotionProduct />
//       <FlashSaleProduct />
//       <MostSellingProduct />
//       <ShippingBenefitsBanner />
//       <NewsletterSubscription />
//     </>
//   );
// }

"use client";
import React from "react";
import { usePathname } from "next/navigation";
import AppNavbar from "./appNavbar/AppNavbar";
import AppMenu from "./appMenu/AppMenu";
import LandingPage from "./landingPage/LandingPage";
import PromotionProduct from "./promotionProduct/PromotionProduct";
import FlashSaleProduct from "./flashSaleCountdown/FlashSaleProduct";
import NewArrivalProduct from "./newArrivalProduct/NewArrivalProduct";
import MostSellingProduct from "./sellingProduct/MostSellingProduct";
import ShippingBenefitsBanner from "./shippingBenefitsBanner/ShippingBenefitsBanner";
import NewsletterSubscription from "./newsletterSubscription/NewsletterSubscription ";
import Footer from "./footer/Footer";



export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <AppNavbar />
      <AppMenu />
      {isHomePage ? (
        <>
          <LandingPage />
          <NewArrivalProduct />
          <PromotionProduct />
          <FlashSaleProduct />
          <MostSellingProduct />
          <ShippingBenefitsBanner />
        </>
      ) : (
        children
      )}
      <NewsletterSubscription />
      <Footer />
    </>
  );
}
