import Profile from "@/components/dasboard/Profile";
import React from "react";

export const metadata = {
  title: "Dashboard-my-profile || Oritto LED Lights",
  description: "Oritto LED Lights",
};

export default function page() {
  return (
    <>
      <main>
        <Profile />
      </main>
    </>
  );
}
