"use client";
import React, { useEffect, useRef } from "react";
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
          <div className="blogImgDiv keepEsntlRdy"></div>
          <div>
            <h1 className="beba">
            Find Your Dream Apartments in Chennai
            </h1>
            <span>Dec 02,2024</span>
          </div>
          <div className="paraDiv">
            <p>
            Searching for your dream apartment in Chennai can be
                    overwhelming with so many options. While areas like
                    Velachery, Porur, or Anna Nagar may cross your mind, have
                    you considered the hidden gem of Kattupakkam? Known for its
                    modern apartments and strategic location, Kattupakkam offers
                    everything you need for a comfortable and fulfilling
                    lifestyle. Let’s explore why this fast-developing area is
                    the ideal place to find the perfect apartment.
            </p>
          </div>
          <div className="paraDiv">
            <h2>1. Why Choose Apartments Over Other Housing Options?</h2>
            <p>
            Buying an apartment is more than just a place to live—it's a
                    smart investment. Apartments in Chennai offer the perfect
                    balance of affordability, convenience, and amenities.
                    Kattupakkam, in particular, stands out with its well-planned
                    residential communities that cater to all your needs. From
                    stylish 2BHK flats to spacious 3BHK apartments, the options
                    here are diverse and designed for every budget.
            </p>
          </div>
          <div className="paraDiv">
            <h2>2. What Makes Kattupakkam the Best Choice?</h2>
            <h4>a.Strategic Location and Connectivity </h4>
                  <p>
                    Kattupakkam is located along the bustling Mount-Poonamallee
                    Road, ensuring seamless connectivity to key areas like
                    Porur, Guindy, and Chennai Airport. It also has excellent
                    public transportation options, making daily commutes
                    hassle-free.
                  </p>

                  <h4>b.Upcoming Infrastructure and Growth </h4>
                  <p>
                    With numerous residential and commercial projects in the
                    pipeline, Kattupakkam is poised for rapid growth, ensuring
                    higher property value appreciation.
                  </p>
          </div>
          <div className="paraDiv">
          <h2>3. Lifestyle and Amenities in Kattupakkam</h2>

<p>
  Apartments in Kattupakkam are equipped with all the modern
  amenities that elevate your lifestyle. From 24/7 security
  and power backup to gyms, swimming pools, and kids’ play
  areas, every detail is designed for comfort and convenience.
</p>
<p>
  Additionally, Kattupakkam boasts green spaces, walking
  trails, and community parks, promoting a healthy and serene
  lifestyle.
</p>
          </div>
          <div className="paraDiv">
          <h2>4. Access to Top-Tier Facilities</h2>
                  <p>
                    One of the key factors when choosing an apartment is the
                    availability of essential facilities nearby. Kattupakkam
                    scores high with reputed schools, top hospitals, and
                    shopping hubs within close reach. Some notable mentions
                    include: - <h4>Schools:</h4> Velammal Vidyalaya, Pon
                    Vidyashram. - <h4>Hospitals:</h4> Ramachandra Hospital, MIOT
                    International. - <h4>Shopping:</h4> Phoenix MarketCity, VR
                    Chennai
                  </p>
          </div>
          <div className="paraDiv">
          <h2>5. Apartments in Kattupakkam: Affordable Luxury</h2>
                  <p>
                    Compared to more established areas like Velachery or T.
                    Nagar, apartments in Kattupakkam offer the perfect blend of
                    luxury and affordability. Whether you’re a first-time
                    homebuyer or upgrading to a bigger space, you’ll find
                    options that match your budget without compromising on
                    quality.
                  </p>
          </div>
          <div className="paraDiv">
          <h2>
                    6. Tips for Finding Your Dream Apartment in Kattupakkam
                  </h2>
                  <p>
                    <h4>1.Define Your Budget</h4>: Decide on a price range that
                    works for you and explore apartments within that range.
                    <h4>2. Check Amenities</h4>: Look for features like 24/7
                    security, parking, and recreational areas.
                    <h4>3. Visit the Location</h4>: Ensure the neighborhood
                    aligns with your lifestyle preferences.
                    <h4>4. Partner with a Trusted Builder</h4>: Choose builders
                    with a track record of quality projects in Chennai.
                  </p>
          </div>
          <div className="paraDiv">
          <h2>Conclusion</h2>
                  <p>
                    Finding your dream apartment in Chennai doesn’t have to be a
                    challenge. With its strategic location, modern amenities,
                    and excellent growth potential, **Kattupakkam** is the ideal
                    destination for homebuyers. Whether you’re looking for a
                    cozy 2BHK or a luxurious 3BHK, this vibrant locality offers
                    the best flats for sale. Start your journey towards owning
                    your dream apartment today—Kattupakkam awaits!
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
            <h6 className="bottom-cont2-point" onClick={() => {
                  window.open(
                    "https://www.lmlhomes.in/blogs/tips-for-buying-your-dream-apartment-or-villa",
                    "_blank"
                  );
                }}>1. Tips for buying your dream apartment/villa</h6><br/>
            <h6 className="bottom-cont2-point" onClick={() => {
                  window.open(
                    "https://www.lmlhomes.in/blogs/dos-and-donts-while-living-in-apartment",
                    "_blank"
                  );
                }}>2. The Dos and Don'ts while living in an Apartment</h6><br/>
            <h6 className="bottom-cont2-point"onClick={() => {
                  window.open(
                    "https://www.lmlhomes.in/blogs/keep-these-essential-things-ready-for-your-first-apartment",
                    "_blank"
                  );
                }} >3. Keep these essential things ready for your first apartment</h6><br/>
            <h6 className="bottom-cont2-point"onClick={() => {
                  window.open(
                    "https://www.lmlhomes.in/blogs/major-benefits-buying-under-construction-properties",
                    "_blank"
                  );
                }} >4. Major benefits of buying under-construction properties</h6><br/>
            <h6 className="bottom-cont2-point"onClick={() => {
                  window.open(
                    "https://www.lmlhomes.in/blogs/7-reasons-why-you-should-buy-your-apartment-from-reputed-builder",
                    "_blank"
                  );
                }} >5. 7 reasons why you should buy your apartment <br/>from a reputed
            builder</h6><br/>
            <h6 className="bottom-cont2-point"onClick={() => {
                  window.open(
                    "https://www.lmlhomes.in/blogs/https://www.lmlhomes.in/blogs/importance-of-choosing-right-colors-for-your-home",
                    "_blank"
                  );
                }} >6. The importance of choosing the right colors for your home</h6><br/>
            </div>

          </div>
        </div>
      </div>
      <div>
        <Testimonial />
        <Promise />
        <FollowYourJourney /></div>
    </div>
  );
}
