
import { featuresFour } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function FeaturesOne() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2 data-aos="fade-up" className="text-30 md:text-24">
              Why Choose Oritto
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="row md:x-gap-20 pt-40 sm:pt-20 mobile-css-slider -w-280"
        >
          {featuresFour.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="featureIcon -type-1 pr-40 md:pr-0">
                <div className="featureIcon__icon d-flex justify-content-center">
                  <Image
                    width={60}
                    height={60}
                    src={elm.iconSrc}
                    alt="icon"
                    style={{
                      backgroundColor: "#e67e22",
                      padding: "20px",
                      width: "100px",
                      height: "100px",
                      borderRadius: "10%",     
                    }}
                  />
                </div>

                <h3 className="featureIcon__title text-18 fw-500 mt-30">
                  {elm.title}
                </h3>
                <p className="featureIcon__text mt-10">{elm.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
