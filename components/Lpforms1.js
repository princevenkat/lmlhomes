import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "@/app/page.module.css";
import { usePathname } from "next/navigation";

export default function LandingPageForm1({ closeForm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState(""); // Updated message to note
  const [number, setNumber] = useState("");
  const [campaignId, setCampaignId] = useState(""); // Campaign ID state

  const pathname = usePathname();
  
  useEffect(() => {
    // Set campaignId based on the current page
    if (pathname === "/prakriti") {
      setCampaignId(process.env.NEXT_PUBLIC_SELLDO_PRAKRITI_CAMPAIGN_ID); // Fetch campaign ID from .env
    } else if (pathname === "/iconia") {
      setCampaignId(process.env.NEXT_PUBLIC_SELLDO_ICONIA_CAMPAIGN_ID); // Fetch campaign ID from .env
    } else if (pathname === "/arshiya") {
      setCampaignId(process.env.NEXT_PUBLIC_SELLDO_ARSHIYA_CAMPAIGN_ID); // Fetch campaign ID from .env
    } else {
      setCampaignId(process.env.NEXT_PUBLIC_SELLDO_DEFAULT_CAMPAIGN_ID); // Default to campaign ID from .env
    }
  }, [pathname]);

  // Form reference and loading state
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // Clear form fields
      setName("");
      setEmail("");
      setNumber("");
      setNote("");
  
      // Call the API route
      const response = await fetch("/api/submitLead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phoneNumber: number,
          note: note || "No Notes Present",
          campaignId,
        }),
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert("Successfully Submitted");

        const currentPath = window.location.pathname;

        if (currentPath === '/league-one') {
          // Create a link element
          const link = document.createElement('a');
          
          // Set the href attribute to the PDF URL
          link.href = 'https://www.lmlhomes.in/assets/pdfs/theleagueone.pdf';
          
          // Set the download attribute (optional: set filename)
          link.download = 'basic-link-1.pdf';
          
          // Programmatically click the link to trigger the download
          link.click();
      }
      else if(currentPath === '/arshiya'){

        // Create a link element
        const link = document.createElement('a');
         
        // Set the href attribute to the PDF URL
        link.href = 'https://www.lmlhomes.in/assets/pdfs/arshiya-brochure.pdf';
        
        // Set the download attribute (optional: set filename)
        link.download = 'basic-link-1.pdf';
        
        // Programmatically click the link to trigger the download
        link.click();
       
     }
     else if(currentPath === '/iconia'){
          
      // Create a link element
      const link = document.createElement('a');
       
      // Set the href attribute to the PDF URL
      link.href = 'https://www.lmlhomes.in/assets/pdfs/iconia-brochure.pdf';
      
      // Set the download attribute (optional: set filename)
      link.download = 'basic-link-1.pdf';
      
      // Programmatically click the link to trigger the download
      link.click();
     
   }
   else{
// Create a link element
const link = document.createElement('a');
       
// Set the href attribute to the PDF URL
link.href = 'https://www.lmlhomes.in/assets/pdfs/lml-prakriti-magazine.pdf';

// Set the download attribute (optional: set filename)
link.download = 'basic-link-1.pdf';

// Programmatically click the link to trigger the download
link.click();

   }

      } 
      
      else {
        console.error(result.message);
        alert("forms not submit");

      
        
      } 
    
    }catch (error) {

      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");


    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.homeEnquiryFormSection}>
      <Container>
        <Row>
          <div className={styles.homeEnquiryDiv}>
            <div className={styles.formCloseBtn} onClick={closeForm}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <p>
              Please fill out the form below and we will get back to you as soon
              as possible.
            </p>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
            <input
              type="text"
              className={styles.formInput}
              placeholder="* Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="Name"
            />
            <input
              type="text"
              className={styles.formInput}
              placeholder="* Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="Email"
            />
            <input
              type="number"
              className={styles.formInput}
              placeholder="* Mobile Number"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              name="Number"
            />
            <input
              type="text"
              className={styles.formInput + " pb-5"}
              placeholder="* Note"
              required
              value={note}
              onChange={(e) => setNote(e.target.value)}
              name="Note"
            />
            <p
              style={{
                fontSize: "11px",
                textAlign: "left",
                width: "250px",
                marginTop: "10px",
              }}
            >
              <img
                src="https://www.lmlhomes.in/assets/images/tick-mark.jpg"
                height="12"
              />{" "}
              I authorise LML Homes LLP & its representatives to contact me with
              updates and notifications via Email / SMS /WhatsApp / Call. This
              will override DND/NDNC. I accept the{" "}
              <a href="https://www.lmlhomes.in/privacy-policy" target="_blank">
                privacy policy
              </a>
            </p>
            <div className={styles.submitBtnCntr}>
              <input
                type="submit"
                className={styles.submitBtn}
                value={loading ? "Submitting..." : "Submit"}
                disabled={loading} // Disable submit button when loading
              />
              {loading && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="19"
                  viewBox="0 0 25 19"
                  fill="none"
                >
                  <g clipPath="url(#clip0_581_3821)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.58764 10.7753L0.046382 18.4763C-0.032711 18.6073 -0.0129378 18.7632 0.0925197 18.8754C0.197977 18.9876 0.356163 19.0251 0.507758 18.9689L24.7696 9.82124C24.9146 9.76512 25.0002 9.64041 25.0002 9.49699C25.0002 9.35357 24.908 9.22886 24.7696 9.17274L0.507758 0.0250512C0.356163 -0.0310696 0.197977 0.00634429 0.0925197 0.118586C-0.0129378 0.230827 -0.032711 0.386718 0.046382 0.517667L4.58764 8.21868L16.0759 9.37228C16.1616 9.37851 16.2275 9.43463 16.2275 9.49699C16.2275 9.55935 16.1616 9.61547 16.0759 9.6217L4.58764 10.7753Z"
                      fill="#282828"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_581_3821">
                      <rect width="25" height="19" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
          </form>
        </Row>
      </Container>
    </section>
  );
}
