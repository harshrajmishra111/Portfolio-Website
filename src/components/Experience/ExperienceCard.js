import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";

function ExperienceCard({ 
  role, 
  company, 
  logo, 
  points, 
  images, 
  description, 
  projects, 
  modalImages, 
  companyWebsite, 
  profileLinks,
  duration // NEW: Add duration prop
}) {
  const [show, setShow] = useState(false);

  const handleBarClick = () => setShow(true);

  return (
    <>
      <Card className="experience-bar text-white" onClick={handleBarClick}>
        <div className="experience-bar-left">
          <img 
            src={logo} 
            alt={`${company} logo`} 
            className="experience-bar-logo" 
            onError={(e) => { e.target.src = "https://via.placeholder.com/40?text=?"; }} 
          />
          <div>
            <h5 className="text-white">{company}</h5>
            <h6 className="purple fw-bold">{role}</h6>
            {/* Show duration if provided */}
            {duration && (
              <p className="experience-duration">{duration}</p>
            )}
            {/* Show ALL points dynamically */}
            <ul className="small text-gray-300 ps-3 mb-0">
              {points?.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="experience-bar-right">
          {images?.map((img, idx) => (
            <img 
              key={idx} 
              src={img} 
              alt={`Cert ${idx + 1}`} 
              className="experience-bar-thumb" 
              onError={(e) => { e.target.style.display = "none"; }} 
            />
          ))}
        </div>
      </Card>

      <ExperienceModal
        show={show}
        onHide={() => setShow(false)}
        role={role}
        company={company}
        description={description}
        projects={projects}
        images={modalImages}
        companyWebsite={companyWebsite}
        profileLinks={profileLinks}
        duration={duration}
      />
    </>
  );
}

export default ExperienceCard;