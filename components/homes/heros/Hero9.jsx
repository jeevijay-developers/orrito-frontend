"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slidesData = [
  // Define an array of data for each slide
  {
    id: "01",
    imageSrc: "/img/hero/9/rs1.jpg",
    // title: "Iceland's legendary Golden Circle",
    // subtitle: "Starting at $978",
    // text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    // imageSvgSrc: "/img/hero/9/image.svg",
  },
  {
    id: "02",
    imageSrc: "/img/hero/9/rs2.jpg",
    // title: "Iceland's legendary Golden Circle",
    // subtitle: "Starting at $978",
    // text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    // imageSvgSrc: "/img/hero/9/image.svg",
  },
  {
    id: "03",
    imageSrc: "/img/hero/9/rs3.jpg",
    // title: "Iceland's legendary Golden Circle",
    // subtitle: "Starting at $978",
    // text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    // imageSvgSrc: "/img/hero/9/image.svg",
  },
  {
    id: "04",
    imageSrc: "/img/hero/9/4.png",
    // title: "Iceland's legendary Golden Circle",
    // subtitle: "Starting at $978",
    // text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    // imageSvgSrc: "/img/hero/9/image.svg",
  },
  {
    id: "05",
    imageSrc: "/img/hero/9/6.png",
    // title: "Iceland's legendary Golden Circle",
    // subtitle: "Starting at $978",
    // text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    // imageSvgSrc: "/img/hero/9/image.svg",
  },
  // Add more data for additional slides as needed
];
export default function Hero9() {
  const swiperRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0); // Set the initial slide to index 0
    }
  }, []);

  const handlePaginationClick = (index) => {
    setCurrentSlideIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);

    if (swiper.activeIndex >= 5) {
      setCurrentSlideIndex(swiper.activeIndex - 5);
    }
  };
  return (
    <section className="hero -type-9">
      <div
        className="hero__slider js-section-slider"
        data-gap="0"
        data-slider-cols="xl-1 lg-1 md-1 sm-1 base-1"
        data-pagination="js-main-slider-pagination"
      >
        <div className="swiper-wrapper">
          <div className="swiper-wrapper">
            {/* <Swiper
              className="w-100"
              modules={[Navigation]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper; // Store the Swiper instance in the ref
              }}
              onSlideChange={handleSlideChange}
              breakpoints={{
                500: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 1,
                },
              }}
            >
              {slidesData.map((elm, i) => (
                <SwiperSlide key={i}>
                  <div className="hero__bg">
                    <Image
                      width={1860}
                      height={900}
                      src={elm.imageSrc}
                      alt="background"
                    />
                  </div>

                  <div className="container">
                    <div className="hero__content">
                      <div className="row items-center justify-between">
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
            <div className="w-100">
              <div className="hero__bg">
                <Image
                  width={1860}
                  height={900}
                  quality={100}
                  src="/img/hero/9/rs1.jpg"
                  alt="background"
                />
                {/* <Image
                  width={1860}
                  height={40}
                  style={{ height: "auto" }}
                  src="/img/hero/1/shape.svg"
                  alt="image"
                /> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container -pagination">
          <div className="hero__pagination js-main-slider-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            {slidesData.map((elm, i) => (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handlePaginationClick(i)}
                key={i}
                className={`pagination__item ${
                  currentSlideIndex == i ? "is-active" : ""
                }`}
              >
                {elm.id}
              </span>
            ))}
          </div>
        </div> */}
      </div>
      <style jsx>
        {`
          .swiper-wrapper {
            height: 40rem;
          }
          .hero.-type-9 .hero__bg {
            padding: 0px;
          }
        `}
      </style>
    </section>
  );
}
