import DBMain from "@/components/dasboard/main";
import React from "react";

export const metadata = {
  title: "Dashboard-main || Oritto LED Lights",
  description: "Oritto LED Lights",
};

export default function page() {
  return (
    <>
      <main>
        <DBMain />
      </main>
    </>
  );
}
