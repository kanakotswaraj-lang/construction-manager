export function setupHeader(containerId, showWelcome = false, userName = "") {
    const currentLang = localStorage.getItem('selectedLang') || 'ml';
    const name = userName || localStorage.getItem('userName') || '';

    // ഓരോ ഭാഷയ്ക്കുമുള്ള പേരുകൾ (Titles & Subtitles)
    const translations = {
        ml: { title: "മേസ്തിരി പ്രോ", subtitle: "Smart Site Manager", welcome: "സ്വാഗതം" },
        en: { title: "Mestiri Pro", subtitle: "Smart Site Manager", welcome: "Welcome" },
        hi: { title: "मेस्त्री प्रो", subtitle: "स्मार्ट साइट मैनेजर", welcome: "स्वागत है" },
        ta: { title: "மேஸ்திரி ப்ரோ", subtitle: "ஸ்மார்ட் தள மேலாளர்", welcome: "வரவேற்கிறோம்" },
        kn: { title: "ಮೇಸ್ತ್ರಿ ಪ್ರೋ", subtitle: "ಸ್ಮಾರ್ಟ್ ಸೈಟ್ ಮ್ಯಾನೇಜರ್", welcome: "ಸ್ವಾಗತ" },
        bn: { title: "মেস্ত্রি প্রো", subtitle: "স্মার্ট সাইট ম্যানেজার", welcome: "স্বাগত" },
        as: { title: "মিস্ত্ৰী প্ৰ' ", subtitle: "স্মাৰ্ট চাইট মেনেজাৰ", welcome: "স্বাগতম" }
    };

    // നിലവിലുള്ള ഭാഷ തിരഞ്ഞെടുക്കുന്നു (ഇല്ലെങ്കിൽ മലയാളം എടുക്കും)
    const t = translations[currentLang] || translations['ml'];

    const headerHTML = `
    <div class="flex flex-col gap-2 w-full mb-3">
        <div class="flex items-center justify-between bg-gradient-to-r from-[#2c1810] via-[#3d2314] to-[#2c1810] text-amber-200 px-6 py-3.5 rounded-full border-2 border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.5)] w-full relative">
            
            <div class="flex items-center gap-3.5">
                <img src="icon.png" alt="Logo" class="rounded-full object-cover border-2 border-amber-400 shadow-md flex-shrink-0" style="width: 48px; height: 48px;">
                <div class="text-left">
                    <span class="text-xl font-black text-amber-300 tracking-wide block leading-tight">${t.title}</span>
                    <span class="text-[10px] font-bold text-amber-400 tracking-wider uppercase">${t.subtitle}</span>
                </div>
            </div>

            <div class="relative flex items-center gap-2 bg-amber-500/20 px-3 py-1.5 rounded-2xl border border-amber-400/60 shadow-inner">
                <span class="text-base animate-pulse">🌐</span>
                <select id="langSelectDropdown" onchange="window.changeLanguageFromDropdown(this.value)" class="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 px-3 py-1.5 rounded-xl text-xs font-extrabold shadow-md shadow-amber-950/50 transition cursor-pointer outline-none border border-white">
                    <option value="ml" class="bg-amber-100 text-slate-950 font-bold py-1" ${currentLang === 'ml' ? 'selected' : ''}>മലയാളം</option>
                    <option value="en" class="bg-amber-100 text-slate-950 font-bold py-1" ${currentLang === 'en' ? 'selected' : ''}>English</option>
                    <option value="hi" class="bg-amber-100 text-slate-950 font-bold py-1" ${currentLang === 'hi' ? 'selected' : ''}>हिंदी</option>
                    <option value="ta" class="bg-amber-100 text-slate-950 font-bold py-1" ${currentLang === 'ta' ? 'selected' : ''}>தமிழ்</option>
                    <option value="kn" class="bg-amber-100 text-slate-950 font-bold py-1" ${currentLang === 'kn' ? 'selected' : ''}>ಕನ್ನಡ</option>
                    <option value="bn" class="bg-amber-100 text-slate-950 font-bold py-1" ${currentLang === 'bn' ? 'selected' : ''}>বাংলা</option>
                    <option value="as" class="bg-amber-100 text-slate-950 font-bold py-1" ${currentLang === 'as' ? 'selected' : ''}>অসমীয়া</option>
                </select>
            </div>

        </div>

        <div class="flex items-center justify-center bg-gradient-to-r from-blue-900 via-sky-800 to-blue-900 text-cyan-200 px-6 py-3 rounded-full border-2 border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.4)] w-full text-center font-bold text-base">
            ${t.welcome}, ${name}
        </div>
    </div>`;

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = headerHTML;
    }
}

// ഭാഷ മാറ്റുമ്പോൾ സേവ് ചെയ്ത് പേജ് റിഫ്രഷ് ചെയ്യുന്ന ഫംഗ്ഷൻ
window.changeLanguageFromDropdown = function(selectedLang) {
    localStorage.setItem('selectedLang', selectedLang);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: selectedLang }));
    location.reload();
};
