export function setupHeader(containerId, showWelcome = false, userName = "") {
    const currentLang = localStorage.getItem('selectedLang') || 'ml';
    const name = userName || localStorage.getItem('userName') || '';

    const translations = {
        ml: { title: "മേസ്തിരി പ്രോ", subtitle: "Smart Site Manager", welcome: "സ്വാഗതം" },
        en: { title: "Mestiri Pro", subtitle: "Smart Site Manager", welcome: "Welcome" },
        hi: { title: "मेस्त्री प्रो", subtitle: "स्मार्ट साइट मैनेजर", welcome: "स्वागत है" },
        ta: { title: "மேஸ்திரி ப்ரோ", subtitle: "ஸ்மார்ட் தள மேலாளர்", welcome: "வரவேற்கிறோம்" },
        kn: { title: "ಮೇಸ್ತ್ರಿ ಪ್ರೋ", subtitle: "ಸ್ಮಾರ್ತ್ ಸೈಟ್ ಮ್ಯಾನೇಜർ", welcome: "ಸ್ವಾಗತ" },
        bn: { title: "মেস্ত্রি প্রো", subtitle: "স্মার্ট সাইট ম্যানেজার", welcome: "স্বাগত" },
        as: { title: "মিস্ত্ৰী প্ৰ' ", subtitle: "স্মাৰ্ট চাইট মেনেজাৰ", welcome: "স্বাগতম" }
    };

    const t = translations[currentLang] || translations['ml'];

    const headerHTML = `
    <div class="flex flex-col gap-2.5 w-full mb-4">
         <!-- നിലവിലുള്ള അതേ ഓവൽ ബോക്സ് സൈസ് -->
         <div class="flex items-center justify-center bg-gradient-to-r from-[#2c1810] via-[#3d2314] to-[#2c1810] text-amber-200 px-5 py-3 rounded-full border-2 border-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.6)] w-full relative">
   
            <!-- ലോഗോയും ടെക്സ്റ്റും ബോക്സിനുള്ളിൽ കൃത്യമായി ഒതുങ്ങുന്ന രീതിയിൽ -->
            <div class="flex items-center gap-3 w-full max-w-[310px] justify-center">
                <!-- 1. ബോക്സിനുള്ളിൽ ഭംഗിയായി ഒതുങ്ങുന്ന ലോഗോ (56px) -->
                <div class="flex items-center flex-shrink-0">
                    <img src="icon.png" alt="Logo" class="rounded-full object-cover border-2 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]" style="width: 56px; height: 56px;">
                </div>

                <!-- 2. പേരും ലാംഗ്വേജ് ഡ്രോപ്പ്ഡൗണും -->
                <div class="flex flex-col items-start overflow-hidden">
                    <div class="w-full overflow-hidden text-left">
                        <span class="text-sm sm:text-base font-black text-amber-300 tracking-wide block leading-tight truncate">${t.title}</span>
                        <span class="text-[9px] sm:text-[10px] font-bold text-amber-400 tracking-wider uppercase block truncate">${t.subtitle}</span>
                    </div>

                    <div class="relative flex items-center bg-amber-500/20 px-2 py-0.5 rounded-xl border border-amber-400/70 shadow-[0_0_15px_rgba(251,191,36,0.3)] mt-1 w-fit">
                        <select id="langSelectDropdown" onchange="window.changeLanguageFromDropdown(this.value)" class="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 px-2 py-0.5 rounded-lg text-xs font-black shadow-md transition cursor-pointer outline-none border border-slate-950 truncate">
                            <option value="ml" class="bg-white text-slate-950 font-black py-1" ${currentLang === 'ml' ? 'selected' : ''}>മലയാളം</option>
                            <option value="en" class="bg-white text-slate-950 font-black py-1" ${currentLang === 'en' ? 'selected' : ''}>English</option>
                            <option value="hi" class="bg-white text-slate-950 font-black py-1" ${currentLang === 'hi' ? 'selected' : ''}>हिंदी</option>
                            <option value="ta" class="bg-white text-slate-950 font-black py-1" ${currentLang === 'ta' ? 'selected' : ''}>தமிழ்</option>
                            <option value="kn" class="bg-white text-slate-950 font-black py-1" ${currentLang === 'kn' ? 'selected' : ''}>ಕನ್ನಡ</option>
                            <option value="bn" class="bg-white text-slate-950 font-black py-1" ${currentLang === 'bn' ? 'selected' : ''}>বাংলা</option>
                            <option value="as" class="bg-white text-slate-950 font-black py-1" ${currentLang === 'as' ? 'selected' : ''}>অসমীয়া</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>

        <!-- സ്വാഗത ബോക്സ് -->
        <div class="flex items-center justify-center bg-gradient-to-r from-blue-900 via-sky-800 to-blue-900 text-cyan-200 px-6 py-3 rounded-full border-2 border-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.5)] w-full text-center font-bold text-sm sm:text-base truncate">
            ${t.welcome}, ${name}
        </div>
    </div>`;

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = headerHTML;
    }
}

window.changeLanguageFromDropdown = function(selectedLang) {
    localStorage.setItem('selectedLang', selectedLang);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: selectedLang }));
    location.reload();
};

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('selectedLang') || 'ml';
    
    if (typeof words !== 'undefined') {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (words[key] && words[key][savedLang]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = words[key][savedLang];
                } else {
                    element.innerText = words[key][savedLang];
                }
            }
        });
    }
});
