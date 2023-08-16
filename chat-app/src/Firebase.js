import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyCOnwaxRwM4CLEs1AEhzpUQsz9mDnv5sBY",
    authDomain: "chat-app-b31d4.firebaseapp.com",
    databaseURL: "https://chat-app-b31d4-default-rtdb.firebaseio.com",
    projectId: "chat-app-b31d4",
    storageBucket: "chat-app-b31d4.appspot.com",
    messagingSenderId: "397112417923",
    appId: "1:397112417923:web:349e54dd2c6552b8b985b6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db