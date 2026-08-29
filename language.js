// ==========================================
// ALL TRANSLATIONS (എല്ലാ ഭാഷകളിലെയും വാക്കുകൾ)
// ==========================================
const words = {
    // COMMON & NAVIGATION
    app_title: { ml: "മേസ്തിരി പ്രോ", en: "Meshtri Pro", hi: "मेस्त्री प्रो", ta: "மேஸ்திரி ப்ரோ", kn: "ಮೇಸ್ತ್ರಿ ಪ್ರೋ", bn: "মেস্ত্রি প্রো", as: "মেস্ত্ৰী প্ৰ'" },
    welcome: { ml: "സ്വാഗതം", en: "Welcome", hi: "स्वागत है", ta: "வரவேற்கிறோம்", kn: "ಸ್ವಾಗತ", bn: "স্বাগতম", as: "স্বাগতম" },
    home: { ml: "🏠 ഹോം", en: "🏠 Home", hi: "🏠 होम", ta: "🏠 முகப்பு", kn: "🏠 ಹೋಮ್", bn: "🏠 হোম", as: "🏠 হোম" },
    save: { ml: "സേവ് ചെയ്യുക", en: "Save", hi: "सहेजें", ta: "சேமி", kn: "ಉಳಿಸಿ", bn: "সংরক্ষণ করুন", as: "সংৰক্ষণ কৰক" },
    edit: { ml: "എഡിറ്റ്", en: "Edit", hi: "संपादित करें", ta: "திருத்து", kn: "ಸಂಪಾದಿಸಿ", bn: "এডিট", as: "সম্পাদনা" },
    delete: { ml: "ഡിലീറ്റ്", en: "Delete", hi: "हटाएं", ta: "நீக்கு", kn: "ಅಳಿಸಿ", bn: "মুছুন", as: "মচি পেলাওক" },
    cancel: { ml: "റദ്ദാക്കുക", en: "Cancel", hi: "रद्द करें", ta: "ரத்து செய்", kn: "ರದ್ದುಮಾಡಿ", bn: "বাতিল", as: "বাতিল" },
    view: { ml: "▼ കാണുക", en: "▼ View", hi: "▼ देखें", ta: "▼ பார்க்க", kn: "▼ ವೀಕ್ಷಿಸಿ", bn: "▼ দেখুন", as: "▼ চাওক" },
    date: { ml: "തീയതി", en: "Date", hi: "तिथि", ta: "தேதி", kn: "ದಿನಾಂಕ", bn: "তারিখ", as: "তাৰিখ" },
    contact: { ml: "📇 കോൺടാക്റ്റ്", en: "📇 Contact", hi: "📇 संपर्क", ta: "📇 தொடர்புகள்", kn: "📇 ಸಂಪರ್ಕ", bn: "📇 পরিচিতি", as: "📇 যোগাযোগ" },
    total: { ml: "ആകെ", en: "Total", hi: "कुल", ta: "மொத்தம்", kn: "ಒಟ್ಟು", bn: "মোট", as: "মুঠ" },
    balance: { ml: "ബാക്കി", en: "Balance", hi: "बकाया", ta: "மீதி", kn: "ಬಾಕಿ", bn: "বকেয়া", as: "বাকী" },
    status: { ml: "സ്റ്റാറ്റസ്", en: "Status", hi: "स्थिति", ta: "நிலை", kn: "ಸ್ಥಿತಿ", bn: "സ്റ്റാറ്റസ്", as: "স্থিতি" },
    
    // INDEX & LOGIN & REGISTRATION
    mainTitle: { ml: "നിർമ്മാണ മാനേജർ", en: "Construction Manager", hi: "निर्माण मैनेजर", ta: "கட்டுமான மேலாளர்", kn: "ನಿರ್ಮಾಣ ಮ್ಯಾನೇಜರ್", bn: "নির্মাণ ম্যানেজার", as: "নিৰ্মাণ মেনেজাৰ" },
    appSubtitle: { ml: "പണികളും കണക്കുകളും ഇനി വിരൽത്തുമ്പിൽ", en: "Works and accounts at your fingertips", hi: "काम और हिसाब अब उंगलियों पर", ta: "வேலைகளும் கணக்குகளும் உங்கள் விரல் நுனியில்", kn: "ಕೆಲಸಗಳು ಮತ್ತು ಲೆಕ್ಕಗಳು ನಿಮ್ಮ ಬೆರಳ ತುದಿಯಲ್ಲಿ", bn: "কাজ এবং হিসাব এখন হাতের নাগালে", as: "কাম আৰু হিচাপ এতিয়া আপোনাৰ আঙুলিৰ মূৰত" },
    regTitle: { ml: "പുതിയ രജിസ്ട്രേഷൻ", ta: "புதிய பதிவு", kn: "ಹೊಸ ನೋಂದಣಿ", hi: "नया पंजीकरण", en: "New Registration" },
    regSubtitle: { ml: "വിവരങ്ങൾ നൽകി പുതിയ അക്കൗണ്ട് ഉണ്ടാക്കാം", ta: "விவரங்களை உள்ளிட்டு புதிய கணக்கை உருவாக்கலாம்", kn: "ವಿವರಗಳನ್ನು ನೀಡಿ ಹೊಸ ಖಾತೆಯನ್ನು ರಚಿಸಿ", hi: "विवरण देकर नया खाता बनाएं", en: "Create a new account by providing details" },
    mesthriNameLabel: { ml: "മേസ്തിരിയുടെ പേര്", ta: "மேஸ்திரியின் பெயர்", kn: "ಮೇಸ್ತ್ರಿಯ ಹೆಸರು", hi: "मेस्त्री का नाम", en: "Mesthri Name" },
    phoneLabel: { ml: "ഫോൺ നമ്പർ", ta: "தொலைபேசி எண்", kn: "ಫೋನ್ ಸಂಖ್ಯೆ", hi: "फोन नंबर", en: "Phone Number" },
    phonePlaceholder: { ml: "10 അക്ക ഫോൺ നമ്പർ", ta: "10 இலக்க தொலைபேசி எண்", kn: "10 ಅಂಕಿಯ ಫೋನ್ ಸಂಖ್ಯೆ", hi: "10 अंकों का फोन नंबर", en: "10-digit phone number" },
    passwordLabel: { ml: "പാസ്‌വേർഡ്", ta: "கடவுச்சொல்", kn: "ಪಾಸ್‌ವರ್ಡ್", hi: "पासवर्ड", en: "Password" },
    registerSubmitBtn: { ml: "അക്കൗണ്ട് രജിസ്റ്റർ ചെയ്യാം", ta: "கணக்கை பதிவு செய்க", kn: "ಖಾತೆಯನ್ನು ನೋಂದಾಯಿಸಿ", hi: "खाता रजिस्टर करें", en: "Register Account" },
    hasAccountText: { ml: "അക്കൗണ്ട് ഉണ്ടോ?", ta: "கணக்கு உள்ளதா?", kn: "ಖಾತೆ ಇದೆಯೇ?", hi: "खाता है?", en: "Already have an account?" },
    loginLinkText: { ml: "ഇവിടെ ലോഗിൻ ചെയ്യാം", ta: "உள்நுழைக", kn: "ಇಲ್ಲಿ ಲಾಗಿನ್ ಮಾಡಿ", hi: "यहाँ लॉगिन करें", en: "Login here" },
    
    loginTitle: { ml: "ലോഗിൻ ചെയ്യുക", en: "Login", hi: "लॉगिन करें", ta: "உள்நுழைக", kn: "ಲಾಗಿನ್ ಮಾಡಿ", bn: "লগইন করুন", as: "লগইন কৰক" },
    loginSubtitle: { ml: "നിങ്ങളുടെ അക്കൗണ്ടിലേക്ക് സ്വാഗതം", en: "Welcome to your account", hi: "आपके खाते में स्वागत है", ta: "உங்கள் கணக்கிற்கு வரவேற்கிறோம்", kn: "ನಿಮ್ಮ ಖಾತೆಗೆ ಸ್ವಾಗತ", bn: "আপনার অ্যাকাউন্টে স্বাগতম", as: "আপোনাৰ একাউন্টলৈ স্বাগতম" },
    usernameLabel: { ml: "യൂസർനെയിം (പേര്)", en: "Username (Name)", hi: "यूज़रनेम (नाम)", ta: "பயனர் பெயர் (பெயர்)", kn: "ಬಳಕೆದಾರ ಹೆಸರು (ಹೆಸರು)", bn: "ইউজারনেম (নাম)", as: "ব্যৱহাৰকাৰীৰ নাম" },
    usernamePlaceholder: { ml: "നിങ്ങളുടെ പേര് നൽകുക", en: "Enter your name", hi: "अपना नाम दर्ज करें", ta: "உங்கள் பெயரை உள்ளிடவும்", kn: "ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ", bn: "আপনার নাম লিখুন", as: "আপোনাৰ নাম লিখক" },
    passwordPlaceholder: { ml: "പാസ്‌വേർഡ് നൽകുക", en: "Enter password", hi: "पासवर्ड दर्ज करें", ta: "கடவுச்சொல்லை உள்ளிடவும்", kn: "ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ", bn: "পাসওয়ার্ড লিখুন", as: "পাছৱৰ্ড লিখক" },
    passwordNote: { ml: "ശ്രദ്ധിക്കുക: പാസ്‌വേർഡിൽ കുറഞ്ഞത് 6 അക്കങ്ങളോ അക്ഷരങ്ങളോ ഉണ്ടായിരിക്കണം.", en: "Note: Password must be at least 6 characters.", hi: "ध्यान दें: पासवर्ड कम से कम 6 अंकों या अक्षरों का होना चाहिए।", ta: "குறிப்பு: கடவுச்சொல் குறைந்தது 6 எழுத்துக்களைக் கொண்டிருக்க வேண்டும்.", kn: "ಸೂಚನೆ: ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ 6 ಅಕ್ಷರಗಳನ್ನು ಹೊಂದಿರಬೇಕು.", bn: "মনে রাখবেন: পাসওয়ার্ডে কমপক্ষে ৬টি অক্ষর বা সংখ্যা থাকতে হবে.", as: "মন কৰিব: পাছৱৰ্ডত কমপক্ষে ৬টা আখৰ বা সংখ্যা থাকিব লাগিব।" },
    loginBtn: { ml: "ലോഗിൻ ചെയ്യാം", en: "Login", hi: "लॉगिन करें", ta: "உள்நுழைக", kn: "ಲಾಗಿನ್ ಮಾಡಿ", bn: "লগইন করুন", as: "লগইন কৰক" },
    forgotPassword: { ml: "പാസ്‌വേർഡ് മറന്നുപോയോ?", en: "Forgot Password?", hi: "पासवर्ड भूल गए?", ta: "கடவுச்சொல் மறந்துவிட்டதா?", kn: "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರುವಿರಾ?", bn: "পাসওয়ার্ড ভুলে গেছেন?", as: "পাছৱৰ্ড পাহৰি গ'ল നെকি?" },
    noAccountText: { ml: "അക്കൗണ്ട് ഇല്ലെങ്കിൽ?", en: "Don't have an account?", hi: "खाता नहीं है?", ta: "கணக்கு இல்லையா?", kn: "ಖಾತೆ ಇಲ್ಲವೇ?", bn: "অ্যাকাউন্ট নেই?", as: "একাউন্ট নাইনে?" },
    registerBtn: { ml: "പുതിയ രജിസ്ട്രേഷൻ", en: "New Registration", hi: "नया पंजीकरण", ta: "புதிய பதிவு", kn: "ಹೊಸ ನೋಂದಣಿ", bn: "নতুন নিবন্ধন", as: "নতুন পঞ্জীয়ন" },
    footerCredit: { ml: "മേസ്തിരിമാർക്കായി നിർമ്മിച്ചത് ❤️ കേരളം", en: "Built for Mestiris ❤️ Kerala", hi: "मेस्त्रियों के लिए निर्मित ❤️ केरल", ta: "மேஸ்திரிகளுக்காக உருவாக்கப்பட்டது ❤️ கேரளா", kn: "ಮೇಷ್ತ್ರಿಗಳಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ ❤️ ಕೇರಳ", bn: "মিস্ত্রিদের জন্য তৈরি ❤️ কেরালা", as: "মিস্ত্ৰীসকলৰ বাবে নিৰ্মিত ❤️ কেৰালা" }
};

