import FooterOne from "@/components/layout/footers/FooterOne";
import FooterSeven from "@/components/layout/footers/FooterSeven";
import Header1 from "@/components/layout/header/Header1";
import Header9 from "@/components/layout/header/Header9";
import ContactForm from "@/components/pages/contact/ContactForm";
import Locations from "@/components/pages/contact/Locations";
import Map from "@/components/pages/contact/Map";
import React from "react";

export const metadata = {
  title: "Contact || Oritto LED Lights",
  description: "Oritto LED Lights",
};

export default function page() {
  return (
    <>
      <main>
        <Header9 />
        <Map />
        <Locations />
        <ContactForm />

        <FooterSeven />
      </main>
    </>
  );
}
