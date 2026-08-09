import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAJw47JuihhalCFvFAyrX_beM0iZZ0XltA",
    authDomain: "mesthri-app.firebaseapp.com",
    databaseURL: "https://mesthri-app-default-rtdb.firebaseio.com",
    projectId: "mesthri-app",
    storageBucket: "mesthri-app.firebasestorage.app",
    messagingSenderId: "1060617901864",
    appId: "1:1060617901864:web:5ffb9378cf36bd6d35221d",
    measurementId: "G-J9Y5TW9D7T"
};

// ഫയർബേസ് ഇനിഷ്യലൈസ് ചെയ്യുക
const app = initializeApp(firebaseConfig);

// ഓഫ്‌ലൈൻ കാഷെ (Offline Persistence) പൂർണ്ണ സപ്പോർട്ടോടെ ആക്ടീവ് ചെയ്യുന്നു
const db = initializeFirestore(app, {
    localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager()
    })
});

export { db };
