import Messages from "@/components/dasboard/Messages";
import React from "react";

export const metadata = {
  title: "Dashboard-messages || Oritto LED Lights",
  description: "Oritto LED Lights",
};

export default function page() {
  return (
    <>
      <main>
        <Messages />
      </main>
    </>
  );
}
