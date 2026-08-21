// എല്ലാ ഭാഷകളിലേക്കുമുള്ള വാക്കുകളുടെ സമ്പൂർണ്ണ പട്ടിക (Dictionary)
const words = {
    "welcome": { 
        "en": "Welcome", 
        "ml": "സ്വാഗതം", 
        "ta": "வரவேற்பு", 
        "hi": "स्वागत है", 
        "kn": "ಸ್ವಾಗತ" 
    },
    "income": { 
        "en": "Income", 
        "ml": "വരുമാനം", 
        "ta": "வருமானம்", 
        "hi": "आय", 
        "kn": "ಆದಾಯ" 
    },
    "expense": { 
        "en": "Expense", 
        "ml": "ചെലവ്", 
        "ta": "செலவு", 
        "hi": "खर्च", 
        "kn": "ವೆಚ್ಚ" 
    },
    "profit": { 
        "en": "Profit", 
        "ml": "ലാഭം", 
        "ta": "லாபம்", 
        "hi": "लाभ", 
        "kn": "ಲಾಭ" 
    },
    "loss_label": { 
        "en": "Loss", 
        "ml": "നഷ്ടം", 
        "ta": "நஷ்டம்", 
        "hi": "हानि", 
        "kn": "ನಷ್ಟ" 
    },
    "site_details": { 
        "en": "Site Details", 
        "ml": "സൈറ്റ് വിവരങ്ങൾ", 
        "ta": "தள விவரங்கள்", 
        "hi": "साइट विवरण", 
        "kn": "ಸೈಟ್ ವಿವರಗಳು" 
    },
    "history_edit": { 
        "en": "History & Edit", 
        "ml": "കണക്ക് ഹിസ്റ്ററി & എഡിറ്റ്", 
        "ta": "வரலாறு & திருத்து", 
        "hi": "इतिहास और संपादित करें", 
        "kn": "ಇತಿಹಾಸ ಮತ್ತು ಸಂಪಾದನೆ" 
    },
    "staff_salary": { 
        "en": "Staff Salary", 
        "ml": "ജീവനക്കാരുടെ ശമ്പളം", 
        "ta": "ஊழியர்களின் சம்பளம்", 
        "hi": "कर्मचारी वेतन", 
        "kn": "ಸಿಬ್ಬಂದಿ ವೇತನ" 
    },
    "rentals": { 
        "en": "Rental Equipment", 
        "ml": "വാടക ഉപകരണങ്ങൾ", 
        "ta": "வாடகை உபகரணங்கள்", 
        "hi": "किराये के उपकरण", 
        "kn": "ಬಾಡಿಗೆ ಉಪಕರಣಗಳು" 
    },
    "materials": { 
        "en": "Materials", 
        "ml": "മെറ്റീരിയൽസ്", 
        "ta": "பொருட்கள்", 
        "hi": "सामग्री", 
        "kn": "ಸಾಮಗ್ರಿ" 
    },
    "income_expense": { 
        "en": "Income & Expense", 
        "ml": "വരവ് - ചെലവ്", 
        "ta": "வரவு - செலவு", 
        "hi": "आय और व्यय", 
        "kn": "ಆದಾಯ ಮತ್ತು ವೆಚ್ಚ" 
    },
    "estimator": { 
        "en": "Material & Labor Estimator", 
        "ml": "മെറ്റീരിയൽ & ലേബർ എസ്റ്റിമേറ്റ്", 
        "ta": "மதிப்பீடு", 
        "hi": "सामग्री और श्रम अनुमान", 
        "kn": "ಅಂದಾಜು" 
    },
    "search_placeholder": { 
        "en": "Search worker...", 
        "ml": "തൊഴിലാളിയെ തിരയുക...", 
        "ta": "தொழிலாளியை தேடவும்...", 
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
