export function setupHeader(containerId, showWelcome = false, userName = "") {
    const headerHTML = `
    <div class="flex flex-col gap-2 w-full">
        <!-- തിളക്കമുള്ള ഹെഡർ ബോക്സ് -->
        <div class="flex items-center justify-between bg-amber-500/25 text-amber-200 px-6 py-3 rounded-full border-2 border-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.4)] w-full relative">
            <div class="flex items-center gap-4">
                <img src="icon.png" alt="Logo" class="rounded-full object-cover border-2 border-amber-300 shadow-md flex-shrink-0" style="width: 50px; height: 50px;">
                <div class="text-left">
                    <span class="text-xl font-black text-amber-300 tracking-wide block leading-tight drop-shadow">മേസ്തിരി പ്രോ</span>
                    <span class="text-[11px] font-bold text-amber-200 tracking-wider uppercase drop-shadow-sm">Smart Site Manager</span>
                </div>
            </div>

            <!-- Lang ബട്ടൺ -->
            <div class="relative">
                <button onclick="window.changeLanguageDirect()" class="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 border border-white/60 rounded-xl text-xs font-black shadow-lg shadow-amber-500/50 transition flex items-center gap-1.5 cursor-pointer active:scale-95">
                    🌐 <span>Lang</span>
                </button>
            </div>
        </div>
    </div>`;

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = headerHTML;
    }
}

// Lang ബട്ടൺ വർക്ക് ചെയ്യാനുള്ള പൊതുവായ ഫംഗ്ഷൻ
window.changeLanguageDirect = function() {
    let currentLang = localStorage.getItem('selectedLang') || 'ml';
    let newLang = currentLang === 'ml' ? 'en' : 'ml';
    
    // ലോക്കൽ സ്റ്റോറേജിൽ പുതിയ ഭാഷ സേവ് ചെയ്യുന്നു
    localStorage.setItem('selectedLang', newLang);
    
    // ഡാഷ്‌ബോർഡിലും മറ്റ് പേജുകൾക്കും സിഗ്നൽ അയക്കുന്നു
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: newLang }));
    
    // പേജ് റിഫ്രഷ് ചെയ്ത് ഭാഷ മാറ്റം നടപ്പിലാക്കുന്നു
    location.reload();
};
