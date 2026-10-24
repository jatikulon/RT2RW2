import { store } from '../store.js';

const bulanList = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'agu', 'sep', 'okt', 'nov', 'des'];

export function renderArisanTable() {
    const tbody = document.getElementById('arisan-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    store.arisanMatrix.forEach((userState, index) => {
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
            <td class="py-3 px-2 text-center font-mono font-bold text-amber-700">Rp ${(userState.nominal || 5000).toLocaleString('id-ID')}</td>
            ${htmlBulanan}
            <td class="py-3 px-2 text-center">
                <button class="w-7 h-7 inline-flex items-center justify-center bg-rose-50 text-rose-600 rounded-lg text-xs">
                    <i class="fa-solid fa-user-minus"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}