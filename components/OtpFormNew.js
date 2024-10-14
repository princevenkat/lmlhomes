import { useState } from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import firebase from '@/components/Firebase/index';
import { toast, Toaster } from "react-hot-toast";

export default function OtpFormNew({ closeForm, onFormSubmit }) {

    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otpVerificationCode, setOtpVerificationCode] = useState('');
    const [verificationId, setVerificationId] = useState('');

    const handleSendCode = () => {
        setLoading(true);

        const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('send-code-button', {
            size: 'invisible',
        });

        const formatedPhoneNumber = "+" + phoneNumber;

        firebase.auth().signInWithPhoneNumber(formatedPhoneNumber, recaptchaVerifier)
            .then((verificationId) => {
                // console.log(verificationId, 'verificationId');
                setVerificationId(verificationId);
                setLoading(false);
                setShowOTP(true);
                toast.success("OTP sent successfully!");
            })
            .catch((error) => {
                console.error(error, 'while handleSendCode ');
                setLoading(false);
            });
    };

    const handleVerifyCode = () => {
        setLoading(true);
        // console.log(verificationId + 'VerifyId' , verificationCode + ' verifyCode');
        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId.verificationId, otpVerificationCode);
        // console.log(credential , 'credentialinVerifyCode');
        firebase.auth().signInWithCredential(credential)
            .then((userCredential) => {
                // console.log(userCredential, 'User credential and successful authentication');
                setLoading(false);
                setUser(userCredential)
                onFormSubmit()
            })
            .catch((error) => {
                console.error(error, 'while handleVerifyCode ');
                setLoading(false);
            });
    };


    return (
        <section className="otpForm-section">

            <div className='otpFormCloseBtn' onClick={closeForm}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>

            <div>
                <Toaster toastOptions={{ duration: 4000 }} />
                <div id="recaptcha-container"></div>

                {user ? (
                    <div style={{ width: '200px', padding: '1rem' }}>
                        <p style={{textAlign: 'center', fontSize: '18px' , color: '#fff' , fontWeight: '500'}}>Thank You</p>
                    </div>
                ) : (
                    <div className="otpContainer">

                        {showOTP ? (
                            <>
                                <div className="">
                                    <BsFillShieldLockFill size={30} />
                                </div>

                                <label htmlFor="otp" className="otpTxt" >
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

                                <button onClick={handleVerifyCode} className="OtpHandleBTn" >
                                    {loading && (<CgSpinner size={20} className="mt-1 animate-spin" />)}
                                    <span>Verify OTP</span>
                                </button>

                            </>
                        ) : (
                            <>

                                <p className="verifyTxt">Verify Your Phone Number</p>

                                <PhoneInput country={"in"} value={phoneNumber} onChange={setPhoneNumber} />
<p style={{fontSize: '11px', color: '#fff', width: '300px', marginTop: '10px'}}><img src='https://www.lmlhomes.in/assets/images/tick-mark.jpg' height={12} /> I authorise LML Homes LLP & its representatives to contact me with updates and notifications via Email / SMS /WhatsApp / Call. This will override DND/NDNC. I accept the <a href='https://www.lmlhomes.in/privacy-policy' target='_blank' style={{color: '#fff'}}>privacy policy</a></p>
                                <button
                                    onClick={handleSendCode}
                                    id="send-code-button"
                                    className="OtpHandleBTn">
                                    {loading && (<CgSpinner size={20} className="mt-1 animate-spin" />)}
                                    <span>Send OTP</span>
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}

