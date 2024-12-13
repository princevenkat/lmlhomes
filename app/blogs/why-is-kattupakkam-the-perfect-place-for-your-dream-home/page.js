"use client";
import React from "react";
import Testimonial from "@/components/Testimonial";
import Promise from "@/components/Promise";
import FollowYourJourney from "@/components/FollowYourJourney";

export default function Blog() {
  //   const rightContentRef = useRef(null);
  //   const containerRef = useRef(null);
  //   const leftContentRef = useRef(null);
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const container = containerRef.current;
  //       const rightContent = rightContentRef.current;
  //       const leftContent = leftContentRef.current;

  //       if (!container || !rightContent || !leftContent) return;

  //       const containerRect = container.getBoundingClientRect();
  //       const leftContentRect = leftContent.getBoundingClientRect();
  //       const containerTop = containerRect.top;
  //       const containerBottom = containerRect.bottom;
  //       const rightContentHeight = rightContent.offsetHeight;

  //       // Stop sticky behavior at the end of left content
  //       const stopScrollHeight =
  //         leftContent.offsetHeight + containerRect.top - window.innerHeight;

  //       // Adjust rightContent's position
  //       if (
  //         containerTop < 0 &&
  //         containerBottom > rightContentHeight &&
  //         window.scrollY < stopScrollHeight
  //       ) {
  //         rightContent.style.position = "fixed";
  //         rightContent.style.top = "0";
  //       } else if (window.scrollY >= stopScrollHeight) {
  //         rightContent.style.position = "absolute";
  //         rightContent.style.top = `${
  //           leftContent.offsetHeight - rightContentHeight
  //         }px`;
  //       } else {
  //         rightContent.style.position = "absolute";
  //         rightContent.style.top = "0";
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);
  return (
    <div>
      <div className="demo-blog-cointainer">
        <div className="left-container">
          <div className="blogImgDiv whykatpakamprft"></div>
          <div>
            <br />
            <h1 className="beba">
              Why Is Kattupakkam the Perfect Place for Your Dream Home?
            </h1>
            <span>Dec 09,2025</span>
          </div>
          <br />
          <div className="paraDiv">
            <p>
              Chennai's real estate market is booming, and choosing the right
              location for your dream home is critical. While areas like
              Velachery, Anna Nagar, and Tambaram often grab the spotlight,
              <strong style={{ fontSize: "1.3em", color: "#005358" }}>
                {" "}
                Kattupakkam is emerging as a hidden gem for homebuyers.
              </strong>{" "}
              From excellent connectivity to modern amenities and a peaceful
              environment, Kattupakkam offers everything you need for the
              perfect home. Read on to discover why this vibrant locality is the
              ideal destination for your dream home.
            </p>
          </div>
          <br />

          <div className="paraDiv">
            <h2>1. Strategic Location with Excellent Connectivity</h2>
            <p>
              Buying an apartment is more than just a place to live—it's a{" "}
              <strong style={{ fontSize: "1.3em", color: "#005358" }}>
                smart investment.
              </strong>{" "}
              Apartments in Kattupakkam offer the perfect balance of
              <strong style={{ fontSize: "1.3em", color: "#005358" }}>
                {" "}
                affordability, convenience, and amenities.
              </strong>{" "}
              Kattupakkam, in particular, stands out with its well-planned
              residential communities that cater to all your needs. From stylish
              2BHK flats to spacious 3BHK apartments, the options here are
              diverse and designed for every budget.
            </p>
          </div>
          <br />

          <div className="paraDiv">
            <h2>2. Affordable Yet Luxurious Living</h2>
            <p>
              One of the most compelling reasons to choose Kattupakkam is its
              <strong style={{ fontSize: "1.3em", color: "#005358" }}>
                {" "}
                affordability without compromising on luxury.
              </strong>{" "}
              Compared to other popular residential areas in Chennai, property
              prices in Kattupakkam are highly competitive. Whether you're
              looking for a cozy 2BHK or a spacious 3BHK, you’ll find{" "}
              <strong style={{ fontSize: "1.3em", color: "#005358" }}>
                homes that fit your budget while offering top-notch amenities.
              </strong>
            </p>
          </div>
          <br />
          <div className="paraDiv">
            <h2>4. Proximity to Schools, Hospitals, and Shopping Centers</h2>
            <p>
              <strong style={{ fontSize: "1.3em", color: "#005358" }}>
                Kattupakkam is surrounded by reputed schools, renowned
                hospitals, and bustling shopping centers,
              </strong>{" "}
              making it a convenient place for families.
              <br />
              <br />
              <strong style={{ fontSize: "1.3em" }}>Schools</strong>: Pon
              Vidyashram, Velammal Vidyalaya <br />
              <strong style={{ fontSize: "1.3em" }}>Hospitals</strong>:
              Ramachandra Hospital, Apollo Speciality Hospital
              <br />
              <strong style={{ fontSize: "1.3em" }}>Shopping Hubs</strong>:
              Forum Vijaya Mall, VR Chennai <br />
              <br />
              Having these essential facilities nearby reduces travel time and
              adds to the convenience of living in Kattupakkam.
            </p>
          </div>
          <br />

          <div className="paraDiv">
            <h2>5. Peaceful Environment with Green Spaces</h2>
            <p>
              Unlike the crowded and noisy streets of central Chennai,
              Kattupakkam offers a{" "}
              <strong style={{ fontSize: "1.3em", color: "#005358" }}>
                peaceful environment
              </strong>{" "}
              perfect for families. The presence of{" "}
              <strong style={{ fontSize: "1.3em", color: "#005358" }}>
                parks, green spaces, and well-planned roads
              </strong>{" "}
              makes it an ideal location for those who value a serene lifestyle.
            </p>
          </div>
          <br />

          <div className="paraDiv">
            <h2>6. Growing Real Estate Market with High ROI Potential</h2>
            <p>
              <strong style={{ fontSize: "1.3em", color: "#005358" }}>
                Kattupakkam is a fast-growing locality
              </strong>
              , with numerous residential and commercial projects in the
              pipeline. This rapid development ensures that property values in
              the area will continue to appreciate, offering{" "}
              <strong style={{ fontSize: "1.3em", color: "#005358" }}>
                excellent returns on investment for homebuyers.
              </strong>
            </p>
          </div>
          <br />

          <div className="paraDiv">
            <h2>7. Community Living and Safety</h2>
            <p>
              Kattupakkam is known for its friendly and welcoming community.
              Most residential complexes promote a sense of togetherness with
              events and activities for families. The availability of gated
              communities with 24/7 security ensures safety for residents,
              making it an ideal choice for families and senior citizens.
            </p>
          </div>
        </div>

        <div>
          <div className="top-cont">
            <h2 className="right-cont-text">
              Best Affordable <br />
              Luxury aparment
              <br /> in Chennai
            </h2>
            <button
              className="right-cont-button"
              onClick={() => {
                window.open("https://www.lmlhomes.in/league-one", "_blank");
              }}
            >
              View Property
            </button>
          </div>
          <div className="bottom-cont">
            <h2>Amazing Offer</h2>
            <button className="right-b-cont-button">
              Click here to claim the offer
            </button>
          </div>
          {/* ////////////////////////////////recent blogs////////////////////// */}
          <div>
            <h2 className="bottom-cont2-head">Recent Post</h2>
            <div className="bottom-cont2">
              <h6
                className="bottom-cont2-point"
                onClick={() => {
                  window.open(
                    "https://www.lmlhomes.in/blogs/tips-for-buying-your-dream-apartment-or-villa",
                    "_blank"
                  );
                }}
              >
                1. Tips for buying your dream apartment/villa
              </h6>
              <br />
              <h6
                className="bottom-cont2-point"
                onClick={() => {
                  window.open(
                    "https://www.lmlhomes.in/blogs/dos-and-donts-while-living-in-apartment",
                    "_blank"
                  );
                }}
              >
                2. The Dos and Don'ts while living in an Apartment
              </h6>
              <br />
              <h6
                className="bottom-cont2-point"
                onClick={() => {
                  window.open(
                    "https://www.lmlhomes.in/blogs/keep-these-essential-things-ready-for-your-first-apartment",
                    "_blank"
                  );
                }}
              >
                3. Keep these essential things ready for your first apartment
              </h6>
              <br />
              <h6
                className="bottom-cont2-point"
                onClick={() => {
                  window.open(
                    "https://www.lmlhomes.in/blogs/major-benefits-buying-under-construction-properties",
                    "_blank"
                  );
                }}
              >
                4. Major benefits of buying under-construction properties
              </h6>
              <br />
              <h6
                className="bottom-cont2-point"
                onClick={() => {
                  window.open(
                    "https://www.lmlhomes.in/blogs/7-reasons-why-you-should-buy-your-apartment-from-reputed-builder",
                    "_blank"
                  );
                }}
              >
                5. 7 reasons why you should buy your apartment <br />
                from a reputed builder
              </h6>
              <br />
              <h6
                className="bottom-cont2-point"
                onClick={() => {
                  window.open(
                    "https://www.lmlhomes.in/blogs/https://www.lmlhomes.in/blogs/importance-of-choosing-right-colors-for-your-home",
                    "_blank"
                  );
                }}
              >
                6. The importance of choosing the right colors for your home
              </h6>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Testimonial />
        <Promise />
        <FollowYourJourney />
      </div>
    </div>
  );
}
