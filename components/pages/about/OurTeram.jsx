
'use client';
import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Varun Bansal",
    position: "Managing Partner",
    credentials:
      "B.Tech (Electronics) | MBB Master Black Belt | Lean Six Sigma | PMP | ITIL",
    description:
      "Formerly with TCS & Renoir Consulting, Varun has extensive management consulting experience across Southeast Asia, the Middle East, and the Indian subcontinent. He specializes in operations, supply chain, HR, sales, ERP, and sustainable technologies across industries like manufacturing, construction, plasma, telecom, and logistics.",
    image: "/path/to/varun-image.jpg",
  },
  {
    id: 2,
    name: "Pramod Bansal",
    position: "Partner",
    credentials: "MA (Stolldogy), Burkatsilah University, Bengal",
    description:
      "Expert in operations, PR, and administration with extensive experience managing social organizations. Skilled in sustaining culture and systems aligned with the organization’s vision and mission.",
    image: "/path/to/pramod-image.jpg",
  },
  {
    id: 3,
    name: "Leena Bansal",
    position: "Head of Marketing",
    credentials:
      "BMM, Wilson College, Mumbai | MBA (Finance Marketing), DAVV University, Indore",
    description:
      "Specialist in marketing, advertising, and HR. Previously worked at Purple Foods, handling brands like Bigel and Top N Town.",
    image: "/path/to/leena-image.jpg",
  },
  {
    id: 4,
    name: "Dr. B. P. Bansal",
    position: "Chairman",
    credentials: "MBBS, MS (Ophthalmology)",
    subCredentials: "Former Director, UP Health Govt.",
    description:
      "Expert in large-scale operations management with extensive experience in healthcare administration and strategic leadership.",
    image: "/path/to/dr-bansal-image.jpg",
  },
  {
    id: 5,
    name: "Arun Bhatia",
    position: "Advisor (Technology)",
    credentials: "EMIT Delhi (Bachelor in Electronics)",
    description:
      "Renowned expert in LED & electronics for business development, strategy, product design, and technology. Former Chairman, Calconn Electronics | Former President, Delta Electronics, NTL Lemnis, InstaPower | Former CTO, Halonix Industries.",
    image: "/path/to/arun-image.jpg",
  },
  {
    id: 6,
    name: "Dr. V. Baskaran",
    position: "Advisor (Organization Building & Behavior)",
    credentials: "40+ years of experience",
    description:
      "Expert in ports, shipping, project management, and organizational behavior. Served 17 years as Director at Chennai Port and played a key role in establishing the National Institute of Port Management. Extensive experience in teaching and training within the maritime and shipping industry.",
    image: "/path/to/baskaran-image.jpg",
  },
];

