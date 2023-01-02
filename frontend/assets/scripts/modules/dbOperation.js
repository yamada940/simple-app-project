import firebase from "firebase/compat/app";
// import { getFirestore } from "firebase/compat/firestore";
import "firebase/compat/firestore";

export function dbOperation(){

    // TODO: Replace the following with your app's Firebase project configuration
    // See: https://firebase.google.com/docs/web/learn-more#config-object
    const firebaseConfig = {
        apiKey: "AIzaSyCeiAgerHoiqBMmJQyIwWTlaQIHs3VJfRM",
        authDomain: "db-test-6a682.firebaseapp.com",
        projectId: "db-test-6a682",
        storageBucket: "db-test-6a682.appspot.com",
        messagingSenderId: "747176992339",
        appId: "1:747176992339:web:2b886d51f1151a8a2ab0a6",
        measurementId: "G-S8L5L31DJY"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);


    // Initialize Cloud Firestore and get a reference to the service
    const db = firebase.firestore();

    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}