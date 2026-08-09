import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const 
// ഫയർബേസ് ഇനിഷ്യലൈസ് ചെയ്യുക
const app = initializeApp(firebaseConfig);

// ഓൺലൈൻ മാത്രം സപ്പോർട്ട് ചെയ്യുന്ന സ്റ്റാൻഡേർഡ് ഫയർബേസ് ഡാറ്റാബേസ് കണക്ഷൻ
const db = getFirestore(app);

export { db };
