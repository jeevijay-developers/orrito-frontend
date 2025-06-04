'use client';
// import { destinationsFour } from "@/data/destinations";
import { getAllCategories } from "@/service/product_service";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function DestinationsThree() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // initially show 6

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllCategories();
        // console.log('Fetch featured products data: ', res);

        if (!res || !res.length) {
          console.error("No data found for products");
          return;
        }

        setProducts(res);
      } catch (error) { 
        console.error('Error fetching products: ', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  // Handler for See More button
  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, products.length));
  };

  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              Popular categories to buy
            </h2>
          </div>

          {/* <div className="col-auto">
            <Link
              href={"/tour-list-1"}
              data-aos="fade-right"
              data-aos-delay=""
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div> */}
        </div>

        <div className="row y-gap-30 pt-40 sm:pt-20">
          {products.slice(0, visibleCount).map((elm, i) => (
            <div key={i} className="col-lg-2 col-md-3 col-6">
              <Link
                href={`/category/${elm.name}`}
                className="featureCard -type-2 -hover-image-scale"
              >
                <div className="featureCard__image ratio ratio-19:22 -hover-image-scale__image rounded-12">
                  <Image
                    width={284}
                    height={327}
                    src={elm.image?.url || "/img/tourCards/3/1.png"}
                    alt={elm.name}
                    className="img-ratio rounded-12"
                  />
                </div>

                <div className="featureCard__content text-center">
                  <h4 className="text-white text-18">{elm.name}</h4>
                  <div className="text-14 text-white">{elm.products.length}+ Products</div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {visibleCount < products.length && (
          <div className="text-center btn-div mt-20">
            <button
              onClick={handleSeeMore}
              className="buttonShowMore d-inline-flex items-center"
            >
              <span>See More</span>
            </button>
          </div>
        )}
      </div>
      <style>
        {`
        .buttonShowMore{
          background-color: transparent;
          border: 1px solid #FF7B00;
          border-radius: 5px;
          color: #007bff;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

          .buttonShowMore:hover {
            background-color: #005CBF;
            color: white;
          }
        `}
      </style>
    </section>
  );
}
