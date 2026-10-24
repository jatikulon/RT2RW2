import { store } from '../store.js';
import { maskNIK } from '../utils.js';

let unmaskedNiks = {};

export function renderWargaTable() {
    const query = document.getElementById('search-input')?.value.toLowerCase() || '';
    const filterStatus = document.getElementById('filter-status')?.value || '';
    const filterGender = document.getElementById('filter-gender')?.value || '';

    const list = store.warga.filter(item => {
        const matchQuery = item.nama.toLowerCase().includes(query) ||
                           item.nik.includes(query) ||
                           item.norumah.toLowerCase().includes(query) ||
                           item.pekerjaan.toLowerCase().includes(query);
        const matchStatus = filterStatus === '' || item.statustinggal === filterStatus;
        const matchGender = filterGender === '' || item.gender === filterGender;
        return matchQuery && matchStatus && matchGender;
    });

    const tbody = document.getElementById('warga-table-body');
    const gridContainer = document.getElementById('warga-grid-container');
    if (!tbody || !gridContainer) return;

    tbody.innerHTML = '';
    gridContainer.innerHTML = '';

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center py-6 text-slate-400 text-xs">Tidak ada data warga yang sesuai.</td></tr>`;
        return;
    }

    list.forEach(w => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50/80 transition border-b border-slate-100";
        tr.innerHTML = `
            <td class="py-3 px-4 flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center">
                    ${w.nama.charAt(0)}
                </div>
                <div>
                    <p class="font-bold text-slate-800 text-sm">${w.nama}</p>
                    <p class="text-[11px] text-slate-400">${w.gender} • ${w.hp}</p>
                </div>
            </td>
            <td class="py-3 px-4 font-mono text-xs">
                <div class="flex items-center space-x-1.5">
                    <span>${maskNIK(w.nik, unmaskedNiks, w.id)}</span>
                </div>
                <p class="text-[10px] text-slate-400">KK: ${w.kk}</p>
            </td>
            <td class="py-3 px-4">
                <span class="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md font-semibold text-xs">Blok ${w.norumah}</span>
            </td>
            <td class="py-3 px-4 text-xs text-slate-600">${w.pekerjaan}</td>
            <td class="py-3 px-4">
                <span class="px-2 py-0.5 rounded-full text-[11px] font-medium ${
                    w.statustinggal === 'Tetap' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                }">${w.statustinggal}</span>
            </td>
            <td class="py-3 px-4 text-center space-x-1">
                <span class="text-xs text-sky-600 cursor-pointer font-semibold">Detail</span>
            </td>
        `;
        tbody.appendChild(tr);
    });
}