// import React, { useState } from 'react';
// import firebase from '@/components/firebase';

// const PhoneAuth = () => {

//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [verificationCode, setVerificationCode] = useState('');
//   const [verificationId, setVerificationId] = useState('');

//   const handleSendCode = () => {

//     const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('send-code-button', {
//       size: 'invisible',
//     });


//     firebase.auth().signInWithPhoneNumber(formatedPhoneNumber, recaptchaVerifier)
//       .then((verificationId) => {

//         console.log(verificationId, 'verificationId');
//         setVerificationId(verificationId);
//       })
//       .catch((error) => {
//         console.error(error, 'while vhandleSendCode ');
//       });
//   };

//   const handleVerifyCode = () => {

//     // console.log(verificationId + 'VerifyId' , verificationCode + ' verifyCode');
//     const credential = firebase.auth.PhoneAuthProvider.credential(verificationId.verificationId, verificationCode);

//     // console.log(credential , 'credentialinVerifyCode');

//     firebase.auth().signInWithCredential(credential)
//       .then((userCredential) => {
//         console.log(userCredential, 'User credential and successful authentication');
//       })
//       .catch((error) => {
//         console.error(error, 'while handleVerifyCode ');
//       });
//   };

//   return (
//     <>
//       <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//       <button id="send-code-button" onClick={handleSendCode}>Send Code</button>
//       <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
//       <button onClick={handleVerifyCode}>Verify Code</button>
//     </>
//   );
// };

// export default PhoneAuth;
