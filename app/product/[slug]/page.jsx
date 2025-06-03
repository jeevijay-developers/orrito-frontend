import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider from "@/components/tourSingle/TourSlider";
import SingleOne from "@/components/tourSingle/pages/SingleOne";
// import { allTour } from "@/data/tours";
import { getProductBySlug } from "@/service/product_service";

import React from "react";

export const metadata = {
  title: "Tour-single-1 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default async function page({ params }) {
  const product = await getProductBySlug(params.slug);
    if (product) {
        return (
        <>
            <main>
            <Header1 />
            <PageHeader />
            <SingleOne product={product} />
            {/* <TourSlider /> */}
            <FooterOne />
            </main>
        </>
        );
    }
}