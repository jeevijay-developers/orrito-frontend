import React from "react";

export default function Overview({ product }) {
  return (
    <>
      <h2 className="text-30">Overview</h2>
      <p className="mt-20">
        {product?.productOverview}
      </p>

      <h3 className="text-20 fw-500 mt-20">Product Highlights</h3>
      <ul className="ulList mt-20">
        {product?.highlights?.map((highlight, index) => (
          <li key={index} className="text-16">
            {highlight}
          </li>
        ))}
      </ul>
    </>
  );
}
