// modal.js
export function setupModal() {
    const modalHTML = `
    <style>
        @keyframes popUp {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .animate-pop-up {
            animation: popUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
    </style>
    <div id="customModal" class="hidden fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm transition-all">
        <div class="bg-slate-900 border-2 border-amber-400/50 rounded-3xl p-6 max-w-sm w-full shadow-[0_0_50px_rgba(251,191,36,0.3)] text-center space-y-4 animate-pop-up">
            <!-- ഐക്കൺ മാറാൻ പാകത്തിലുള്ള ID ഇവിടെ നൽകിയിട്ടുണ്ട് -->
            <div id="modalIcon" class="text-4xl">⚠️</div>
            <h3 id="modalTitle" class="text-xl font-black text-amber-300">ശ്രദ്ധിക്കുക</h3>
            <p id="modalMessage" class="text-sm font-bold text-blue-100 leading-relaxed"></p>
            <button id="closeModalBtn" class="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 p-3.5 rounded-2xl font-black text-base shadow-lg transition">ശരി</button>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('customModal');
    const closeBtn = document.getElementById('closeModalBtn');

    // ഇവിടെ ഐക്കൺ (icon) കൂടി സ്വീകരിക്കാൻ മാറ്റം വരുത്തിയിട്ടുണ്ട്
    window.showModal = (msg, title = "ശ്രദ്ധിക്കുക", icon = "⚠️") => {
        document.getElementById('modalIcon').innerText = icon;
        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalMessage').innerText = msg;
        modal.classList.remove('hidden');
    };

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}
