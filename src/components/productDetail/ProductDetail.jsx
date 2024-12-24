import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./productdetail.css";

function ProductDetail() {
  const location = useLocation();
  const card = location.state; // Access the passed card data

  if (!card) {
    return <p>No details available.</p>;
  }

  return (
    <div className="product-details">
      {/* Header */}
      <header className="details-header">
        <div className="logo">propsoch</div>
        <div className="nav-options">
          <Button variant="link" className="nav-button">
            Explore
          </Button>
          <Button variant="link" className="nav-button">
            Wishlists
          </Button>
          <Button variant="link" className="nav-button">
            Show map
          </Button>
          <Button variant="link" className="nav-button">
            Log in
          </Button>
        </div>
      </header>

      {/* Property Image and Tag */}
      <div className="details-image-container">
        <div className="most-liked">Most Liked</div>
        <img
          src={card.image || "https://via.placeholder.com/600x400"}
          alt="Property"
          className="details-image"
        />
      </div>

      {/* Property Details */}
      <div className="details-content">
        <div className="details-heading">
          <div>
            <h3>{card.content.heading}</h3>
            <p>
              <FaMapMarkerAlt className="location-icon" />
              <h5 style={{ margin: "0px" }}>{card.content.location}</h5>
            </p>
          </div>
          <div className="details-price">
            <span>{card.price || "1.5 Cr"}</span>
            <p>EMI Available</p>
          </div>
        </div>
        <div className="details-location">
          <h4>Location</h4>
          <div className="location-address">
            <FaMapMarkerAlt className="location-icon" />
            <p>
              {card.address ||
                "Jl. Gerungsari, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277"}
            </p>
          </div>
          <div className="location-map">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Map"
              className="map-image"
            />
            <Button variant="primary" className="map-button">
              View on Map
            </Button>
          </div>
        </div>

        {/* Nearby Places */}
        <div className="details-nearby">
          <Button variant="outline-secondary" className="nearby-tag">
            2 Hospital
          </Button>
          <Button variant="outline-secondary" className="nearby-tag">
            4 Gas stations
          </Button>
          <Button variant="outline-secondary" className="nearby-tag">
            2 Schools
          </Button>
        </div>

        {/* Property Amenities */}
        <div className="details-amenities">
          <h4>Property Amenities</h4>
          <div className="amenities-tags">
            {card.amenities &&
              card.amenities.map((amenity, index) => (
                <Button
                  key={index}
                  variant="outline-primary"
                  className="amenity-tag"
                >
                  {amenity}
                </Button>
              ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <footer className="details-footer">
        <Button variant="link" className="footer-button">
          Explore
        </Button>
        <Button variant="link" className="footer-button">
          Wishlists
        </Button>
        <Button variant="link" className="footer-button">
          Show map
        </Button>
        <Button variant="link" className="footer-button">
          Log in
        </Button>
      </footer>
    </div>
  );
}

export default ProductDetail;
