'use client';

import { competitiveAdvantages } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features6() {

  return (
    <section className="relative py-120">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-12">
            <div className="text-center mb-80">
              <h2
                data-aos="fade-up"
                className="text-40 md:text-30 fw-700 mb-20"
              >
                Our Competitive Advantages
              </h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Delivering excellence through integrated solutions and innovation
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30">
          {competitiveAdvantages.map((advantage, i) => (
            <div key={advantage.id} className="col-xl-6 col-lg-6 col-md-6">
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="advantage-card h-full"
              >
                <div className="advantage-header">
                  <div className="advantage-icon">
                    <Image
                      width="50"
                      height="50"
                      src={advantage.iconSrc}
                      alt="icon"
                    />
                  </div>
                  <h3 className="advantage-title">
                    {advantage.title}
                  </h3>
                </div>
                <div className="advantage-content">
                  <ul className="advantage-list">
                    {advantage.items.map((item, index) => (
                      <li key={index} className="advantage-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .advantage-card {
            background: white;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border: 1px solid #f0f0f0;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
          }

          .advantage-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            border-color: #ff6b35;
          }

          .advantage-header {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            gap: 16px;
          }

          .advantage-icon {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .advantage-icon img {
            filter: brightness(0) invert(1);
          }

          .advantage-title {
            color: #2c3e50;
            font-size: 22px;
            font-weight: 700;
            margin: 0;
            line-height: 1.3;
          }

          .advantage-content {
            flex: 1;
          }

          .advantage-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .advantage-item {
            color: #666;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 12px;
            padding-left: 20px;
            position: relative;
          }

          .advantage-item::before {
            content: "•";
            color: #ff6b35;
            font-weight: bold;
            font-size: 18px;
            position: absolute;
            left: 0;
            top: 0;
          }

          .advantage-item:last-child {
            margin-bottom: 0;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .advantage-card {
              padding: 30px;
            }

            .advantage-header {
              flex-direction: column;
              text-align: center;
              gap: 12px;
            }

            .advantage-icon {
              width: 60px;
              height: 60px;
            }

            .advantage-title {
              font-size: 20px;
            }

            .advantage-item {
              font-size: 15px;
            }
          }

          @media (max-width: 576px) {
            .advantage-card {
              padding: 24px;
            }

            .advantage-title {
              font-size: 18px;
            }

            .advantage-item {
              font-size: 14px;
            }
          }
        `
      }} />
    </section>
  );
}