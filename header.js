export function setupHeader(containerId, showWelcome = false, userName = "") {
    const currentLang = localStorage.getItem('selectedLang') || 'ml';

    const headerHTML = `
    <div class="flex flex-col gap-2 w-full mb-3">
        <!-- ലോഗിൻ പേജിലെ അതേ മനോഹരമായ ഓവൽ/ക്യാപ്സൂൾ ഷേപ്പ് (rounded-full) ഹെഡർ ബോക്സ് -->
        <div class="flex items-center justify-between bg-[#3d2314] text-amber-200 px-6 py-3 rounded-full border-2 border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.4)] w-full relative">
            
            <!-- ലോഗോയും പേരും -->
            <div class="flex items-center gap-3.5">
                <img src="icon.png" alt="Logo" class="rounded-full object-cover border-2 border-amber-400 shadow-md flex-shrink-0" style="width: 48px; height: 48px;">
                <div class="text-left">
                    <span class="text-xl font-black text-amber-300 tracking-wide block leading-tight">മേസ്തിരി പ്രോ</span>
                    <span class="text-[10px] font-bold text-amber-400 tracking-wider uppercase">Smart Site Manager</span>
                </div>
            </div>

            <!-- ലാംഗ്വേജ് ഐക്കണും 7 ഭാഷകൾ തിരഞ്ഞെടുക്കാനുള്ള ഡ്രോപ്പ്ഡൗണും -->
            <div class="relative flex items-center gap-1.5">
                <span class="text-base text-amber-300">🌐</span>
                <select id="langSelectDropdown" onchange="window.changeLanguageFromDropdown(this.value)" class="px-3 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 border border-white/70 rounded-xl text-xs font-black shadow-lg shadow-amber-950/50 transition cursor-pointer outline-none">
                    <option value="ml" ${currentLang === 'ml' ? 'selected' : ''}>മലയാളം</option>
                    <option value="en" ${currentLang === 'en' ? 'selected' : ''}>English</option>
                    <option value="hi" ${currentLang === 'hi' ? 'selected' : ''}>हिंदी</option>
                    <option value="ta" ${currentLang === 'ta' ? 'selected' : ''}>தமிழ்</option>
                    <option value="kn" ${currentLang === 'kn' ? 'selected' : ''}>ಕನ್ನಡ</option>
                    <option value="bn" ${currentLang === 'bn' ? 'selected' : ''}>বাংলা</option>
                    <option value="as" ${currentLang === 'as' ? 'selected' : ''}>অসমীয়া</option>
                </select>
            </div>

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
