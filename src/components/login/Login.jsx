import React from "react";
import Footer from "../footer/Footer";
import "../map/map.css";
function Login() {
  return (
    <div>
      <div className="coming-soon-content">
        <h1 className="coming-soon-heading">Login Page Coming Soon</h1>
        <p className="coming-soon-message">
          We're working hard to get things ready for you. Stay tuned for the
          launch!
        </p>
        <div className="countdown">
          <p>Launching in:</p>
          <div className="countdown-timer">
            <span>00</span>:<span>30</span>:<span>45</span>{" "}
          </div>
        </div>
        <button className="notify-button">Notify Me</button>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
