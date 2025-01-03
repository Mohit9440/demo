import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./wishlists.css";
import Footer from "../footer/Footer";

function Wishlists() {
  const [likedCards, setLikedCards] = useState([]);

  useEffect(() => {
    // Retrieve liked cards from localStorage
    const storedLikedCards =
      JSON.parse(localStorage.getItem("likedCards")) || {};
    const likedCardIds = Object.keys(storedLikedCards).filter(
      (key) => storedLikedCards[key] === true
    );

    // Map likedCardIds to the actual card data
    const allCards = [
      {
        id: 1,
        image: require("../../assets/p1.jpeg"),
        content: {
          liked: "Most Liked",
          show: 41172,
          star: 3.82,
          heading: "Sushant Lok 2, Gurgaon",
          subheading: "Apr 5 – 10",
          starIcon: require("../../assets/star.svg").default,
          location: "Sector 57, Gurgaon",
          amenities: ["House", "Apartment"],
        },
      },
      {
        id: 2,
        image: require("../../assets/p2.jpeg"),

        content: {
          liked: "Most Liked",
          show: 8402,
          star: 5.0,
          heading: "Rainbow Heights, HSR",
          subheading: "Mar 9 – 14",
          starIcon: require("../../assets/greenStar.svg").default,
          location: "Sector 7, HSR",
          amenities: ["House", "Apartment", "Gym"],
        },
      },
      {
        id: 3,
        image: require("../../assets/p3.jpeg"),

        content: {
          liked: "Most Liked",
          show: 12648,
          star: 2.82,
          heading: "Walden, Colorado, US",
          subheading: "Mar 3 – 8",
          starIcon: require("../../assets/redStar.svg").default,
          location: "Street 4, Colorado , US",
          amenities: ["House", "Apartment", "Pool"],
        },
      },
      {
        id: 4,
        image: require("../../assets/p4.jpeg"),

        content: {
          liked: "Most Liked",
          show: 6483,
          star: 5.0,
          heading: "Poggibonsi, Italy",
          subheading: "Apr 26 – May 1",
          starIcon: require("../../assets/greenStar.svg").default,
          location: "Cross 4 , Poggibonsi",
          amenities: ["House", "Villa"],
        },
      },
      {
        id: 5,
        image: require("../../assets/p2.jpeg"),

        content: {
          liked: "Most Liked",
          show: 5000,
          star: 4.5,
          heading: "Vista Apartments, New York",
          subheading: "Mar 1 – 5",
          starIcon: require("../../assets/star.svg").default,
          location: "Manhattan, NY",
          amenities: ["Apartment", "Gym"],
        },
      },
      {
        id: 6,
        image: require("../../assets/p1.jpeg"),

        content: {
          liked: "Most Liked",
          show: 6000,
          star: 4.8,
          heading: "Ocean View Villa, California",
          subheading: "Apr 15 – 20",
          starIcon: require("../../assets/greenStar.svg").default,
          location: "Malibu, CA",
          amenities: ["Villa", "Pool"],
        },
      },
    ];

    const likedCardsData = allCards.filter((card) =>
      likedCardIds.includes(card.id.toString())
    );

    setLikedCards(likedCardsData);
  }, []);

  return (
    <div className="wishlists-container">
      <header className="wishlists-header">
        <h2>Your Liked Properties</h2>
      </header>

      <div className="wishlists-cards">
        {likedCards.length === 0 ? (
          <p style={{ textAlign: "center" }}>No liked properties yet.</p>
        ) : (
          likedCards.map((card) => (
            <div className="wishlist-card" key={card.id}>
              <div className="wishlist-card-top">
                <div className="wishlist-card-image">
                  <Link
                    to={`/details/${card.id}`}
                    state={card}
                    className="wishlist-content-link"
                  >
                    <img
                      src={card.image}
                      alt="wishlist-card"
                      className="wishlist-card-img"
                    />
                  </Link>
                </div>
              </div>
              <div className="wishlist-card-content">
                <div className="wishlist-content-main">
                  <div className="wishlist-content-internal">
                    <img
                      style={{ width: "16px", height: "16px" }}
                      src={require("../../assets/show.svg").default}
                      alt=""
                    />
                    <span className="wishlist-content-internal-span">
                      {card.content.show}
                    </span>
                  </div>
                  <div className="wishlist-content-internal">
                    <img
                      style={{ width: "16px", height: "16px" }}
                      src={require("../../assets/star.svg").default}
                      alt=""
                    />
                    <span className="wishlist-content-internal-span">
                      {card.content.star.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="wishlist-content-main-heading">
                  {card.content.heading}
                </div>
                <div className="wishlist-content-main-subheading">
                  {card.content.location}
                </div>
                <div className="wishlist-amenities">
                  {card.content.amenities.map((amenity, index) => (
                    <Button
                      key={index}
                      variant="outline-secondary"
                      className="wishlist-amenity-tag"
                    >
                      {amenity}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Wishlists;
