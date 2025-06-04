'use client';
import { getAllCategories } from "@/service/product_service";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function TrendingDestinations3() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // initially show 8

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllCategories();
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
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="row y-gap-15 justify-between items-end">
          <div className="col-auto">
            <h2 className="text-30 md:text-24">Trending Categories</h2>
          </div>
        </div>

        <div className="row y-gap-30 pt-40 sm:pt-20">
          {products.slice(0, visibleCount).map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <Link href={`/category/${elm.name}`} className="featureCard -type-6 -hover-image-scale">
                <div className="featureCard__image -hover-image-scale__image rounded-12">
                  <Image width={450} height={270} src={elm.image?.url} alt="image" />
                </div>
                <div className="featureCard__content">
                  <h3 className="text-16 fw-500 text-white">{elm.name}</h3>
                  <p className="text-white lh-16">{elm.products.length}+ products</p>
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
        .buttonShowMore {
          position: relative;
          display: inline-block;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 5px;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;

          border: 2px solid linear-gradient(to right, #e6004c, #ff7b00);
          border-image: linear-gradient(to right, #e6004c, #ff7b00) 1;

          color: transparent;
          background-image: linear-gradient(to right, #e6004c, #ff7b00);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .buttonShowMore:hover {
          background: linear-gradient(to right, #e6004c, #ff7b00);
          color: white;
          -webkit-text-fill-color: white;
          background-clip: border-box;
        }
 `}
      </style>
    </section>
  );
}
