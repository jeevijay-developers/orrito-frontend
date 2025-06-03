'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { getAllProducts } from '@/service/product_service';

export default function ProductSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllProducts();
        console.log('Fetch featured products data: ', res);

        if (!res || !res.length) {
          console.error("No data found for products");
          return;
        }

        const visibleProducts = res.filter(product => product.view === true);
        setProducts(visibleProducts);
        console.log("Visible products data: ", visibleProducts);
      } catch (error) { 
        console.error('Error fetching products: ', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center my-5">
            <div className="col-auto">
              <h2 className="h3 mb-0">
                Featured Products
              </h2>
            </div>
          </div>

          <div className="position-relative">
            {products.length > 0 ? (
              <>
                <div className="product-slider">
                  <Swiper
                    spaceBetween={30}
                    className="w-100 overflow-visible"
                    navigation={{
                      prevEl: ".js-slider1-prev",
                      nextEl: ".js-slider1-next",
                    }}
                    modules={[Navigation, Pagination]}
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
                    {products.map((product, i) => (
                      <SwiperSlide key={i}>
                        <Link
                          href={`/product/${product.slug}`}
                          className="text-decoration-none"
                        >
                          <div className="card h-100 shadow-sm product-card">
                            <div className="card-img-top position-relative overflow-hidden">
                              <Image
                                width={300}
                                height={250}
                                src={product.images[0]?.url}
                                alt={product.name}
                                className="w-100 h-100 object-fit-cover"
                              />
                            </div>

                            <div className="card-body d-flex flex-column">
                              <div className="category-badge">
                                <i className="bi bi-tag me-1"></i>
                                {product.categoryName}
                              </div>

                              <h5 className="card-title">
                                {product.name}
                              </h5>

                              <p className="card-text flex-grow-1">
                                {product.productOverview}
                              </p>

                              <div className="d-flex justify-content-between align-items-center mt-auto">
                                <div>
                                  <small className="text-muted">Price</small>
                                  <div className="price-tag">
                                    ₹{product.price}
                                  </div>
                                </div>
                                <button className="btn btn-outline-primary btn-sm view-details-btn">
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>

                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-center gap-2 mt-4">
                  <button className="btn btn-light js-slider1-prev">
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <button className="btn btn-light js-slider1-next">
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-5">
                <div className="mb-3">
                  <i className="bi bi-box-seam text-muted" style={{ fontSize: '3rem' }}></i>
                </div>
                <h4 className="text-muted mb-2">No Products Available</h4>
                <p className="text-muted">
                  There are currently no featured products to display.
                  <br />
                  Please check back later for new arrivals.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
  .product-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #dee2e6; 
    border-radius: 1rem;
    overflow: hidden;
    background-color: #ffffff;
  }

  // .product-card:hover {
  //   transform: translateY(-6px);
  //   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12) !important;
  // }

  .product-card:hover .card-img-top {
  transition: transform 0.5s ease, box-shadow 0.5s linear;
    transform: scale(1.08);
  }

  .product-card .card-img-top {
    height: 220px;
    border-bottom: 1px solid #eee;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  .object-fit-cover {
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 0.75rem;
  }

  .product-card .card-body {
    padding: 1rem;
  }

  .product-card .card-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .product-card .card-text {
    font-size: 0.875rem;
    color: #6c757d;
    min-height: 48px;
  }

  .product-card .category-badge {
    font-size: 0.75rem;
    font-weight: 500;
    color: #6c757d;
    margin-bottom: 0.25rem;
  }

  .product-card .price-tag {
    font-size: 1.25rem;
    font-weight: 700;
    color: #007bff;
  }

  .product-card .view-details-btn {
    font-size: 0.875rem;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
  }
`}</style>
    </>
  );
}