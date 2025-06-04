'use client';
import { getProductsByCategory } from '@/service/product_service'
import React, { useEffect, useState } from 'react'

const AllProductsByCategory = ({params}) => {
  const { name } = params;
  const NAME = name.replaceAll("%20" , " ");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6); // initially show 6 products

  const handleSeeMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, products.length));
  };

  useEffect(() => {
    const getProds = async () => {
      try {
        setLoading(true);
        const res = await getProductsByCategory(NAME);
        setProducts(res.products || []);
        // console.log('Category products: ', res.products);
      } catch (error) {
        console.error('Error fetching category products: ', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    getProds();
  }, [NAME])

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }

  if (!products || products.length === 0) {
    return (
      <div className="container mt-5">
        <div className="alert alert-info text-center">
          No products found in this category.
        </div>
      </div>
    )
  }

  return (
    <div className="container">      
      <h1 className="mb-4 text-capitalize">{NAME}</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
        {products.slice(0, visibleCount).map((product) => (
          <div key={product._id} className="col">
            <div className="tourCard -type-1 d-block bg-white">
              <div className="tourCard__header">
                <div className="tourCard__image ratio ratio-4x3">
                  <img
                    src={product.images[0]?.url}
                    alt={product.name}
                    className="img-ratio rounded-12"
                  />
                </div>
              </div>

              <div className="tourCard__content pt-10">
                <div className="tourCard__location d-flex items-center text-13 text-light-2">
                  <i className="icon-tag me-1"></i>
                  {product.categoryName || NAME}
                </div>

                <h3 className="tourCard__title text-16 fw-500 mt-5">
                  <span>{product.name}</span>
                </h3>

                <div className="tourCard__description text-14 text-light-2 mt-5">
                  {product.productOverview.replace(/<[^>]+>/g, '').substring(0, 80)}...
                </div>

                <div className="d-flex justify-content-between align-items-center border-1-top text-dark-1 pt-10 mt-10">
                  <div className="d-flex items-center">
                    <button className="send-enquiry-btn">
                      Send Enquiry
                    </button>
                  </div>

                  <div className="d-flex items-center text-lg">
                    <span className="text-18 fw-600">₹{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="text-center mt-4 mb-5">
          <button
            onClick={handleSeeMore}
            className="buttonShowMore d-inline-flex items-center"
          >
            <span>See More</span>
          </button>
        </div>
      )}

      <style jsx>{`
        .container{
          margin-top: 8rem;
          margin-bottom: 4rem;
        }

        .tourCard {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        // .tourCard:hover {
        //   transform: translateY(-2px);
        //   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        // }

        .tourCard__header {
          position: relative;
        }

        .tourCard__image {
          overflow: hidden;
        }

        .img-ratio {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .tourCard:hover .img-ratio {
          transform: scale(1.05);
        }

        .rounded-12 {
          border-radius: 0;
        }

        .ratio-4x3 {
          aspect-ratio: 4/3;
        }

        .tourCard__content {
          padding: 15px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .pt-10 {
          padding-top: 10px;
        }

        .mt-5 {
          margin-top: 5px;
        }

        .mt-10 {
          margin-top: 10px;
        }

        .tourCard__location {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #6c757d;
          font-size: 13px;
        }

        .tourCard__title {
          font-size: 16px;
          font-weight: 500;
          color: #212529;
          margin: 0;
          line-height: 1.4;
        }

        .tourCard__description {
          font-size: 14px;
          color: #6c757d;
          line-height: 1.4;
          flex: 1;
        }

        .text-13 {
          font-size: 13px;
        }

        .text-14 {
          font-size: 14px;
        }

        .text-16 {
          font-size: 16px;
        }

        .text-18 {
          font-size: 18px;
        }

        .text-light-2 {
          color: #6c757d;
        }

        .text-dark-1 {
          color: #212529;
        }

        .fw-500 {
          font-weight: 500;
        }

        .fw-600 {
          font-weight: 600;
        }

        .border-1-top {
          border-top: 1px solid #e9ecef;
          margin-top: auto;
        }

        .items-center {
          align-items: center;
        }

        .send-enquiry-btn {
          background: linear-gradient(to right, #e6004c 0%, #ff4d00 50%, #ff7b00 100%);
          font-size: 14px;
          border: none;
          color: white;
          border-radius: 25px;
          padding: 7px 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .send-enquiry-btn:hover {
          background: linear-gradient(to right, #ff7b00, #e6004c);
          transform: translateY(-1px);
        }

        .buttonShowMore {
          background-color: transparent;
          border: 1px solid #007bff;
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

        .icon-tag::before {
          content: "🏷️";
          font-size: 12px;
        }

        @media (max-width: 768px) {
          .tourCard__content {
            padding: 12px;
          }

          .img-ratio {
            height: 180px;
          }

          .tourCard__title {
            font-size: 15px;
          }

          .send-enquiry-btn {
            font-size: 13px;
            padding: 6px 12px;
          }
        }
      `}</style>
    </div>
  )
}

export default AllProductsByCategory