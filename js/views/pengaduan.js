import { store } from '../store.js';
import { showToast } from '../utils.js';

export function renderPengaduanList() {
    const container = document.getElementById('pengaduan-list-container');
    if (!container) return;
    container.innerHTML = '';

    store.pengaduan.forEach(p => {
        const card = document.createElement('div');
        card.className = "bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3 flex flex-col justify-between";
        card.innerHTML = `
            <div class="space-y-2">
                <div class="flex justify-between items-start">
                    <span class="text-xs text-slate-400"><i class="fa-solid fa-user text-slate-300 mr-1"></i>${p.pelapor}</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
                        p.status === 'Selesai' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }">${p.status}</span>
                </div>
                <h4 class="font-bold text-slate-800 text-sm">${p.subjek}</h4>
                <p class="text-xs text-slate-600 leading-relaxed">${p.isi}</p>
            </div>
        `;
        container.appendChild(card);
    });
}