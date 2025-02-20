import React from "react";
import AppNavbar from "./appNavbar/AppNavbar";
import AppMenu from "./appMenu/AppMenu";
import LandingPage from "./landingPage/LandingPage";
import PromotionProduct from "./promotionProduct/PromotionProduct";
import FlashSaleProduct from "./flashSaleCountdown/FlashSaleProduct";

export default function AppLayout() {
  return (
    <>
      <AppNavbar />
      <AppMenu />
      <LandingPage />
      <PromotionProduct />
      <FlashSaleProduct />
    </>
  );
}
