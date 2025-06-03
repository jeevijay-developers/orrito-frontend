import DbBooking from "@/components/dasboard/DbBooking";
import React from "react";

export const metadata = {
  title: "Dashboard-booking || Oritto LED Lights",
  description: "Oritto LED Lights",
};

export default function page() {
  return (
    <>
      <main>
        <DbBooking />
      </main>
    </>
  );
}
