// എല്ലാ ഭാഷകളിലേക്കുമുള്ള വാക്കുകളുടെ സമ്പൂർണ്ണ പട്ടിക (Dictionary)
const words = {
    "welcome": { 
        "en": "Welcome", 
        "ml": "സ്വാഗതം", 
        "ta": "வரவேற்பு", 
        "hi": "स्वागत है", 
        "kn": "ಸ್ವಾಗತ",
        "as": "স্বাগতম",
        "bn": "স্বাগত"
    },
    "income": { 
        "en": "Income", 
        "ml": "വരുമാനം", 
        "ta": "வருமானம்", 
        "hi": "आय", 
        "kn": "ಆದಾಯ",
        "as": "আক্বহ",
        "bn": "আয়"
    },
    "expense": { 
        "en": "Expense", 
        "ml": "ചെലവ്", 
        "ta": "செலவு", 
        "hi": "खर्च", 
        "kn": "ವೆಚ್ಚ",
        "as": "খৰচ",
        "bn": "খরচ"
    },
    "profit": { 
        "en": "Profit", 
        "ml": "ലാഭം", 
        "ta": "லாபம்", 
        "hi": "लाभ", 
        "kn": "ಲಾಭ",
        "as": "লাভ",
        "bn": "লাভ"
    },
    "loss_label": { 
        "en": "Loss", 
        "ml": "നഷ്ടം", 
        "ta": "நஷ்டம்", 
        "hi": "हानि", 
        "kn": "ನಷ್ಟ",
        "as": "লোকচান",
        "bn": "লোকসান"
    },
    "site_details": { 
        "en": "Site Details", 
        "ml": "സൈറ്റ് വിവരങ്ങൾ", 
        "ta": "தள விவரங்கள்", 
        "hi": "साइट विवरण", 
        "kn": "ಸೈಟ್ ವಿವರಗಳು",
        "as": "ছাইটৰ বিৱৰণ",
        "bn": "সাইটের বিবরণ"
    },
    "history_edit": { 
        "en": "History & Edit", 
        "ml": "കണക്ക് ഹിസ്റ്ററി & എഡിറ്റ്", 
        "ta": "வரலாறு & திருத்து", 
        "hi": "इतिहास और संपादित करें", 
        "kn": "ಇತಿಹಾಸ ಮತ್ತು ಸಂಪಾದನೆ",
        "as": "ইতিহাস আৰু সম্পাদনা",
        "bn": "ইতিহাস এবং সম্পাদনা"
    },
    "staff_salary": { 
        "en": "Staff Salary", 
        "ml": "ജീവനക്കാരുടെ ശമ്പളം", 
        "ta": "ஊழியர்களின் சம்பளம்", 
        "hi": "कर्मचारी वेतन", 
        "kn": "ಸಿಬ್ಬಂದಿ ವೇತನ",
        "as": "কৰ্মচাৰীৰ দৰমহা",
        "bn": "কর্মচারীর বেতন"
    },
    "rentals": { 
        "en": "Rental Equipment", 
        "ml": "വാടക ഉപകരണങ്ങൾ", 
        "ta": "வாடகை உபகரணங்கள்", 
        "hi": "किराये के उपकरण", 
        "kn": "ಬಾಡಿಗೆ ಉಪಕರಣಗಳು",
        "as": "ভাৰাতীয়া সঁজুলি",
        "bn": "ভাড়ার সরঞ্জাম"
    },
    "materials": { 
        "en": "Materials", 
        "ml": "മെറ്റീരിയൽസ്", 
        "ta": "பொருட்கள்", 
        "hi": "सामग्री", 
        "kn": "ಸಾಮಗ್ರಿ",
        "as": "সামগ্ৰী",
        "bn": "সামগ্রী"
    },
    "income_expense": { 
        "en": "Income & Expense", 
        "ml": "വരവ് - ചെലവ്", 
        "ta": "வரவு - செலவு", 
        "hi": "आय और व्यय", 
        "kn": "ಆದಾಯ ಮತ್ತು ವೆಚ್ಚ",
        "as": "আক্বহ আৰু খৰচ",
        "bn": "আয় ও খরচ"
    },
    "estimator": { 
        "en": "Material & Labor Estimator", 
        "ml": "മെറ്റീരിയൽ & ലേബർ എസ്റ്റിമേറ്റ്", 
        "ta": "மதிப்பீடு", 
        "hi": "सामग्री और श्रम अनुमान", 
        "kn": "ಅಂದಾಜು",
        "as": "সামগ্ৰী আৰু শ্ৰম অনুমান",
        "bn": "উপাদান এবং শ্রম অনুমান"
    },
    "search_placeholder": { 
        "en": "Search...", 
        "ml": "തിരയുക...", 
        "ta": "தேடவும்...", 
        "hi": "खोजें...", 
        "kn": "ಹುಡುಕಿ...",
        "as": "বিচাৰক...",
        "bn": "খুঁজুন..."
    },
    "add_worker": { 
        "en": "Add New Worker", 
        "ml": "പുതിയ തൊഴിലാളിയെ ചേർക്കുക", 
        "ta": "புதிய தொழிலாளியை சேர்க்கவும்", 
        "hi": "नया श्रमिक जोड़ें", 
        "kn": "ಹೊಸ ಕೆಲಸಗಾರರನ್ನು ಸೇರಿಸಿ",
        "as": "নতুন শ্ৰমিক যোগ কৰক",
        "bn": "নতুন শ্রমিক যোগ করুন"
    },
    "dashboard_btn": { 
        "en": "Dashboard", 
        "ml": "ഡാഷ്‌ബോർഡ്", 
        "ta": "முகப்பு", 
        "hi": "डैशबोर्ड", 
        "kn": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        "as": "ডেছবৰ্ড",
        "bn": "ড্যাশবোর্ড"
    },
    "balance_amount": { 
        "en": "Balance Amount", 
        "ml": "ബാലൻസ് തുക", 
        "ta": "மீதித் தொகை", 
        "hi": "शेष राशि", 
        "kn": "ಬಾಕಿ ಮೊತ್ತ",
        "as": "বাকী পৰিমাণ",
        "bn": "বাকি পরিমাণ"
    },
    "filter_active": { 
        "en": "Active", 
        "ml": "നടന്നുകൊണ്ടിരിക്കുന്നത്", 
        "ta": "நடப்பு", 
        "hi": "सक्रिय", 
        "kn": "ಸಕ್ರಿಯ",
        "as": "সক্ৰিয়",
        "bn": "সক্রিয়"
    },
    "filter_returned": { 
        "en": "Returned", 
        "ml": "തിരികെ നൽകിയത്", 
        "ta": "திரும்பப் பெறப்பட்டது", 
        "hi": "लौटाया गया", 
        "kn": "ಮರಳಿಸಲಾಗಿದೆ",
        "as": "ঘূৰাই দিয়া হৈছে",
        "bn": "ফেরত দেওয়া হয়েছে"
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

    // 1. ക്ലാസ് 'lang' ഉള്ള എല്ലാ ടെക്സ്റ്റുകളും മാറ്റുന്നു
    document.querySelectorAll('.lang').forEach(element => {
        let key = element.getAttribute('data-key'); 
        if (words[key] && words[key][lang]) {
            element.innerText = words[key][lang];
        }
    });

    // 2. സാധാരണ സെർച്ച് ബോക്സിന്റെ placeholder മാറാൻ
    const searchInput = document.getElementById('searchInput');
    if (searchInput && words['search_placeholder'] && words['search_placeholder'][lang]) {
        searchInput.placeholder = words['search_placeholder'][lang];
    }

    // 3. മറ്റ് ഇൻപുട്ട് ബോക്സുകളുടെ placeholder മാറാൻ (lang-placeholder ഉള്ളവ)
    document.querySelectorAll('.lang-placeholder').forEach(element => {
        let key = element.getAttribute('data-key-placeholder');
        if (words[key] && words[key][lang]) {
            element.placeholder = words[key][lang];
        }
    });

    // 4. ഡാറ്റ വീണ്ടും ലോഡ് ചെയ്യാൻ (പഴയ കണക്കുകൾ കാണാൻ)
    if (typeof loadData === 'function') {
        loadData();
    }
}
