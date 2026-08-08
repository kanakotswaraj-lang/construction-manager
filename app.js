import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAJw47JuihhalCFvFAyrX_beM0iZZ0XltA",
    authDomain: "mesthri-app.firebaseapp.com",
    projectId: "mesthri-app",
    storageBucket: "mesthri-app.appspot.com",
    messagingSenderId: "1060617901864",
    appId: "1:1060617901864:web:5ffb9378cf36bd6d352218"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function updateDashboard() {
    try {

// ഓഫ്‌ലൈൻ പെർസിസ്റ്റൻസ് (Offline Persistence) ആക്ടീവ് ചെയ്യുക
enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          console.log("Persistence failed: Multiple tabs open");
      } else if (err.code == 'unimplemented') {
          console.log("Persistence is not supported by this browser");
      }
  });

export { db };
