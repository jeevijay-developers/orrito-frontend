import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import BookingPages from "@/components/pages/BookingPages";
import React from "react";

export const metadata = {
  title: "Booking-page || Oritto LED Lights",
  description: "Oritto LED Lights",
};

export default function page() {
  return (
    <>
      <main>
        <Header1 />
        <BookingPages />
        <FooterOne />
      </main>
    </>
  );
}
