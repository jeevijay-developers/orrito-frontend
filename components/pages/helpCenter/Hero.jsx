import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="pageHeader -type-2">
      <div className="pageHeader__bg">
        <Image
          width={1800}
          height={350}
          src="/img/pageHeader/2.jpg"
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
              <h1 className="pageHeader__title">Frequently Asked Questions</h1>
              <p className="pageHeader__text">
                Find quick answers to common queries about Oritto's LED lighting
                solutions, products, and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
