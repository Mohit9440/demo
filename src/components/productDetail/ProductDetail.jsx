import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./productdetail.css";
import Location2 from "../../assets/location2.svg";
import Footer from "../footer/Footer";
function ProductDetail() {
  const location = useLocation();
  const card = location.state;

  if (!card) {
    return <p>No details available.</p>;
  }

  const mapStyles = {
    height: "300px",
    width: "100%",
  };

  const defaultCenter = {
    lat: card.latitude || -6.9932,
    lng: card.longitude || 110.418,
  };
  const firstImage = Array.isArray(card.images) ? card.images[0] : card.image;

  return (
    <div className="product-details">
      <header className="details-header">
        <div className="logo">propsoch</div>
      </header>

      <div className="details-image-container">
        <div className="most-liked">Most Liked</div>
        <img
          src={firstImage || "https://via.placeholder.com/600x400"}
          alt="Property"
          className="details-image"
        />
      </div>

      <div className="details-content">
        <div className="details-heading">
          <div>
            <h3>{card.content.heading}</h3>
            <p>
              <FaMapMarkerAlt className="location-icon" />
              <p style={{ margin: "0px" }}>{card.content.location}</p>
            </p>
          </div>
          <div className="details-price">
            <span>{card.price || "1.5 Cr"}</span>
            <p>EMI Available</p>
          </div>
        </div>
        <div className="details-location">
          <div
            style={{ color: "#252B5C", fontSize: "22px", fontWeight: "700" }}
          >
            Location
          </div>
          <div className="location-address">
            <img src={Location2} alt="" />
            <h3>
              {card.address ||
                "Jl. Gerungsari, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277"}
            </h3>
          </div>
          <div className="location-map">
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={mapStyles}
                center={defaultCenter}
                zoom={15}
                options={{
                  gestureHandling: "greedy", // Enables two-finger pan
                }}
              />
            </LoadScript>
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
          <div
            style={{
              color: "#252B5C",
              fontSize: "22px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Property Amenities
          </div>

          <div className="amenities-tags">
            {card.content.amenities && card.content.amenities.length > 0 ? (
              card.content.amenities.map((amenity, index) => (
                <Button
                  key={index}
                  variant="outline-primary"
                  className="amenity-tag"
                >
                  {amenity}
                </Button>
              ))
            ) : (
              <p>No amenities available</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
