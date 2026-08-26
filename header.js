export function setupHeader(containerId, showWelcome = false, userName = "") {
    const headerHTML = `
    <div class="flex flex-col gap-2 w-full">
        <!-- ഹെഡറും ലോഗോയും Lang ബട്ടണും -->
        <div class="flex items-center justify-between bg-amber-500/30 text-amber-300 px-6 py-3 rounded-full border-2 border-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.5)] w-full relative">
            <div class="flex items-center gap-4">
                <img src="icon.png" alt="മേസ്തിരി പ്രോ ലോഗോ" class="rounded-full object-cover border-2 border-amber-200 shadow-lg flex-shrink-0" style="width: 54px; height: 54px;">
                <div class="text-left">
                    <span class="text-xl font-black text-amber-300 tracking-wide block leading-tight">മേസ്തിരി പ്രോ</span>
                    <span class="text-[11px] font-bold text-blue-200 tracking-wider uppercase">Smart Site Manager</span>
                </div>
            </div>

            <!-- ഹെഡറിലെ 3 വരയുള്ള ബട്ടൺ -->
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

// 🟢 1. ഡ്രോപ്പ്ഡൗൺ ബോക്സ് ഓട്ടോമാറ്റിക്കായി ബോഡിയിലേക്ക് ആഡ് ചെയ്യാനുള്ള ഫങ്ഷൻ
function ensureDropdownExists() {
    let dropdown = document.getElementById('langDropdown');
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = 'langDropdown';
        dropdown.className = 'hidden fixed bg-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl z-[99999] overflow-hidden py-1 w-44 backdrop-blur-xl';
        dropdown.innerHTML = `
            <div onclick="window.changeLanguage('ml')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">മലയാളം</div>
            <div onclick="window.changeLanguage('en')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">English</div>
            <div onclick="window.changeLanguage('ta')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">தமிழ்</div>
            <div onclick="window.changeLanguage('hi')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">हिन्दी</div>
            <div onclick="window.changeLanguage('kn')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">ಕನ್ನಡ</div>
            <div onclick="window.changeLanguage('as')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">অসমীয়া</div>
            <div onclick="window.changeLanguage('bn')" class="px-4 py-2.5 text-sm text-white hover:bg-amber-500 hover:text-slate-950 cursor-pointer font-bold transition">বাংলা</div>
        `;
        document.body.appendChild(dropdown);
    }
    return dropdown;
}

// 🟢 2. ഏതൊരു ലാംഗ്വേജ് ബട്ടൺ അമർത്തിയാലും കൃത്യമായി അതിന്റെ താഴെ മെനു തുറക്കാൻ
window.toggleLangMenu = function(e) {
    if (e && typeof e.stopPropagation === 'function') {
        e.stopPropagation();
    }
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

// 🟢 3. എല്ലാ പേജുകളിലെയും ടെക്സ്റ്റ് പരിഭാഷപ്പെടുത്തുന്ന മാസ്റ്റർ ഫങ്ഷൻ
window.changeLanguage = function(langCode) {
    localStorage.setItem('selectedLang', langCode);
    
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.add('hidden');

    // എല്ലാ .lang, .lang-placeholder ഘടകങ്ങളുടെയും ഭാഷ മാറ്റുന്നു
    document.querySelectorAll('.lang').forEach(el => {
        const key = el.getAttribute('data-key');
        if (typeof words !== 'undefined' && words[key] && words[key][langCode]) {
            el.innerText = words[key][langCode];
        }
    });

    document.querySelectorAll('.lang-placeholder').forEach(el => {
        const key = el.getAttribute('data-key');
        if (typeof words !== 'undefined' && words[key] && words[key][langCode]) {
            el.placeholder = words[key][langCode];
        }
    });

    // പേജ് സ്‌പെസിഫിക് ഫങ്ഷനുകൾ അപ്‌ഡേറ്റ് ചെയ്യൽ
    if (typeof window.switchLanguage === 'function' && window.switchLanguage !== window.changeLanguage) {
        window.switchLanguage(langCode);
    }
    if (typeof window.loadData === 'function') window.loadData();
    if (typeof window.renderList === 'function') window.renderList();
};

window.switchLanguage = window.changeLanguage;

// 🟢 4. ഡാഷ്‌ബോർഡിലെ 🌐 Lang ബട്ടണും ഹെഡറിലെ ☰ Lang ബട്ടണും തിരിച്ചറിഞ്ഞു പ്രവർത്തിക്കാൻ
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
