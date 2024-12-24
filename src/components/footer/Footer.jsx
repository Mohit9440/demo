import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./footer.css";
import search from "../../assets/search.svg";
import heart from "../../assets/heart2.svg";
import location1 from "../../assets/location.svg";
import profile from "../../assets/profile.svg";
function Footer() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle button click for navigation
  const handleNavigate = (route) => {
    navigate(route); // Navigate to the specified route
  };
  return (
    <div>
      <footer className="details-footer">
        <Button
          variant="link"
          className="footer-button"
          onClick={() => handleNavigate("/")}
        >
          <img src={search} alt="" />
          <span>Explore</span>
        </Button>
        <Button
          variant="link"
          className="footer-button"
          onClick={() => handleNavigate("/wishlists")}
        >
          <img src={heart} alt="" />
          <span>Wishlists</span>
        </Button>
        <Button variant="link" className="footer-button">
          <img src={location1} alt="" />
          <span>Show map</span>
        </Button>
        <Button variant="link" className="footer-button">
          <img src={profile} alt="" />
          <span> Log in</span>
        </Button>
      </footer>
    </div>
  );
}
export default Footer;
