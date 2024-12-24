import React, { useState, useEffect, useRef } from "react";
import AnimatedHeart from "react-animated-heart";
import "./explore.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

function Explore() {
  const initialCards = [
    {
      id: 1,
      images: [
        require("../../assets/p1.jpeg"),
        require("../../assets/p2.jpeg"),
        require("../../assets/p3.jpeg"),
      ],
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
      images: [
        require("../../assets/p2.jpeg"),
        require("../../assets/p3.jpeg"),
        require("../../assets/p4.jpeg"),
      ],
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
      images: [
        require("../../assets/p3.jpeg"),
        require("../../assets/p4.jpeg"),
        require("../../assets/p1.jpeg"),
      ],
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
      images: [
        require("../../assets/p4.jpeg"),
        require("../../assets/p1.jpeg"),
        require("../../assets/p2.jpeg"),
      ],
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
      images: [
        require("../../assets/p2.jpeg"),
        require("../../assets/p3.jpeg"),
      ],
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
      images: [
        require("../../assets/p1.jpeg"),
        require("../../assets/p4.jpeg"),
      ],
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

  const [showMore, setShowMore] = useState(false);
  const [likedCards, setLikedCards] = useState(() => {
    const storedLikedCards = JSON.parse(localStorage.getItem("likedCards"));
    return storedLikedCards || {};
  });

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setShowMore(true);
    }
  };

  const handleAddToWishlist = (id, card) => {
    const newLikedCards = { ...likedCards, [id]: !likedCards[id] };
    setLikedCards(newLikedCards);
  
    localStorage.setItem("likedCards", JSON.stringify(newLikedCards));
  };
  
  const imageSliderRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="explore-main">
      <header className="details-header">
        <div className="logo">propsoch</div>
      </header>
      <div className="explore-cards">
        {initialCards.map((card, index) => (
          <div className="explore-card" key={index}>
            <div className="explore-card-top">
              <div
                className="explore-card-images"
                ref={imageSliderRef}
                style={{
                  overflowX: "auto",
                  display: "flex",
                  scrollBehavior: "smooth",
                }}
              >
                {card.images.map((image, imageIndex) => (
                  <Link
                    to={`/details/${card.id}`}
                    state={card}
                    className="explore-content-link"
                    key={imageIndex}
                  >
                    <img
                      src={image}
                      alt={`explore-card-${imageIndex}`}
                      className="explore-card-img"
                    />
                  </Link>
                ))}
              </div>
              <div className="explore-top-wrapper">
                <div className="explore-card-top-content">
                  {card.content.liked && (
                    <div className="liked">{card.content.liked}</div>
                  )}
                  <div className="animate">
                    <AnimatedHeart
                      isClick={!!likedCards[card.id]}
                      onClick={() => handleAddToWishlist(card.id, card)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="explore-card-content">
              <div className="explore-content-main">
                <div className="explore-content-internal">
                  <img
                    style={{ width: "16px", height: "16px" }}
                    src={require("../../assets/show.svg").default}
                    alt=""
                  />
                  <span className="explore-content-internal-span">
                    {card.content.show}
                  </span>
                </div>
                <div className="explore-content-internal">
                  <img
                    style={{ width: "16px", height: "16px" }}
                    src={card.content.starIcon}
                    alt=""
                  />
                  <span className="explore-content-internal-span">
                    {card.content.star}
                  </span>
                </div>
              </div>
              <Link
                to={`/details/${card.id}`}
                state={card}
                className="explore-content-link"
              >
                <div className="explore-content-main-heading">
                  {card.content.heading}
                </div>
                <div className="explore-content-main-subheading">
                  {card.content.subheading}
                </div>
              </Link>
            </div>
          </div>
        ))}
        {showMore &&
          [initialCards[4], initialCards[5]].map((card, index) => (
            <div className="explore-card" key={index}>
              <div className="explore-card-top">
                <div
                  className="explore-card-images"
                  ref={imageSliderRef}
                  style={{
                    overflowX: "auto",
                    display: "flex",
                    scrollBehavior: "smooth",
                  }}
                >
                  {card.images.map((image, imageIndex) => (
                    <Link
                      to={`/details/${card.id}`}
                      state={card}
                      className="explore-content-link"
                      key={imageIndex}
                    >
                      <img
                        src={image}
                        alt={`explore-card-${imageIndex}`}
                        className="explore-card-img"
                      />
                    </Link>
                  ))}
                </div>
                <div className="explore-top-wrapper">
                  <div className="explore-card-top-content">
                    {card.content.liked && (
                      <div className="liked">{card.content.liked}</div>
                    )}
                    <div className="animate">
                      <AnimatedHeart
                        isClick={!!likedCards[index]}
                        onClick={() => handleAddToWishlist(index, card)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="explore-card-content">
                <div className="explore-content-main">
                  <div className="explore-content-internal">
                    <img
                      style={{ width: "16px", height: "16px" }}
                      src={require("../../assets/show.svg").default}
                      alt=""
                    />
                    <span className="explore-content-internal-span">
                      {card.content.show}
                    </span>
                  </div>
                  <div className="explore-content-internal">
                    <img
                      style={{ width: "16px", height: "16px" }}
                      src={card.content.starIcon}
                      alt=""
                    />
                    <span className="explore-content-internal-span">
                      {card.content.star}
                    </span>
                  </div>
                </div>
                <Link
                  to={`/details/${card.id}`}
                  state={card}
                  className="explore-content-link"
                >
                  <div className="explore-content-main-heading">
                    {card.content.heading}
                  </div>
                  <div className="explore-content-main-subheading">
                    {card.content.subheading}
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
