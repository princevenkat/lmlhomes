"use client";
import React from "react";
import Testimonial from "@/components/Testimonial";
import Promise from "@/components/Promise";
import FollowYourJourney from "@/components/FollowYourJourney";
import ReactImageMagnify from "react-image-magnify";

export default function Blog() {
  // const mapImage = './assets/images/kattupakkam-map.png'
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
  // const [ismodalOpen, setModelOpen] = useState(false);
  // const handleImageClick = () => {
  //   setModelOpen(true);
  // };
  // const closeModal = () => {
  //   setModelOpen(false);
  // };
  return (
    <div>
      <div className="top-display" />

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
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
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
              Buying an apartment is more than just a place to live it's a{" "}
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                smart investment
              </strong>{" "}
              . Kattupakkam stands out as an ideal location, offering excellent
              connectivity to key neighborhoods like{" "}
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                {" "}
                Porur, Poonamallee, Mangadu, Iyyappanthangal, and Kundrathur,
                making it a sought-after residential hub.
              </strong>{" "}
              Its strategic positioning on{" "}
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                Mount Poonamallee Road
              </strong>{" "}
              and proximity to the Outer Ring Road provide direct access to
              prominent destinations. The nearby Porur Toll connects to
              Chennai’s IT corridor, while Poonamallee links to the
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                {" "}
                Chennai-Bangalore highway,{" "}
              </strong>
              ensuring smooth travel.{" "}
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                Chennai International Airport
              </strong>{" "}
              is just a short drive away, making it highly convenient for
              frequent travelers. Kattupakkam, in particular, stands out with
              its well-planned residential communities that cater to all your
              needs. From stylish 2BHK flats to spacious 3BHK apartments, the
              options here are diverse and designed for every budget.
            </p>
            <strong style={{ fontSize: "1.4em", color: "#000000" }}>
              Refer to the map below to explore Kattupakkam’s extensive access
              to amenities and thriving neighboring areas.
            </strong>
            <br />
            <br />
            
            
              {/* <div className="modal-overlay"> */}
                
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "/assets/images/kattupakkam-map.png",
                      },
                      largeImage: {
                        alt: "",
                        src: "/assets/images/kattupakkam-map.png",
                        width: 1900,
                        height: 1500,
                      },
                    }}
                  />
                
              {/* </div> */}
          
              
                
          
            
            <p>
              <br />
              When it comes to lifestyle amenities, residents of Kattupakkam
              enjoy easy access to popular malls like{" "}
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                Forum Vijaya Mall and Nexus Vijaya Mall in Vadapalani{" "}
              </strong>
              , along with entertainment options such as{" "}
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                AGS Cinemas, GK Cinemas,
              </strong>{" "}
              and more. For everyday shopping,
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                {" "}
                DMart, Reliance Digital, Nilgiris
              </strong>{" "}
              and neighborhood supermarkets provide ample choices. Families
              benefit from the proximity to reputed schools and colleges,
              including{" "}
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                Velammal Vidyalaya, Aditya International School, Sana Model
                School, Sri Ramachandra Medical College, Panimalar, MGR
                University.
              </strong>
              Healthcare facilities like{" "}
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                Aravind Hospital, MIOT International and Apollo Speciality
                Hospital{" "}
              </strong>
              are also within easy reach. With the upcoming{" "}
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                Kattupakkam Metro Station
              </strong>
              , connectivity will only improve further, making this area a
              perfect blend of affordability, convenience, and a vibrant
              lifestyle.
              <br />
              <br />
              <div
                className="click-to-know"
                onClick={() => {
                  window.open("https://www.lmlhomes.in/league-one", "_blank");
                }}
              >
                Click to know about the best apartment in Kattupakkam!
              </div>
            </p>
          </div>
          <br />
          <div className="paraDiv">
            <h2>2. Affordable Yet Luxurious Living</h2>
            <p>
              One of the most compelling reasons to choose Kattupakkam is its
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                {" "}
                affordability without compromising on luxury.
              </strong>{" "}
              Compared to other popular residential areas in Chennai, property
              prices in Kattupakkam are highly competitive. Whether you're
              looking for a cozy 2BHK or a spacious 3BHK, you’ll find{" "}
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                homes that fit your budget while offering top-notch amenities.
              </strong>
            </p>
            <div className="top-display" />
          </div>

          <br />
          <br />
          <div className="paraDiv">
            <h2>4. Peaceful Environment with Green Spaces</h2>
            <div className="blogImgDiv peaceful-environment-with-green-spaces"></div>
            <br />
            <p>
              Unlike the crowded and noisy streets of central Chennai,
              Kattupakkam offers a{" "}
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                peaceful environment
              </strong>{" "}
              perfect for families. The presence of{" "}
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                parks, green spaces, and well-planned roads
              </strong>{" "}
              makes it an ideal location for those who value a serene lifestyle.
            </p>
          </div>
          <br />

          <div className="paraDiv">
            <h2>5. Growing Real Estate Market with High ROI Potential</h2>
            <p>
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                Kattupakkam is a fast-growing locality
              </strong>
              , with numerous residential and commercial projects in the
              pipeline. This rapid development ensures that property values in
              the area will continue to appreciate, offering{" "}
              <strong style={{ fontSize: "1.2em", color: "#005358" }}>
                excellent returns on investment for homebuyers.
              </strong>{" "}
              <span
                className="click-to-know-Kattupakkam-growth"
                onClick={() => {
                  window.open("https://www.lmlhomes.in/league-one", "_blank");
                }}
              >
                Click to know more about the Kattupakkam’s growth.
              </span>
              <br />
              <br />
              <div className="blogImgDiv Kattupakkam_growth"></div>
            </p>
          </div>
          <br />

          <div className="paraDiv">
            <h2>6. Community Living and Safety</h2>
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
          <div className="bottom-cont ">
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
          <div className="cont3-middle-display" />
          {/* <div className="middle-display" /> */}

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
                <img className="recent-post-display-one " />
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
                <img className="recent-post-display-two " />
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
                <img className="recent-post-display-three " />
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
                <img className="recent-post-display-four " />
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
                <img className="recent-post-display-five " />
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
                <img className="recent-post-display-six " />
                6. The importance of choosing the right colors for your home
              </h6>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="top-display" />

      <div className="blogfooter">
        <Testimonial />
        <Promise />
        <FollowYourJourney />
      </div>
    </div>
  );
}
