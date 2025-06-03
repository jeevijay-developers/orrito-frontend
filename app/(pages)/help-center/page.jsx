import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Activity from "@/components/pages/helpCenter/Activity";
import Faq from "@/components/pages/helpCenter/Faq";
import Hero from "@/components/pages/helpCenter/Hero";
import React from "react";

export const metadata = {
  title: "Help center || Oritto LED Lights",
  description: "Oritto LED Lights",
};

export default function page() {
  return (
    <>
      <main>
        <Header1 />
        <Hero />
        <Activity />
        <Faq />
        <FooterOne />
      </main>
    </>
  );
}
