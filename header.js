// header.js

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

            <!-- 3 വരകൾ ഉള്ള ലാംഗ്വേജ് മെനു ബട്ടൺ -->
            <div class="relative">
                <button onclick="window.toggleLangMenu()" class="p-2.5 bg-slate-900/80 hover:bg-slate-900 border border-amber-300/50 text-amber-300 rounded-xl text-sm font-bold shadow-md transition flex items-center gap-1.5 cursor-pointer">
                    ☰ <span class="text-xs font-black">Lang</span>
                </button>

                <!-- ഭാഷകളുടെ ഡ്രോപ്പ്ഡൗൺ ലിസ്റ്റ് -->
                <div id="langDropdown" class="hidden absolute right-0 mt-2 w-40 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-[9999] overflow-hidden py-1">
                    <button onclick="window.switchLanguage('ml'); window.toggleLangMenu();" class="w-full text-left px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition cursor-pointer">മലയാളം</button>
                    <button onclick="window.switchLanguage('en'); window.toggleLangMenu();" class="w-full text-left px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition cursor-pointer">English</button>
                    <button onclick="window.switchLanguage('ta'); window.toggleLangMenu();" class="w-full text-left px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition cursor-pointer">தமிழ்</button>
                    <button onclick="window.switchLanguage('hi'); window.toggleLangMenu();" class="w-full text-left px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition cursor-pointer">हिन्दी</button>
                    <button onclick="window.switchLanguage('kn'); window.toggleLangMenu();" class="w-full text-left px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition cursor-pointer">ಕನ್ನಡ</button>
                    <button onclick="window.switchLanguage('as'); window.toggleLangMenu();" class="w-full text-left px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition cursor-pointer">অসমীয়া</button>
                    <button onclick="window.switchLanguage('bn'); window.toggleLangMenu();" class="w-full text-left px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition cursor-pointer">বাংলা</button>
                </div>
            </div>
        </div>

        <!-- സ്വാഗതം ബോക്സ് -->
        ${showWelcome ? `
        <div class="w-full">
            <div class="w-full py-3 px-4 rounded-2xl text-center text-sm font-black tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-400/40 shadow-xl">
                <span id="loggedInMeshtri">സ്വാഗതം, ${userName}</span>
            </div>
        </div>` : ''}
    </div>`;

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = headerHTML;
    }
}

// ലാംഗ്വേജ് മെനു തുറക്കാൻ/അടക്കാൻ global ആക്കി മാറ്റുന്നു
window.toggleLangMenu = function() {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
};

// ഭാഷ മാറ്റാനുള്ള global ഫങ്ഷൻ
window.switchLanguage = function(langCode) {
    localStorage.setItem('selectedLang', langCode);
    localStorage.setItem('selectedLanguage', langCode);
    console.log("Language changed to: ", langCode);

    // പേജിൽ switchLanguage അല്ലെങ്കിൽ applyLanguage ഫങ്ഷൻ ഉണ്ടെങ്കിൽ അത് പ്രവർത്തിപ്പിക്കും
    if (typeof window.applyLanguage === 'function') {
        window.applyLanguage(langCode);
    } else if (typeof window.switchLanguagePage === 'function') {
        window.switchLanguagePage(langCode);
    } else {
        location.reload(); 
    }
};
