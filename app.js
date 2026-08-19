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
    measurementId: "G-J9Y5TW9D7T"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const currentMeshtri = localStorage.getItem('userName') || "പൊതുമേസ്തിരി";

// ബഹുഭാഷാ ഡാറ്റ (Translations)
const translations = {
    'ml': {
        welcome: "സ്വാഗതം",
        itemName: "ഉപകരണത്തിന്റെ പേര്",
        itemQty: "എത്ര എണ്ണം?",
        siteName: "സൈറ്റ് പേര്",
        shopName: "കടയുടെ പേര്",
        clientName: "നൽകിയ ആൾ",
        saveBtn: "വാടകയ്ക്ക് എടുത്തു ചേർക്കുക"
    },
    'en': {
        welcome: "Welcome",
        itemName: "Item Name",
        itemQty: "Quantity?",
        siteName: "Site Name",
        shopName: "Shop Name",
        clientName: "Given By",
        saveBtn: "Add Rental Item"
    },
    'hi': {
        welcome: "स्वागत है",
        itemName: "उपकरण का नाम",
        itemQty: "मात्रा?",
        siteName: "साइट का नाम",
        shopName: "दुकान का नाम",
        clientName: "किसने दिया",
        saveBtn: "किराए पर जोड़ें"
    }
};

// ഭാഷ മാറ്റാനുള്ള ഫങ്ഷൻ (എവിടെനിന്നും ഇത് വിളിക്കാം)
window.changeAppLanguage = (langCode) => {
    localStorage.setItem('appLang', langCode);
    applyLanguageTranslations();
};

// പേജിലെ ടെക്സ്റ്റുകളും പ്ലേസ്‌ഹോൾഡറുകളും തനിയെ മാറ്റുന്ന ഫങ്ഷൻ
function applyLanguageTranslations() {
    const currentLang = localStorage.getItem('appLang') || 'ml';
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.innerText = translations[currentLang][key];
            }
        }
    });
}

// പേജ് ലോഡ് ആകുമ്പോൾ പ്രവർത്തിക്കുന്നവ
document.addEventListener("DOMContentLoaded", () => {
    // 1. ഹെഡർ സെറ്റപ്പ്
    if (typeof setupHeader === 'function') setupHeader('appHeader');
    
    // 2. ലോഗിൻ പേര് കാണിക്കാൻ
    const loggedInElem = document.getElementById('loggedInMeshtri');
    if (loggedInElem) loggedInElem.innerText = "സ്വാഗതം, " + currentMeshtri;

    // 3. ഭാഷകൾ അപ്ലൈ ചെയ്യുക
    applyLanguageTranslations();

    // 4. ഓട്ടോമാറ്റിക് മൈക്ക് ബട്ടൺ ഇൻസെർഷൻ (എല്ലാ text/number ഇൻപുട്ടുകളിലും മൈക്ക് തനിയെ വരും)
    document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => {
        if (!input.id) return; // ID ഇല്ലാത്ത ഇൻപുട്ടുകൾ ഒഴിവാക്കുന്നു
        
        // നിലവിൽ വ്രാപ്പർ ഇല്ലെങ്കിൽ മാത്രം മൈക്ക് ആഡ് ചെയ്യുക (ഡബിൾ ആവാതിരിക്കാൻ)
        if (!input.parentNode.classList.contains('relative')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'relative flex items-center w-full';
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);
            
            const micBtn = document.createElement('button');
            micBtn.type = 'button';
            micBtn.innerHTML = '🎙️';
            micBtn.className = 'absolute right-3 text-cyan-400 p-2 hover:scale-110 transition-transform z-10';
            micBtn.onclick = () => startVoiceInputFor(input.id);
            wrapper.appendChild(micBtn);
        }
    });
});

// വോയ്സ് ഇൻപുട്ട് ഫങ്ഷൻ (തിരഞ്ഞെടുക്കുന്ന ഭാഷ അനുസരിച്ച് മൈക്ക് ലാംഗ്വേജ് മാറും)
window.startVoiceInputFor = (fieldId) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("ബ്രൗസർ വോയ്സ് സപ്പോർട്ട് ചെയ്യുന്നില്ല!");
    
    const recognition = new SpeechRecognition();
    const currentLang = localStorage.getItem('appLang') || 'ml';
    
    // ഭാഷയ്ക്കനുസരിച്ച് സ്പീച്ച് കോഡ് സെറ്റ് ചെയ്യുന്നു
    if (currentLang === 'en') {
        recognition.lang = 'en-US';
    } else if (currentLang === 'hi') {
        recognition.lang = 'hi-IN';
    } else {
        recognition.lang = 'ml-IN'; // ഡിഫോൾട്ട് മലയാളം
    }

    showToast("🎙️ സംസാരിക്കൂ...");

    recognition.onresult = (e) => {
        const target = document.getElementById(fieldId);
        if (target) {
            target.value = e.results[0][0].transcript;
            target.dispatchEvent(new Event('input'));
        }
        showToast("✓ കേട്ടെടുത്തു!");
    };
    recognition.start();
};

// ടോസ്റ്റ് ഫങ്ഷൻ
window.showToast = (message, isSuccess = true) => {
    const toast = document.getElementById('customToast');
    if (!toast) {
        console.log(message);
        return;
    }
    toast.innerText = message;
    toast.className = `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4 rounded-3xl shadow-2xl font-black text-base z-50 transition-all duration-300 text-center ${isSuccess ? 'bg-emerald-950 border-2 border-emerald-500 text-emerald-200' : 'bg-red-950 border-2 border-red-500 text-red-200'} opacity-100 scale-105`;
    setTimeout(() => {
        toast.className = "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border-2 border-amber-400 text-amber-300 px-8 py-4 rounded-3xl shadow-2xl font-black text-base z-50 transition-all duration-300 opacity-0 pointer-events-none text-center scale-100";
    }, 2500);
};
