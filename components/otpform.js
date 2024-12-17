import { useState, useEffect } from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import firebase from "@/components/Firebase/index";
import { toast, Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

export default function OtpFormNew({ closeForm, onFormSubmit }) {
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpVerificationCode, setOtpVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes] = useState("Download Brochure");
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

  const handleSendCode = () => {
    setLoading(true);

    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "send-code-button",
      {
        size: "invisible",
      }
    );

    const formatedPhoneNumber = "+" + phoneNumber;

    firebase
      .auth()
      .signInWithPhoneNumber(formatedPhoneNumber, recaptchaVerifier)
      .then((verificationId) => {
        setVerificationId(verificationId);
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.error(error, "while handleSendCode");
        setLoading(false);
      });
  };

  const handleVerifyCode = async () => {
    setLoading(true);

    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId.verificationId,
        otpVerificationCode
      );

      const userCredential = await firebase
        .auth()
        .signInWithCredential(credential);
      setUser(userCredential);

      // Prepare lead data for Sell.do

      const response = await fetch("/api/submitLead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          notes,
          campaignId,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Lead captured successfully!");
      } else {
        toast.error(
          `Failed to capture lead: ${result.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error(error, "while handleVerifyCode");
      toast.error("Verification or lead submission failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="otpForm-section">
      <div className="otpFormCloseBtn" onClick={closeForm}>
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

      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>

        {user ? (
          <div style={{ width: "200px", padding: "1rem" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#fff",
                fontWeight: "500",
              }}
            >
              Thank You
            </p>
          </div>
        ) : (
          <div className="otpContainer">
            {showOTP ? (
              <>
                <div className="">
                  <BsFillShieldLockFill size={30} />
                </div>

                <label htmlFor="otp" className="otpTxt">
                  Enter your OTP
                </label>

                <OtpInput
                  value={otpVerificationCode}
                  onChange={setOtpVerificationCode}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container"
                />

                <button onClick={handleVerifyCode} className="OtpHandleBTn">
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <p className="verifyTxt">Verify Your Phone Number</p>

                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />

                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />

                <PhoneInput
                  country={"in"}
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />

                <p
                  style={{
                    fontSize: "11px",
                    color: "#fff",
                    width: "300px",
                    marginTop: "10px",
                  }}
                >
                  <img
                    src="https://www.lmlhomes.in/assets/images/tick-mark.jpg"
                    height={12}
                  />{" "}
                  I authorise LML Homes LLP & its representatives to contact me
                  with updates and notifications via Email / SMS /WhatsApp /
                  Call. This will override DND/NDNC. I accept the{" "}
                  <a
                    href="https://www.lmlhomes.in/privacy-policy"
                    target="_blank"
                    style={{ color: "#fff !important" }}
                  >
                    privacy policy
                  </a>
                </p>

                <button
                  onClick={handleSendCode}
                  id="send-code-button"
                  className="OtpHandleBTn"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send OTP</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
