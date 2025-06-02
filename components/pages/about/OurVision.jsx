"use client";
import React from "react";
import { Rocket, Target, Diamond } from "lucide-react";
import Image from "next/image";

const OurVision = () => {
  return (
    <div className="py-5 my-5">
      {" "}

      <div className="text-center  ">
        <h2 className="display-4 fw-bold">OUR GUIDING PRINCIPLES</h2>{" "}
      </div>
      <div className="container">
        <div className="row g-4">
          {/* Vision Section */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm bg-green rounded-4">
              <div className="card-body p-4 text-center">
                <div className="mb-4">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light">
                    <Image
                      src="/img/icons/1/vision.png"
                      alt="Vision Icon"
                      width={85}
                      height={85}
                      className="text-warning"
                    />
                  </div>
                </div>
                <h3 className="card-title mb-4">
                  <span className="text-muted">OUR </span>
                  <span className="text-danger fw-bold">VISION</span>
                </h3>
                <p className="card-text text-muted lh-lg">
                  To be a global leader with technology-driven, sustainable, and
                  cost-effective lighting solutions and to be recognized for
                  customer focus, leadership, operational excellence, and
                  reliability.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4 text-center">
                <div className="mb-4">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light">
                    <Image
                      src="/img/icons/1/mission.png"
                      alt="mission Icon"
                      width={85}
                      height={85}
                      className="text-warning"
                    />
                  </div>
                </div>
                <h3 className="card-title mb-4">
                  <span className="text-muted">OUR </span>
                  <span className="text-danger fw-bold">MISSION</span>
                </h3>
                <p className="card-text text-muted lh-lg">
                  To become India's most trusted technology-driven brand in
                  application electronics by enhancing last-mile supply chain
                  efficiency and delivering exceptional after-sales service.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="col-lg-4 col-md-12 ">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="mb-4 text-center">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light">
                    <Image
                      src="/img/icons/1/value.png"
                      alt="value Icon"
                      width={85}
                      height={85}
                      className="text-warning"
                    />
                  </div>
                </div>
                <h3 className="card-title mb-4 text-center">
                  <span className="text-muted">OUR </span>
                  <span className="text-danger fw-bold">CORE VALUES</span>
                </h3>
                <div className="text-start">
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">
                      <strong className="text-dark">Innovation:</strong>{" "}
                      Excellence through technology.
                    </li>
                    <li className="mb-2">
                      <strong className="text-dark">
                        World-Class Standards:
                      </strong>{" "}
                      Embracing cutting-edge practices.
                    </li>
                    <li className="mb-2">
                      <strong className="text-dark">Respect:</strong> Valuing
                      people, ideas, systems, and time.
                    </li>
                    <li className="mb-2">
                      <strong className="text-dark">Trust:</strong> Commitment
                      to transparency and reliability.
                    </li>
                    <li className="mb-2">
                      <strong className="text-dark">First-Time-Right:</strong>{" "}
                      Striving for perfection.
                    </li>
                    <li className="mb-0">
                      <strong className="text-dark">Leadership:</strong> Driving
                      business and social excellence.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
