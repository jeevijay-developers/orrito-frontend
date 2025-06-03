import Favorites from "@/components/dasboard/Fevorite";
import React from "react";

export const metadata = {
  title: "Dashboard-favorites || Oritto LED Lights",
  description: "Oritto LED Lights",
};

export default function page() {
  return (
    <>
      <main>
        <Favorites />
      </main>
    </>
  );
}
