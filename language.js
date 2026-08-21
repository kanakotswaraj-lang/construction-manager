// എല്ലാ ഭാഷകളിലേക്കുമുള്ള വാക്കുകളുടെ പട്ടിക (Dictionary)
const words = {
    "welcome": { 
        "en": "Welcome", 
        "ml": "സ്വാഗതം", 
        "ta": "வரவேற்பு", 
        "hi": "स्वागत है", 
        "kn": "ಸ್ವಾಗತ" 
    },
    "workers_title": { 
        "en": "Workers Accounts", 
        "ml": "തൊഴിലാളികളുടെ കണക്കുകൾ", 
        "ta": "தொழிலாளர்கள் கணக்குகள்", 
        "hi": "श्रमिक खाते", 
        "kn": "ಕೆಲಸಗಾರರ ಖಾತೆಗಳು" 
    },
    "workers_subtitle": { 
        "en": "Total workers and wages", 
        "ml": "ആകെ തൊഴിലാളികളും കൂലിയും", 
        "ta": "மொத்த தொழிலாளர்கள் மற்றும் ஊதியம்", 
        "hi": "कुल श्रमिक और वेतन", 
        "kn": "ಒಟ್ಟು ಕೆಲಸಗಾರರು ಮತ್ತು ವೇತನ" 
    },
    "search_placeholder": { 
        "en": "Search worker...", 
        "ml": "തൊഴിലാളിയെ തിരയുക...", 
        "ta": "தொழிலாளியை தேടவும்...", 
        "hi": "श्रमिक खोजें...", 
        "kn": "ಕೆಲಸಗಾರರನ್ನು ಹುಡುಕಿ..." 
    },
    "add_worker": { 
        "en": "Add New Worker", 
        "ml": "പുതിയ തൊഴിലാളിയെ ചേർക്കുക", 
        "ta": "புதிய தொழிலாளியை சேர்க்கவும்", 
        "hi": "नया श्रमिक जोड़ें", 
        "kn": "ಹೊಸ ಕೆಲಸಗಾರರನ್ನು ಸೇರಿಸಿ" 
    },
    "dashboard_btn": { 
        "en": "Dashboard", 
        "ml": "ഡാഷ്‌ബോർഡ്", 
        "ta": "முகப்பு", 
        "hi": "डैशबोर्ड", 
        "kn": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್" 
    }
};

// മെനു തുറക്കാനും അടയ്ക്കാനും ഉള്ള ഫങ്ഷൻ
function toggleLangMenu() {
    const menu = document.getElementById('langDropdown');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// ഭാഷ മാറ്റുന്നതിനുള്ള പ്രധാന ഫങ്ഷൻ
function switchLanguage(lang) {
    localStorage.setItem('selectedLang', lang); // യൂസർ തിരഞ്ഞെടുത്ത ഭാഷ സേവ് ചെയ്യുന്നു

    // ക്ലാസ് 'lang' ഉള്ള എല്ലാ ടെക്സ്റ്റുകളും മാറ്റുന്നു
    document.querySelectorAll('.lang').forEach(element => {
        let key = element.id;
        if (words[key] && words[key][lang]) {
            element.innerText = words[key][lang];
        }
    });

    // സെർച്ച് ബോക്സിന്റെ placeholder മാറാൻ
    const searchInput = document.getElementById('searchInput');
    if (searchInput && words['search_placeholder'] && words['search_placeholder'][lang]) {
        searchInput.placeholder = words['search_placeholder'][lang];
    }
}

// പേജ് ലോഡ് ചെയ്യുമ്പോഴും മറ്റ് പേജുകളിലേക്ക് പോകുമ്പോഴും സേവ് ചെയ്ത ഭാഷ ഓട്ടോമാറ്റിക്കായി സെറ്റ് ചെയ്യാൻ
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('selectedLang') || 'ml'; // ഡിഫോൾട്ട് മലയാളം
    switchLanguage(savedLang);
});
