import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "./footer.css";
import search from "../../assets/search.svg";
import heart from "../../assets/heart2.svg";
import location1 from "../../assets/location.svg";
import profile from "../../assets/profile.svg";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (route) => {
    navigate(route);
  };

  const isActive = (route) => location.pathname === route;

  return (
    <div>
      <footer className="details-footer">
        <Button
          variant="link"
          className={`footer-button ${isActive("/") ? "active" : ""}`}
          onClick={() => handleNavigate("/")}
        >
          <img src={search} alt="" />
          <span>Explore</span>
        </Button>
        <Button
          variant="link"
          className={`footer-button ${isActive("/wishlists") ? "active" : ""}`}
          onClick={() => handleNavigate("/wishlists")}
        >
          <img src={heart} alt="" />
          <span>Wishlists</span>
        </Button>
        <Button
          variant="link"
          className={`footer-button ${isActive("/map") ? "active" : ""}`}
          onClick={() => handleNavigate("/map")}
        >
          <img src={location1} alt="" />
          <span>Show map</span>
        </Button>
        <Button
          variant="link"
          className={`footer-button ${isActive("/login") ? "active" : ""}`}
          onClick={() => handleNavigate("/login")}
        >
          <img src={profile} alt="" />
          <span> Log in</span>
        </Button>
      </footer>
    </div>
  );
}
export default Footer;
