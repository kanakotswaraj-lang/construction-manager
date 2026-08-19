import { setupHeader } from './header.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

// ഫയർബേസ് കോൺഫിഗറേഷൻ
const firebaseConfig = {
    apiKey: "AIzaSyAJw47JuihhalCFvFAyrX_beM0iZZ0XltA",
    authDomain: "mesthri-app.firebaseapp.com",
    projectId: "mesthri-app",
    storageBucket: "mesthri-app.firebasestorage.app",
    messagingSenderId: "1060617901864",
    appId: "1:1060617901864:web:5ffb9378cf36bd6d35221d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const currentMeshtri = localStorage.getItem('userName') || "പൊതുമേസ്തിരി";

// പേജ് ലോഡ് ആകുമ്പോൾ പ്രവർത്തിക്കുന്നവ
document.addEventListener("DOMContentLoaded", () => {
    // 1. ഹെഡർ സെറ്റപ്പ്
    if (typeof setupHeader === 'function') setupHeader('appHeader');
    
    // 2. ലോഗിൻ പേര് കാണിക്കാൻ
    const loggedInElem = document.getElementById('loggedInMeshtri');
    if (loggedInElem) loggedInElem.innerText = "സ്വാഗതം, " + currentMeshtri;

    // 3. ഓട്ടോമാറ്റിക് മൈക്ക് ബട്ടൺ ഇൻസെർഷൻ
    document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => {
        if (!input.id) return; // ID ഇല്ലാത്ത ഇൻപുട്ടുകൾ ഒഴിവാക്കുന്നു
        const wrapper = document.createElement('div');
        wrapper.className = 'relative flex items-center';
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        
        const micBtn = document.createElement('button');
        micBtn.type = 'button';
        micBtn.innerHTML = '🎙️';
        micBtn.className = 'absolute right-3 text-cyan-400 p-2 hover:scale-110 transition-transform';
        micBtn.onclick = () => startVoiceInputFor(input.id);
        wrapper.appendChild(micBtn);
    });
});

// വോയ്സ് ഇൻപുട്ട് ഫങ്ഷൻ
window.startVoiceInputFor = (fieldId) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("ബ്രൗസർ വോയ്സ് സപ്പോർട്ട് ചെയ്യുന്നില്ല!");
    const recognition = new SpeechRecognition();
    recognition.lang = 'ml-IN'; 
    recognition.onresult = (e) => {
        const target = document.getElementById(fieldId);
        if (target) {
            target.value = e.results[0][0].transcript;
            target.dispatchEvent(new Event('input'));
        }
    };
    recognition.start();
};

// ടോസ്റ്റ് ഫങ്ഷൻ
window.showToast = (message) => {
    // നിങ്ങളുടെ പഴയ ടോസ്റ്റ് ലോജിക് ഇവിടെ തുടരാം
    console.log(message);
};
