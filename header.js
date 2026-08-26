export function setupHeader(containerId, showWelcome = false, userName = "") {
    const headerHTML = `
    <div class="flex flex-col gap-2 w-full">
        <!-- ഹെഡറും ലോഗോയും -->
        <div class="flex items-center justify-between bg-amber-500/30 text-amber-300 px-6 py-3 rounded-full border-2 border-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.5)] w-full relative">
            <div class="flex items-center gap-4">
                <img src="icon.png" alt="മേസ്തിരി പ്രോ ലോഗോ" class="rounded-full object-cover border-2 border-amber-200 shadow-lg flex-shrink-0" style="width: 54px; height: 54px;">
                <div class="text-left">
                    <span class="text-xl font-black text-amber-300 tracking-wide block leading-tight">മേസ്തിരി പ്രോ</span>
                    <span class="text-[11px] font-bold text-blue-200 tracking-wider uppercase">Smart Site Manager</span>
                </div>
            </div>

            <!-- ☰ Lang ബട്ടൺ -->
            <div class="relative">
                <button onclick="window.toggleLangMenu(event)" class="p-2.5 bg-slate-900/80 hover:bg-slate-900 border border-amber-300/50 text-amber-300 rounded-xl text-sm font-bold shadow-md transition flex items-center gap-1.5 cursor-pointer">
                    ☰ <span class="text-xs font-black">Lang</span>
                </button>
            </div>
        </div>

        <!-- സ്വാഗതം ബോക്സ് -->
        ${showWelcome ? `
        <div class="w-full">
            <div class="w-full py-3 px-4 rounded-2xl text-center text-sm font-black tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-400/40 shadow-xl">
                <span id="loggedInMeshtri"><span class="lang" data-key="welcome">സ്വാഗതം</span>, ${userName}</span>
            </div>
        </div>` : ''}
    </div>`;

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = headerHTML;
    }
}

// 🟢 1. ഡ്രോപ്പ്ഡൗൺ ബോക്സ് നിർമ്മിക്കുന്നു (നേരിട്ട് റീഫ്രഷ് ആകുന്ന കോഡോടെ)
function ensureDropdownExists() {
    let dropdown = document.getElementById('langDropdown');
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = 'langDropdown';
        dropdown.className = 'hidden fixed bg-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl z-[99999] overflow-hidden py-1 w-44 backdrop-blur-xl';
        dropdown.innerHTML = `
            <div onclick="window.applyAndReload('ml')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">മലയാളം</div>
            <div onclick="window.applyAndReload('en')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">English</div>
            <div onclick="window.applyAndReload('ta')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">தமிழ்</div>
            <div onclick="window.applyAndReload('hi')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">हिन्दी</div>
            <div onclick="window.applyAndReload('kn')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">ಕನ್ನಡ</div>
            <div onclick="window.applyAndReload('as')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">অসমীয়া</div>
            <div onclick="window.applyAndReload('bn')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">বাংলা</div>
        `;
        document.body.appendChild(dropdown);
    }
    return dropdown;
}

// 🟢 2. മെനു തുറക്കാനും അടയ്ക്കാനും
window.toggleLangMenu = function(e) {
    if (e && typeof e.stopPropagation === 'function') e.stopPropagation();
    const dropdown = ensureDropdownExists();
    const btn = e ? (e.currentTarget || e.target) : null;

    if (dropdown.classList.contains('hidden')) {
        if (btn && typeof btn.getBoundingClientRect === 'function') {
            const rect = btn.getBoundingClientRect();
            dropdown.style.top = `${rect.bottom + 6}px`;
            dropdown.style.left = `${Math.max(10, rect.right - 176)}px`;
        }
        dropdown.classList.remove('hidden');
    } else {
        dropdown.classList.add('hidden');
    }
};

// 🟢 3. ഭാഷ തെരഞ്ഞെടുക്കുമ്പോൾ LocalStorage-ൽ വെച്ച് പേജ് റീഫ്രഷ് ചെയ്യുന്നു
window.applyAndReload = function(langCode) {
    localStorage.setItem('selectedLang', langCode);
    localStorage.setItem('lang', langCode);
    
    // പേജ് ഒപ്പമുള്ള ഭാഷയിൽ ലോഡ് ചെയ്യാൻ റീഫ്രഷ് ചെയ്യുന്നു
    window.location.reload();
};

// 🟢 4. പുറത്ത് ക്ലിക്ക് ചെയ്താൽ മെനു അടയാൻ
document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('button[onclick*="Lang"], button[onclick*="lang"], div[onclick*="Lang"], button[onclick*="toggleLangMenu"]');
    if (langBtn) {
        window.toggleLangMenu(e);
        return;
    }
    const dropdown = document.getElementById('langDropdown');
    if (dropdown && !dropdown.classList.contains('hidden') && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
}, true);
