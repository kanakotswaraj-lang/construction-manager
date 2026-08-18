// header.js
export function setupHeader(containerId) {
    const headerHTML = `
    <div class="flex items-center gap-4 bg-amber-500/30 text-amber-300 px-6 py-3 rounded-full border-2 border-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.5)] w-full">
        <img src="icon.png" alt="മേസ്തിരി പ്രോ ലോഗോ" class="rounded-full object-cover border-2 border-amber-200 shadow-lg flex-shrink-0" style="width: 54px; height: 54px;">
        <div class="text-left">
            <span class="text-xl font-black text-amber-300 tracking-wide block leading-tight">മേസ്തിരി പ്രോ</span>
            <span class="text-[11px] font-bold text-blue-200 tracking-wider uppercase">Smart Site Manager</span>
        </div>
    </div>`;

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = headerHTML;
    }
}
