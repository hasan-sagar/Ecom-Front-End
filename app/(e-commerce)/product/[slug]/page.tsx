"use client";

import { use } from "react";

import ProductSlug from "@/components/layout/productSlug/ProductSlug";

export default function SingleProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  console.log(slug);



  return (
    <ProductSlug />
  )
}
