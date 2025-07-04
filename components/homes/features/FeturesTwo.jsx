import { featuresTwo } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutOritto() {
  return (
    <section className="relative">
      <div className="relative xl:unset container">
        <div className="layout-pt-xl layout-pb-xl rounded-12 bg-light-3">
          <div className="sectionBg">
            <Image
              width={1290}
              height={630}
              src="/img/oritto/manufacturing-facility.jpg" // Replace with Oritto factory image
              alt="Oritto Manufacturing Facility"
              className="img-ratio rounded-12 md:rounded-0"
            />
          </div>

          <div className="row y-gap-30 justify-center items-center">
            <div className="col-lg-4 col-md-6">
              <h2 data-aos="fade-up" className="text-40 lh-13">
                Powering India's
                <br className="md:d-none" />
                Lighting Revolution
              </h2>

              <p data-aos="fade-up" className="mt-10">
                Oritto is a 100% Made-in-India LED lighting pioneer, combining
                cutting-edge technology with sustainable manufacturing. Our
                24,000 sq. ft. facility in Madhya Pradesh delivers reliable,
                energy-efficient solutions for homes, industries, and smart
                cities.
              </p>
              <button
                data-aos="fade-right"
                className="button -md -dark-1 bg-accent-1 text-white mt-60 md:mt-30"
              >
                <Link href={"/our-journey"}>
                  Our Manufacturing Story
                  <i className="icon-arrow-top-right ml-10"></i>
                </Link>
              </button>
            </div>

            <div className="col-md-6">
              <div data-aos="fade-left" className="featuresGrid">
                {featuresTwo.map((elm, i) => (
                  <div
                    key={i}
                    className="featuresGrid__item px-40 py-40 text-center bg-white rounded-12 shadow-sm"
                  >
                    <Image
                      width="60"
                      height="60"
                      src={elm.iconSrc}
                      alt="icon"
                    />
                    <div className="text-40 fw-700 text-accent-1 mt-20 lh-14">
                      {elm.value}
                    </div>
                    <div className="text-16 fw-500">{elm.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
