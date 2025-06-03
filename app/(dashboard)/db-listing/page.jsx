import DBListing from "@/components/dasboard/DBListing";
import React from "react";

export const metadata = {
  title: "Dashboard-listing || Oritto LED Lights",
  description: "Oritto LED Lights",
};

export default function page() {
  return (
    <>
      <main>
        <DBListing />
      </main>
    </>
  );
}
