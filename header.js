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

    // നിലവിലുള്ള ഭാഷ തിരഞ്ഞെടുക്കുന്നു
    const t = translations[currentLang] || translations['ml'];

    const headerHTML = `
    <div class="flex flex-col gap-2.5 w-full mb-4">
         <!-- മുകളിലെ മെയിൻ ഹെഡിംഗ് ബോക്സ് (പഴയതുപോലെ പെർഫെക്റ്റ് ഓവൽ ഷേപ്പും ഗ്ലോയും) -->
         <div class="flex flex-col items-center justify-center bg-gradient-to-r from-[#2c1810] via-[#3d2314] to-[#2c1810] text-amber-200 px-4 py-4 rounded-3xl border-2 border-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.6)] w-full relative gap-3">
   
            <!-- ലോഗോയും ആപ്പിന്റെ പേരും (സെന്റർ അലൈൻമെന്റ്) -->
            <div class="flex items-center justify-center gap-3 w-full">
                <img src="icon.png" alt="Logo" class="rounded-full object-cover border-2 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)] flex-shrink-0" style="width: 48px; height: 48px;">
                <div class="text-left">
                    <span class="text-base sm:text-lg font-black text-amber-300 tracking-wide block leading-tight truncate">${t.title}</span>
                    <span class="text-[10px] sm:text-[11px] font-bold text-amber-400 tracking-wider uppercase block truncate">${t.subtitle}</span>
                </div>
            </div>

            <!-- ഭാഷ മാറ്റുന്ന ഡ്രോപ്പ്ഡൗൺ ബോക്സ് കൃത്യം സെന്ററിൽ -->
            <div class="relative flex items-center justify-center gap-1.5 bg-amber-500/20 px-3 py-1.5 rounded-2xl border border-amber-400/70 shadow-[0_0_15px_rgba(251,191,36,0.3)] w-auto max-w-[200px]">
                <span class="text-xs">🌐</span>
                <select id="langSelectDropdown" onchange="window.changeLanguageFromDropdown(this.value)" class="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 px-3 py-1 rounded-xl text-xs font-black shadow-md transition cursor-pointer outline-none border-2 border-slate-950 truncate">
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

        <!-- സ്വാഗത ബോക്സ് (നിയോൺ ബ്ലൂ ഗ്ലോയോടുകൂടി) -->
        <div class="flex items-center justify-center bg-gradient-to-r from-blue-900 via-sky-800 to-blue-900 text-cyan-200 px-6 py-3 rounded-full border-2 border-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.5)] w-full text-center font-bold text-sm sm:text-base truncate">
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

// ആപ്പിന്റെ ഏത് പേജിലും data-key ഉള്ള വാക്കുകൾ ഓട്ടോമാറ്റിക്കായി മാറ്റുന്ന കോഡ്:
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
