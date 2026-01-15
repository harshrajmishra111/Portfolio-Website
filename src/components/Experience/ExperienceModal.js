import React, { useState } from "react";
import { Modal, CloseButton, Button, Row, Col } from "react-bootstrap";

function ExperienceModal({
  show,
  onHide,
  role,
  company,
  description,
  projects,
  images,
  companyWebsite,
  profileLinks,
  duration,
}) {
  const [lightboxShow, setLightboxShow] = useState(false);
  const [zoomedImage, setZoomedImage] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = (imgSrc) => {
    setZoomedImage(imgSrc);
    setLightboxShow(true);
  };

  const closeLightbox = () => setLightboxShow(false);

  const handleDownload = () => {
    if (zoomedImage) {
      const link = document.createElement("a");
      link.href = zoomedImage;
      link.download = `${company}-${role}-certificate.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // ────────────────────────────────────────────────
  // Formatter with good spacing + bold + heading support
  // ────────────────────────────────────────────────
  const formatDescription = (text) => {
    if (!text) return null;

    // Split into paragraphs (2 or more newlines)
    const paragraphs = text
      .split(/\n{2,}/)
      .map(p => p.trim())
      .filter(p => p.length > 0);

    return paragraphs.map((para, idx) => {
      // Detect standalone bold heading: **Some Heading**
      const headingMatch = para.match(/^\*\*(.+)\*\*$/);
      if (headingMatch) {
        const heading = headingMatch[1].trim();
        return (
          <h6
            key={idx}
            className="purple fw-bold mb-4 mt-5"
            style={{
              fontSize: "1.12rem",
              borderBottom: "1px solid rgba(199, 112, 240, 0.25)",
              paddingBottom: "0.5rem",
            }}
          >
            {heading}
          </h6>
        );
      }

      // Normal paragraph with possible inline **bold**
      const parts = para.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const boldText = part.slice(2, -2).trim();
          return (
            <strong key={i} className="fw-bold text-white">
              {boldText}
            </strong>
          );
        }
        return part;
      });

      return (
        <p
          key={idx}
          className="text-gray-300 mb-5"
          style={{
            fontSize: "0.97rem",
            lineHeight: "1.85",
            color: "#d0d0d0",
            whiteSpace: "pre-wrap",           // helps preserve single line breaks
            wordWrap: "break-word",
          }}
        >
          {parts}
        </p>
      );
    });
  };

  const shouldShowReadMore = description && description.length > 600;

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        centered
        size="lg"
        className="experience-modal"
        contentClassName="border-0"
      >
        <Modal.Header className="experience-modal-header border-0">
          <Modal.Title className="text-white w-100">
            <h3 className="purple mb-1">{role}</h3>
            <h5 className="text-gray-300" style={{ fontSize: "1.1rem" }}>
              {company}
            </h5>
            {duration && (
              <p
                className="modal-duration"
                style={{
                  fontSize: "0.9rem",
                  color: "#9a9a9a",
                  fontStyle: "italic",
                  marginTop: "0.5rem",
                }}
              >
                {duration}
              </p>
            )}
          </Modal.Title>
          <CloseButton className="btn-close-white" onClick={onHide} />
        </Modal.Header>

        <Modal.Body className="experience-modal-body">
          {/* Description Section */}
          {description && (
            <div className="modal-description-section">
              <h4 className="purple mb-3">About the Role</h4>

              <div style={{ position: "relative" }}>
                <div
                  className="description-content"
                  style={{
                    maxHeight: isExpanded ? "none" : "300px",
                    overflow: "hidden",
                    transition: "max-height 0.5s ease-in-out",
                  }}
                >
                  {formatDescription(description)}
                </div>

                {shouldShowReadMore && !isExpanded && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "120px",
                      background:
                        "linear-gradient(to bottom, transparent 0%, rgba(17,16,16,0.3) 30%, rgba(17,16,16,0.7) 60%, rgba(17,16,16,0.95) 85%, rgba(17,16,16,1) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </div>

              {shouldShowReadMore && (
                <div
                  style={{
                    marginTop: "2rem",
                    paddingTop: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background:
                        "linear-gradient(to right, transparent, rgba(199,112,240,0.4), transparent)",
                    }}
                  />

                  <Button
                    onClick={() => setIsExpanded(!isExpanded)}
                    variant="link"
                    style={{
                      color: "#c770f0",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "0.9rem",
                      padding: "0.5rem 1.5rem",
                      border: "1px solid rgba(199,112,240,0.3)",
                      borderRadius: "20px",
                      transition: "all 0.3s ease",
                      backgroundColor: "transparent",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(199,112,240,0.1)";
                      e.target.style.borderColor = "rgba(199,112,240,0.6)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.borderColor = "rgba(199,112,240,0.3)";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    {isExpanded ? "↑ Show Less" : "↓ Show More"}
                  </Button>

                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background:
                        "linear-gradient(to right, transparent, rgba(199,112,240,0.4), transparent)",
                    }}
                  />
                </div>
              )}
            </div>
          )}

          {/* Key Projects */}
          {projects && projects.length > 0 && (
            <div className="modal-projects-section">
              <h4 className="purple mb-3">Key Projects</h4>
              <div className="projects-list">
                {projects.map((project, idx) => (
                  <div key={idx} className="project-item-modal">
                    <h5 className="text-white mb-2">
                      <span className="purple">→</span> {project.name}
                    </h5>
                    <p className="text-gray-300 mb-0">{project.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certificates & Documents */}
          {images && images.length > 0 && (
            <div className="modal-screenshots-section">
              <h4 className="purple mb-3">Certificates & Documents</h4>
              <Row className="g-3">
                {images.map((img, idx) => (
                  <Col
                    key={idx}
                    xs={12}
                    sm={6}
                    md={images.length === 1 ? 12 : images.length === 2 ? 6 : 4}
                    lg={images.length === 1 ? 12 : images.length === 2 ? 6 : 4}
                  >
                    <div
                      className="screenshot-thumbnail"
                      onClick={() => handleImageClick(img)}
                    >
                      <img
                        src={img}
                        alt={`Certificate ${idx + 1}`}
                        className="w-100 h-100"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/200x250?text=Image+Not+Found";
                        }}
                      />
                      <div className="screenshot-overlay">
                        <span className="text-white">Click to view</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}

          {/* Action Buttons - FIXED to support array for companyWebsite */}
          <div className="modal-actions">
            {/* Company Website buttons (string or array) */}
            {companyWebsite && (
              <>
                {Array.isArray(companyWebsite) ? (
                  companyWebsite.map((link, idx) => (
                    <Button
                      key={idx}
                      href={link.url}
                      target="_blank"
                      className="modal-btn-primary"
                      variant="primary"
                    >
                      {link.name}
                    </Button>
                  ))
                ) : (
                  <Button
                    href={companyWebsite}
                    target="_blank"
                    className="modal-btn-primary"
                    variant="primary"
                  >
                    View Company Website
                  </Button>
                )}
              </>
            )}

            {/* Profile Links (already array) */}
            {profileLinks &&
              profileLinks.length > 0 &&
              profileLinks.map((link, idx) => (
                <Button
                  key={idx}
                  href={link.url}
                  target="_blank"
                  className="modal-btn-primary"
                  variant="primary"
                >
                  {link.name}
                </Button>
              ))}

            <Button
              onClick={onHide}
              className="modal-btn-secondary"
              variant="secondary"
            >
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Full-size Image Lightbox */}
      <Modal
        show={lightboxShow}
        onHide={closeLightbox}
        centered
        size="xl"
        className="image-lightbox-modal"
        contentClassName="border-0"
      >
        <div className="lightbox-header">
          <Button
            className="lightbox-download-btn"
            onClick={handleDownload}
            variant="primary"
          >
            Download
          </Button>
          <Button
            className="lightbox-close-btn-button"
            onClick={closeLightbox}
            variant="secondary"
          >
            Close
          </Button>
        </div>
        <Modal.Body className="lightbox-body">
          {zoomedImage && (
            <img
              src={zoomedImage}
              alt="Full size view"
              className="lightbox-image"
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ExperienceModal;