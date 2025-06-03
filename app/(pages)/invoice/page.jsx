import Invoice from "@/components/Invoice";
import React from "react";

export const metadata = {
  title: "Invoice || Oritto LED Lights",
  description: "Oritto LED Lights",
};

export default function page() {
  return (
    <>
      <main>
        <Invoice />
      </main>
    </>
  );
}
