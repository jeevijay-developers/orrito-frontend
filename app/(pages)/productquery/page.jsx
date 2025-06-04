
import FooterSeven from "@/components/layout/footers/FooterSeven";
import Header9 from "@/components/layout/header/Header9";
import ProductQueryForm from "@/components/pages/productQuery/ProductQueryForm";
import React from "react";
import Hero from "@/components/pages/productQuery/Hero";

export const metadata = {
  title: "Query || Oritto LED Lights",
  description: "Oritto LED Lights",
};

export default function page() {
  return (
    <>
      <main>
        <Header9 />
        <Hero/>
        
        <ProductQueryForm />
        <FooterSeven />
      </main>
    </>
  );
}
