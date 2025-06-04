"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { tourData } from "@/data/tours";
import Stars from "@/components/common/Stars";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "@/service/product_service";
import { SlEnergy } from "react-icons/sl";

export default function TourSlider5() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await getAllProducts();
        // console.log('Fetch featured products data: ', res);

        if (!res || !res.length) {
          console.error("No data found for products");
          return;
        }

        setProducts(res);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products: ', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-10 justify-between items-center y-gap-10">
            <div className="col-auto">
              <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
                Featured Products
              </h2>
            </div>
          </div>

          <div className="relative pt-40 sm:pt-20">
            <div className="overflow-hidden js-section-slider">
              <div data-aos="fade-up" data-aos-delay="" className="">
                {loading ? (
                  <div className="text-center">Loading...</div>
                ) : (
                  <Swiper
                    spaceBetween={30}
                    className="w-100"
                    navigation={{
                      prevEl: ".pbp1",
                      nextEl: ".pbn1",
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                      500: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {products.map((elm, i) => (
                      <SwiperSlide
                        key={i}
                        style={{
                          width: "100vw ! important",
                        }}
                      >
                        <Link
                          href={`/product/${elm.slug}`}
                          className="text-decoration-none"
                        >
                          <div className="tourCard -type-1 d-block bg-white">
                            <div className="tourCard__header">
                              <div className="tourCard__image ratio ratio-28:20">
                                <img
                                  width={421}
                                  height={301}
                                  src={elm.images[0]?.url}
                                  alt={elm.name}
                                  className="img-ratio rounded-12"
                                />
                              </div>
                            </div>

                            <div className="tourCard__content pt-10">
                              <div className="tourCard__location d-flex items-center text-13 text-light-2">
                                <SlEnergy />
                                {elm.categoryName[Math.floor(Math.random() * elm.categoryName.length)] || "General"}
                              </div>

                              <h3 className="tourCard__title text-16 fw-500 mt-5">
                                <span>{elm.name}</span>
                              </h3>

                              <div className="d-flex justify-between items-center border-1-top text-dark-1 pt-10 mt-10">
                                <div className="d-flex items-center">
                                  <button className="send-enquiry-btn">
                                    <div
                                      href={`/product/${elm._id}`}
                                      className="no-link-style"
                                    >
                                      Send Enquiry
                                    </div>
                                  </button>

                                </div>

                                <div className="d-flex items-center text-lg">
                                  <span className="text-18 fw-600">₹{elm.price}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>

            <div className="navAbsolute">
              <button className="navAbsolute__button bg-white js-slider1-prev pbp1">
                <i className="icon-arrow-left text-14"></i>
              </button>

              <button className="navAbsolute__button bg-white js-slider1-next pbn1">
                <i className="icon-arrow-right text-14"></i>
              </button>
            </div>
          </div>
        </div>
        <style jsx>{`
        .price-tag{
          display: flex;
          justify-content: end;
        }
        .tourCard{
          border: 2px solid #e6e6e6;
          padding: 1.5rem;
          border-radius: 18px;
        }
        .tourCard__location{
          column-gap: 2px;       
        }

      .send-enquiry-btn {
        background: linear-gradient(to right, #e6004c 0%, #ff4d00 50%, #ff7b00 100%);
        font-size: 14px;
        border: none;
        color: white;
        border-radius: 25px;
        padding: 7px 14px;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .send-enquiry-btn:hover {
        background: linear-gradient(to right, #ff7b00, #e6004c)
      }
        
      `}</style>
      </section>
    </>
  );
}