export default function OurTeam() {
  return (
    <section className="pt-5 pb-lg-5 my-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mt-4">Leadership Team</h2>
          <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: '#dc3545' }}></div>
          <p className="lead text-muted my-4 mx-auto" style={{ maxWidth: '600px' }}>
            Meet our experienced leaders who drive innovation and excellence in consulting services
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="row justify-content-between g-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="card-width col-lg-6 col-md-8">
              <div className="leader-card h-100">
                <div className="row g-0 h-100">
                  {/* Image Section */}
                  <div className="col-md-4 d-flex align-items-center justify-content-center p-4">
                    <div className="profile-image-container">
                      <div className="profile-image-wrapper">
                        <div 
                          className="profile-image"
                          style={{ 
                            backgroundImage: `url(${member.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        >
                          {/* Placeholder for missing images */}
                          <div className="image-placeholder">
                            <i className="fas fa-user" style={{ fontSize: '2rem', color: '#6c757d' }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="col-md-8">
                    <div className="card-body h-100 d-flex flex-column p-4">
                      {/* Name and Position */}
                      <div className="mb-3">
                        <h4 className="fw-bold text-dark mb-1" style={{ fontSize: '1.4rem' }}>
                          {member.name}
                        </h4>
                        <p className="position-title mb-0">
                          {member.position}
                        </p>
                      </div>

                      {/* Credentials */}
                      <div className="credentials-section mb-3">
                        <div className="credential-badge">
                          {member.credentials}
                        </div>
                        {member.subCredentials && (
                          <div className="credential-badge mt-2">
                            {member.subCredentials}
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <div className="flex-grow-1">
                        <p className="description-text mb-0">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .leader-card {
          background: white;
          border-radius: 12px;
          border: 1px solid #e9ecef;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          overflow: hidden;
          height: 21rem;
        }

        .leader-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          border-color: #dc3545;
        }

        .profile-image-container {
          position: relative;
          width: 120px;
          height: 120px;
        }
        .card-width{
            width: 50%;
        }
        .profile-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(45deg, #dc3545, #ff6b35);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #f8f9fa;
          position: relative;
          overflow: hidden;
          border: 3px solid white;
        }

        .image-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .position-title {
          color: #dc3545;
          font-weight: 600;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .credentials-section {
          border-left: 3px solid #dc3545;
          padding-left: 12px;
        }

        .credential-badge {
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          display: inline-block;
          line-height: 1.2;
          box-shadow: 0 2px 4px rgba(220, 53, 69, 0.2);
        }

        .description-text {
          color: #6c757d;
          font-size: 0.95rem;
          line-height: 1.6;
          text-align: justify;
        }

        @media (max-width: 768px) {
          .leader-card .row {
            text-align: center;
          }
          
          .profile-image-container {
            margin: 0 auto;
          }
          
          .credentials-section {
            border-left: none;
            border-top: 3px solid #dc3545;
            padding-left: 0;
            padding-top: 12px;
            margin-top: 12px;
          }
          
          .description-text {
            text-align: center;
          }
        }

        @media (max-width: 576px) {
          .leader-card {
            margin: 0 15px;
          }
          
          .profile-image-container {
            width: 100px;
            height: 100px;
          }
        }

        /* Mobile responsive styles for 425px screens */
        @media (max-width: 450px) {
          .card-width {
            width: 100% !important;
            max-width: 390px;
            margin: 0 auto 1.5rem auto;
          }
          
          .leader-card {
            height: auto !important;
            min-height: auto;
            margin: 0 10px;
          }
          
          .leader-card .row {
            flex-direction: column;
            height: auto !important;
          }
          
          .col-md-4, .col-md-8 {
            flex: none;
            width: 100%;
            max-width: 100%;
          }
          
          .col-md-4 {
            padding: 1.5rem 1rem 1rem 1rem;
          }
          
          .col-md-8 {
            height: auto !important;
          }
          
          .col-md-8 .card-body {
            padding: 0 1.5rem 1.5rem 1.5rem;
            height: auto !important;
            display: block !important;
          }
          
          .profile-image-container {
            width: 90px;
            height: 90px;
            margin: 0 auto;
          }
          
          .mb-3 {
            margin-bottom: 1rem !important;
          }
          
          .mb-3 h4 {
            font-size: 1.2rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .position-title {
            font-size: 0.95rem;
            margin-bottom: 0 !important;
          }
          
          .credential-badge {
            font-size: 0.75rem;
            padding: 5px 10px;
            margin-bottom: 0.5rem;
            display: block;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .credentials-section {
            text-align: center;
            border: none;
            padding: 0;
            margin-bottom: 1rem !important;
          }
          
          .flex-grow-1 {
            flex-grow: 0 !important;
          }
          
          .description-text {
            font-size: 0.85rem;
            line-height: 1.5;
            text-align: center !important;
            margin-bottom: 0 !important;
          }
          
          .row.justify-content-between {
            justify-content: center !important;
          }
          
          /* Container padding adjustment for mobile */
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
          
          /* Section header mobile adjustments */
          .display-5 {
            font-size: 1.8rem !important;
          }
          
          .lead {
            font-size: 1rem !important;
            padding: 0 10px;
          }
        }
      `}</style>
    </section>
  );
}