import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyAuXYtWyaxAYgx709KWov9xULIjfBC5izU",
    authDomain: "react-redux-554f3.firebaseapp.com",
    databaseURL: "https://react-redux-554f3.firebaseio.com",
    projectId: "react-redux-554f3",
    storageBucket: "react-redux-554f3.appspot.com",
    messagingSenderId: "667581970280"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;