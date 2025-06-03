"use client";

import React, { useState } from "react";
import ImageLightBox from "./ImageLightBox";
import Image from "next/image";

export default function Gallery1({ product }) {
  const [activeLightBox, setActiveLightBox] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  // console.log('Gallery1 product: ', product);
  

  // If product.images is missing or empty, fall back to default images
  const galleryImages = product?.images?.length > 0
    ? product.images.map((img, idx) => ({
        id: idx + 1,
        image: img.url,
      }))
    : [];

  return (
    <>
      <div className="tourSingleGrid -type-1 mt-30">
        <div className="tourSingleGrid__grid mobile-css-slider-2">
          {galleryImages.map((img, index) => (
            <Image
              key={index}
              width={375}
              height={375}
              src={img.image}
              alt={`Product image ${index + 1}`}
              className="object-cover image-border rounded-md"
              onClick={() => {
                setCurrentSlideIndex(index);
                setActiveLightBox(true);
              }}
            />
          ))}
        </div>

        {galleryImages.length > 0 && (
          <div className="tourSingleGrid__button">
            <div
              style={{ cursor: "pointer" }}
              className="js-gallery"
              data-gallery="gallery1"
            >
              <span
                onClick={() => {
                  setCurrentSlideIndex(0);
                  setActiveLightBox(true);
                }}
                className="button -accent-1 py-10 px-20 rounded-200 bg-dark-1 lh-16 text-white"
              >
                See all photos
              </span>
            </div>

            {/* Optional hidden anchors if needed for JS gallery libraries */}
            {galleryImages.map((img, index) => (
              <a
                key={index}
                href={img.image}
                className="js-gallery"
                data-gallery="gallery1"
              ></a>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <ImageLightBox
        images={galleryImages}
        activeLightBox={activeLightBox}
        setActiveLightBox={setActiveLightBox}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />

      <style>
        {`
        .image-border{
          border: 2px solid var(--color-border);
          border-radius: 8px;
        }
        `}
      </style>
    </>
  );
}
