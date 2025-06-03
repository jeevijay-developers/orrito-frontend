import AddTour from "@/components/dasboard/AddTour";
import React from "react";

export const metadata = {
  title: "Dashboard-add-tour || Oritto LED Lights",
  description: "Oritto LED Lights",
};

export default function page() {
  return (
    <>
      <main>
        <AddTour />
      </main>
    </>
  );
}
