import React, { useState, useEffect } from "react";
import AnimatedHeart from "react-animated-heart";
import "./explore.css";
import { Link } from "react-router-dom";

function Explore() {
  const cards = [
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
      },
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const [likedCards, setLikedCards] = useState({});

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setShowMore(true);
    }
  };

  const handleAddToWishlist = (index) => {
    setLikedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSlideLeft = (e) => {
    const card = e.currentTarget.closest(".explore-card");
    const image = card.querySelector(".explore-card-image");
    image.scrollLeft -= 100;
  };

  const handleSlideRight = (e) => {
    const card = e.currentTarget.closest(".explore-card");
    const image = card.querySelector(".explore-card-image");
    image.scrollLeft += 100;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="explore-main">
      <div className="explore-cards">
        {cards.map((card, index) => (
          <div className="explore-card" key={index}>
            <div className="explore-card-top">
              <div className="explore-card-image">
                <img
                  src={card.image}
                  alt="explore-card"
                  className="explore-card-img"
                />
                <div
                  className="explore-card-slide-left"
                  onClick={handleSlideLeft}
                >
                  &lt;
                </div>
                <div
                  className="explore-card-slide-right"
                  onClick={handleSlideRight}
                >
                  &gt;
                </div>
              </div>
              <div className="explore-top-wrapper">
                <div className="explore-card-top-content">
                  <div className="liked">{card.content.liked}</div>
                  <div className="animate">
                    <AnimatedHeart
                      isClick={!!likedCards[index]}
                      onClick={() => handleAddToWishlist(index)}
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
              <Link to={`/details/${card.id}`}                 state={card} // Pass the card data here
 className="explore-content-link">
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
        {showMore && <div className="load-more">Loading more options...</div>}
      </div>
    </div>
  );
}

export default Explore;
