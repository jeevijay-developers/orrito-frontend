
"use client";
import FooterSeven from "@/components/layout/footers/FooterSeven";
import Header9 from "@/components/layout/header/Header9";
import ProductQueryForm from "@/components/pages/productQuery/ProductQueryForm";
import React, { Suspense } from "react";
import Hero from "@/components/pages/productQuery/Hero";

import { useSearchParams } from "next/navigation";

// export const metadata = {
//   title: "Query || Oritto LED Lights",
//   description: "Oritto LED Lights",
// };
function QueryFormWrapper() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  const productName = searchParams.get("productName");

  return <ProductQueryForm productId={productId} productName={productName} />;
}

export default function page() {
  // const searchParams = useSearchParams();
  // const productId = searchParams.get("productId");
  // const productName = searchParams.get("productName");
  // console.log("Product ID:", productId);
  // console.log("Product Name:", productName);
  
  return (
    <>
      <main>
        <Header9 />
        <Hero />
        {/* <ProductQueryForm productId={productId} productName={productName} /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <QueryFormWrapper />
        </Suspense>
        <FooterSeven />
      </main>
    </>
  );
}
