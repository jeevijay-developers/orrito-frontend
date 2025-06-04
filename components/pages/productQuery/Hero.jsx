import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="pageHeader -type-2">
      <div className="pageHeader__bg">
        <Image
          width={1800}
          height={350}
          src="/img/pageHeader/3.jpg"
          alt="image"
        />
        <Image
          width="1800"
          height="40"
          style={{ height: "auto" }}
          src="/img/hero/1/shape.svg"
          alt="image"
        />
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="pageHeader__content">
              <h1 className="pageHeader__title">Product Inquiry Form</h1>
              <p className="pageHeader__text">
                Have questions about Oritto's LED lighting solutions? Our
                experts are ready to assist with product specifications,
                technical details, and customized lighting solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
