import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD2HrSmh_ySCw3ld4Ol5Sjhwb7ueL9IU8o",
    authDomain: "lmlhomesotpintegration.firebaseapp.com",
    projectId: "lmlhomesotpintegration",
    storageBucket: "lmlhomesotpintegration.appspot.com",
    messagingSenderId: "324690088277",
    appId: "1:324690088277:web:52debe7ffc75f57f001fdc",
    measurementId: "G-LBT5HBN06G"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
