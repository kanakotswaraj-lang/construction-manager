export function setupHeader(containerId, showWelcome = false, userName = "") {
    const currentLang = localStorage.getItem('selectedLang') || 'ml';

    const headerHTML = `
    <div class="flex flex-col gap-2 w-full">
        <!-- തിളക്കമുള്ള ഹെഡർ ബോക്സ് -->
        <div class="flex items-center justify-between bg-amber-950/90 text-amber-200 px-5 py-3 rounded-2xl border-2 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)] w-full relative">
            <div class="flex items-center gap-3">
                <img src="icon.png" alt="Logo" class="rounded-full object-cover border-2 border-amber-400 shadow-md flex-shrink-0" style="width: 45px; height: 45px;">
                <div class="text-left">
                    <span class="text-lg font-black text-amber-300 tracking-wide block leading-tight drop-shadow">മേസ്തിരി പ്രോ</span>
                    <span class="text-[10px] font-bold text-amber-400 tracking-wider uppercase drop-shadow-sm">Smart Site Manager</span>
                </div>
            </div>

            <!-- 7 ഭാഷകൾ അടങ്ങിയ ഡ്രോപ്പ്ഡൗൺ മെനു -->
            <div class="relative flex items-center">
                <select id="langSelectDropdown" onchange="window.changeLanguageFromDropdown(this.value)" class="px-2.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 border border-white/60 rounded-xl text-xs font-black shadow-lg shadow-amber-950/50 transition cursor-pointer outline-none">
                    <option value="ml" ${currentLang === 'ml' ? 'selected' : ''}>മലയാളം</option>
                    <option value="en" ${currentLang === 'en' ? 'selected' : ''}>English</option>
                    <option value="hi" ${currentLang === 'hi' ? 'selected' : ''}>हिंदी</option>
                    <option value="ta" ${currentLang === 'ta' ? 'selected' : ''}>தமிழ்</option>
                    <option value="te" ${currentLang === 'te' ? 'selected' : ''}>తెలుగు</option>
                    <option value="kn" ${currentLang === 'kn' ? 'selected' : ''}>ಕನ್ನಡ</option>
                    <option value="ar" ${currentLang === 'ar' ? 'selected' : ''}>العربية</option>
                </select>
            </div>
        </div>
    </div>`;

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = headerHTML;
    }
}

// ഡ്രോപ്പ്ഡൗണിൽ നിന്ന് ഏത് ഭാഷ തിരഞ്ഞെടുത്താലും അത് മാറ്റി സേവ് ചെയ്യുന്ന ഫംഗ്ഷൻ
window.changeLanguageFromDropdown = function(selectedLang) {
    localStorage.setItem('selectedLang', selectedLang);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: selectedLang }));
    location.reload();
};
