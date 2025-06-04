'use client';
import { featuresThree } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features7() {
  const topCards = featuresThree.filter(item => item.position === 'top');
  const bottomCards = featuresThree.filter(item => item.position === 'bottom');

  const renderIcon = (iconClass) => {
    const iconProps = {
      width: "32",
      height: "32",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      className: "text-secondary"
    };

    switch (iconClass) {
      case 'gear':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'building':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'handshake':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
          </svg>
        );
      case 'gears':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
          </svg>
        );
      case 'network':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
        );
      case 'location':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-light ">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h1 text-danger fw-bold">Journey & Milestones</h2>
            {/* <div className="bg-warning text-white px-3 py-2 rounded fw-bold" style={{
              background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
              borderRadius: '1rem 0 1rem 0'
            }}>
              BRILLO
            </div> */}
          </div>
        </div>
        {/* Horizontal Timeline Line */}
        <div
          className="position-absolute w-100 mb-4"
          style={{
            top: '50%',
            left: '0',
            height: '4px',
            background: 'linear-gradient(to right, #ff6b35, #dc3545, #dc2626)',
            transform: 'translateY(-50%)',
            zIndex: '0'
          }}
        ></div>

        {/* Timeline Container */}
        <div className="position-relative" style={{ minHeight: '300px' }}>
          {/* Top Cards Row */}
          <div className="row ">
            {topCards.map((elm, i) => (
              <div key={elm.id} className="col-md-4 mb-4">
                <div className="position-relative">
                  {/* Vertical Line */}
                  <div
                    className="position-absolute bg-primary"
                    style={{
                      left: '50%',
                      top: '80%',
                      width: '3px',
                      height: '10px',
                      transform: 'translateX(-50%)',
                      zIndex: '1'
                    }}
                  ></div>

                  {/* Card */}
                  <div className="card shadow-sm border-0 quater-batch">
                    <div className="card-body text-center p-4">
                      {/* Icon */}
                      <div
                        className="mx-auto mb-3 bg-light rounded-circle d-flex align-items-center justify-content-center border border-secondary"
                        style={{
                          width: '4rem',
                          height: '4rem',
                          borderStyle: 'none !important'
                        }}
                      >
                        {renderIcon(elm.iconClass)}
                      </div>
                      <h5 className="fw-bold text-dark mb-2">{elm.title}</h5>
                      <p className="small text-muted mb-0">{elm.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quarter Badges Row */}
          <div className="row ">
            {topCards.map((elm, i) => (
              <div key={`quarter-top-${elm.id}`} className="col-md-4 text-center rounded-pill">
                <div
                  className="text-white px-3 py-2 rounded-pill fw-bold small d-inline-block"
                  style={{ background: 'linear-gradient(45deg, #ff6b35, #dc3545)' }}
                >
                  {elm.quarter}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Nodes */}
          <div className="row ">
            {featuresThree.filter((_, i) => i % 2 === 0).map((elm, i) => (
              <div key={`node-${elm.id}`} className="col-md-4 text-center">
                <div
                  className="bg-white border border-4 border-danger rounded-circle d-inline-block"
                  style={{ width: '1rem', height: '1rem', zIndex: '2', position: 'relative' }}
                ></div>
              </div>
            ))}
          </div>



          {/* Bottom Cards Row */}
          <div className="row">
            {bottomCards.map((elm, i) => (
              <div key={elm.id} className="col-md-4 mb-4">
                <div className="position-relative">
                  {/* Vertical Line */}
                  <div
                    className="position-absolute bg-primary"
                    style={{
                      left: '50%',
                      bottom: '100%',
                      width: '3px',
                      height: '10px',
                      transform: 'translateX(-50%)',
                      zIndex: '1'
                    }}
                  ></div>

                  {/* Card */}
                  <div className="card shadow-sm border-0 quater-batch">
                    <div className="card-body text-center p-4">
                      {/* Icon */}
                      <div
                        className="mx-auto mb-3 bg-light rounded-circle d-flex align-items-center justify-content-center border border-2 border-secondary"
                        style={{
                          width: '4rem',
                          height: '4rem',
                        }}
                      >
                        {renderIcon(elm.iconClass)}
                      </div>
                      <h5 className="fw-bold text-dark mb-2">{elm.title}</h5>
                      <p className="small text-muted mb-0">{elm.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Quarter Badges Row Bottom */}
            <div className="row">
              {bottomCards.map((elm, i) => (
                <div key={`quarter-bottom-${elm.id}`} className="col-md-4 text-center">
                  <div
                    className="text-white px-3 py-2 rounded-pill fw-bold small d-inline-block"
                    style={{ background: 'linear-gradient(45deg, #ff6b35, #dc3545)' }}
                  >
                    {elm.quarter}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          transition: box-shadow 0.3s ease;
        }
        
        .border-dotted {
          border-style: dotted !important;
        }
        .quater-batch{
          border: 1px solid #919191;
          border-radius: 16px;
          min-height: 230px;
        }
      `}</style>
    </div>
  );
}