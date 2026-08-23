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
    appId: "1:1060617901864:web:5ffb9378cf36bd6d35221d",
    measurementId: "G-J9Y5TW9D7T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const currentMeshtri = localStorage.getItem('userName') || "പൊതുമേസ്തിരി";

// ഭാഷ മാറ്റാനുള്ള ആഗോള ഫങ്ഷൻ
window.changeAppLanguage = (langCode) => {
    localStorage.setItem('selectedLang', langCode);
    if (window.switchLanguage) {
        window.switchLanguage(langCode);
    } else {
        applyLanguageTranslations();
    }
};

// പേജിലെ ടെക്സ്റ്റുകളും പ്ലേസ്‌ഹോൾഡറുകളും മാറ്റുന്ന ഫങ്ഷൻ (language.js ഉള്ള വാക്കുകൾ ഉപയോഗിക്കുന്നു)
function applyLanguageTranslations() {
    const currentLang = localStorage.getItem('selectedLang') || 'ml';
    
    // global words object ഉപയോഗിക്കുന്നു
    if (window.words) {
        document.querySelectorAll('[data-lang], .lang').forEach(el => {
            const key = el.getAttribute('data-lang') || el.getAttribute('data-key');
            if (window.words[key] && window.words[key][currentLang]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = window.words[key][currentLang];
                } else {
                    el.innerText = window.words[key][currentLang];
                }
            }
        });

        document.querySelectorAll('.lang-placeholder, [data-key-placeholder]').forEach(el => {
            const key = el.getAttribute('data-key-placeholder');
            if (window.words[key] && window.words[key][currentLang]) {
                el.placeholder = window.words[key][currentLang];
            }
        });
    }
}

// പേജ് ലോഡ് ആകുമ്പോൾ പ്രവർത്തിക്കുന്നവ
document.addEventListener("DOMContentLoaded", () => {
    // 1. ഹെഡർ സെറ്റപ്പ്
    if (typeof setupHeader === 'function') setupHeader('appHeader');
    
    // 2. ലോഗിൻ പേര് കാണിക്കാൻ
    const loggedInElem = document.getElementById('loggedInMeshtri');
    const welcomeWord = (window.words && window.words.welcome) ? (window.words.welcome[localStorage.getItem('selectedLang') || 'ml'] || "സ്വാഗതം") : "സ്വാഗതം";
    if (loggedInElem) loggedInElem.innerText = `${welcomeWord}, ${currentMeshtri}`;

    // 3. ഭാഷകൾ അപ്ലൈ ചെയ്യുക
    if (window.switchLanguage) {
        window.switchLanguage(localStorage.getItem('selectedLang') || 'ml');
    } else {
        applyLanguageTranslations();
    }

    // 4. ഓട്ടോമാറ്റിക് മൈക്ക് ബട്ടൺ ഇൻസെർഷൻ (SVG ഐക്കൺ സഹിതം)
    document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => {
        if (!input.id) return; 
        
        if (!input.parentNode.classList.contains('relative')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'relative flex items-center w-full';
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);
            
            const micBtn = document.createElement('button');
            micBtn.type = 'button';
            micBtn.onclick = () => window.startVoiceInputFor(input.id);
            
            micBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-cyan-400 hover:text-cyan-300 transition-colors drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v1a7 7 0 0 1-14 0v-1"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
            `;
            micBtn.className = 'absolute right-3.5 p-1 flex items-center justify-center z-10 cursor-pointer';
            
            // ഇൻപുട്ട് ടെക്സ്റ്റ് മൈക്കിൽ തടയാതിരിക്കാൻ പാഡിംഗ് നൽകുന്നു
            input.style.paddingRight = '45px';
            
            wrapper.appendChild(micBtn);
        }
    });
});

// വോയ്സ് ഇൻപുട്ട് ഫങ്ഷൻ
window.startVoiceInputFor = (fieldId) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("ബ്രൗസർ വോയ്സ് സപ്പോർട്ട് ചെയ്യുന്നില്ല!");
    
    const recognition = new SpeechRecognition();
    const currentLang = localStorage.getItem('selectedLang') || 'ml';
    
    // വോയ്സ് ഇൻപുട്ടിനായുള്ള ഭാഷ ക്രമീകരണം
    const langMap = {
        'en': 'en-US',
        'hi': 'hi-IN',
        'ta': 'ta-IN',
        'kn': 'kn-IN',
        'bn': 'bn-IN',
        'as': 'as-IN',
        'ml': 'ml-IN'
    };

    recognition.lang = langMap[currentLang] || 'ml-IN';

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
