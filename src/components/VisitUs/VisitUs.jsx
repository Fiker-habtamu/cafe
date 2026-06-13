import React from "react";
import "./VisitUs.css";
 
const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7469!3d9.0192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sMESSANTA%20COFFEE!5e0!3m2!1sen!2set!4v1700000000000";
 
const GOOGLE_MAPS_LINK =
  "https://maps.google.com/?q=MESSANTA+COFFEE,+S+Africa+St,+Lesotho+St,+Addis+Ababa,+Ethiopia";
 
// External link icon
const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
 
export default function VisitUs({visitRef}) {
  return (
    <section className="visit-section" ref={visitRef}>
      {/* ── Section header ── */}
      <h2 className="visit-title">Visit Us</h2>
      <p className="visit-subtitle">
        Come experience the warmth of hospitality at our coffee shop.
      </p>
 
      {/* ── Card ── */}
      <div className="visit-card">
        <h3 className="visit-card-title">Location &amp; Hours</h3>
 
        {/* ── Map ── */}
        <div className="map-header">
          <span className="map-label">Find Us on Map</span>
          <a
            className="map-link"
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps <ExternalIcon />
          </a>
        </div>
 
        <div className="map-iframe-wrapper">
          <iframe
            title="Dina's cafe location"
            src={GOOGLE_MAPS_EMBED}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
 
        <hr className="visit-divider" />
 
        {/* ── Address & Contact ── */}
        <div className="info-grid">
          {/* Address */}
          <div className="info-col">
            <p className="info-col-title">Address</p>
            <p>S Africa St, Lesotho St</p>
            <p>Addis Ababa, Ethiopia</p>
          </div>
 
          {/* Hours & Contact */}
          <div className="info-col">
            <p className="info-col-title">Hours &amp; Contact</p>
            <p>Monday – Sunday: 7:30 AM – 7:30 PM</p>
            <p>Phone:</p>
            <p>
              <a href="tel:011320000071">09** **&1</a>
            </p>
            <p>
              <a href="tel:+251903018011">+251 9** ** 1</a>
            </p>
            <p>Email:</p>
            <p>
              <a href="mailto:info@Dinas's.et">
                info@Dinas's.et
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}