import { store } from '../store.js';
import { showToast } from '../utils.js';

const bulanList = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'agu', 'sep', 'okt', 'nov', 'des'];

export function renderIuranTable() {
    const tbody = document.getElementById('iuran-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    store.iuranMatrix.forEach((userState, index) => {
        const warga = store.warga.find(item => item.id === userState.wargaId);
        if (!warga) return;

        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50 transition border-b border-slate-100";

        let htmlBulanan = '';
        bulanList.forEach(bln => {
            const valInput = userState.months ? (userState.months[bln] || '') : '';
            htmlBulanan += `
                <td class="text-center py-2 px-1">
                    <input type="text" class="month-input" data-val="${valInput}" value="${valInput}" maxlength="5">
                </td>
            `;
        });

        tr.innerHTML = `
            <td class="py-3 px-2 text-center text-slate-500 font-medium">${index + 1}</td>
            <td class="py-3 px-3 font-bold text-slate-900">${warga.nama}</td>
            <td class="py-3 px-2 text-center">
                <span class="px-2 py-0.5 text-[11px] font-bold bg-slate-100 border border-slate-300 text-slate-700 rounded-md">${userState.jenis}</span>
            </td>
            ${htmlBulanan}
            <td class="py-3 px-2 text-center">
                <button class="w-7 h-7 inline-flex items-center justify-center bg-amber-50 text-amber-600 rounded-lg text-xs">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}