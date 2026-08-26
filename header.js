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

            <!-- ഹെഡറിലെ Lang ബട്ടൺ -->
            <div class="relative">
                <button onclick="window.toggleLangMenu(event)" class="p-2.5 bg-slate-900/80 hover:bg-slate-900 border border-amber-300/50 text-amber-300 rounded-xl text-sm font-bold shadow-md transition flex items-center gap-1.5 cursor-pointer">
                    🌐 <span class="text-xs font-black">Lang</span>
                </button>
            </div>
        </div>
    </div>`;

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = headerHTML;
    }
}

// 🟢 ഡ്രോപ്പ്ഡൗൺ കാട്ടാനും ഒളിപ്പിക്കാനും മാത്രം (ബാക്കി പേജിന്റെ സ്വന്തം language.js നോക്കിക്കൊള്ളും)
window.toggleLangMenu = function(e) {
    if (e && typeof e.stopPropagation === 'function') e.stopPropagation();
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
};

// പുറത്തു ക്ലിക്ക് ചെയ്താൽ അടയ്ക്കാൻ
document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('button[onclick*="toggleLangMenu"], button[onclick*="Lang"]');
    if (langBtn) return;
    const dropdown = document.getElementById('langDropdown');
    if (dropdown && !dropdown.classList.contains('hidden') && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
}, true);
