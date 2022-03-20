import firebase from "firebase/app/package.json"
import "firebase/database"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCTvlxtSuYIbA1xDNdR4KaSMUOrruruKkA",
    authDomain: "calendar-app-50c09.firebaseapp.com",
    databaseURL: "https://calendar-app-50c09-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "calendar-app-50c09",
    storageBucket: "calendar-app-50c09.appspot.com",
    messagingSenderId: "251951774996",
    appId: "1:251951774996:web:988e4aeffe1e8bf0501601",
    measurementId: "G-D86Q69EH5L"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const databaseRef = firebase.database().ref()

export const eventsRef = databaseRef.child("calendar-app")

export default firebase