// ==========================================
// UNIVERSAL LANGUAGE SWITCHER FUNCTION (DATA-KEY BASED)
// ==========================================
window.switchLanguage = function(langCode) {
    if (!langCode) {
        langCode = localStorage.getItem('selectedLang') || 'ml';
    }
    
    // 1. തിരഞ്ഞെടുക്കുന്ന ഭാഷ മെമ്മറിയിൽ സേവ് ചെയ്യുന്നു
    localStorage.setItem('selectedLang', langCode);

    // 2. data-key ഉള്ള എലമെന്റുകൾ മാത്രം കൃത്യമായി മാറ്റുന്നു
    if (typeof words !== 'undefined') {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (words[key] && words[key][langCode]) {
                element.innerText = words[key][langCode];
            }
        });

        // 3. പ്ലെയ്‌സ്‌ഹോളർ ഉള്ള ഇൻപുട്ടുകൾ മാറ്റുന്നു
        document.querySelectorAll('[data-key-placeholder]').forEach(input => {
            const key = input.getAttribute('data-key-placeholder');
            if (words[key] && words[key][langCode]) {
                input.placeholder = words[key][langCode];
            }
        });
    }

    // 4. ഡ്രോപ്പ്ഡൗൺ ഹൈലൈറ്റ് മാറ്റാൻ
    document.querySelectorAll('.lang-option').forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick') || '';
        if (onclickAttr.includes(langCode)) {
            btn.className = "lang-option w-full text-left px-4 py-2 bg-amber-500 text-slate-950 font-black rounded-lg transition-all shadow-md";
        } else {
            btn.className = "lang-option w-full text-left px-4 py-2 text-gray-300 hover:bg-slate-700/60 rounded-lg transition-all font-medium";
        }
    });

    const dropdown = document.getElementById('langDropdown');
    if (dropdown && !dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
    }
};

window.changeLanguage = window.switchLanguage;

window.toggleLangMenu = function(e) {
    if (e && typeof e.stopPropagation === 'function') e.stopPropagation();
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
};

// പേജ് ലോഡ് ആകുമ്പോൾ സേവ് ചെയ്ത ഭാഷ ഓട്ടോമാറ്റിക് ആഡ് ചെയ്യാൻ
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('selectedLang') || 'ml';
    window.switchLanguage(savedLang);
});
