import BannerOne from "@/components/homes/banners/BannerOne";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import FooterSeven from "@/components/layout/footers/FooterSeven";
import Header1 from "@/components/layout/header/Header1";
import Header9 from "@/components/layout/header/Header9";
import Banner from "@/components/pages/about/Banner";
import Hero from "@/components/pages/about/Hero";
import Information from "@/components/pages/about/Information";
import OurVision from "@/components/pages/about/OurVision";
import Team from "@/components/pages/about/Team";
import React from "react";

export const metadata = {
  title: "About || Oritto LED Lights",
  description: "Oritto LED Lights",
};

export default function page() {
  return (
    <>
      <main>
        <Header9 />
        <Hero />
        <Information />
        <Banner />
        <FeaturesOne />
        <OurVision />
        {/* <div className="mt-60">
          <FeturesTwo />
        </div> */}
        <TestimonialOne />
        {/* <BannerOne /> */}
        {/* <Team /> */}
        {/* <BrandsOne /> */}
        <FooterSeven />
      </main>
    </>
  );
}
