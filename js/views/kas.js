import { store } from '../store.js';
import { formatRupiah, showToast } from '../utils.js';

export function renderJurnal() {
    const tbody = document.getElementById('tabel-jurnal-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    let current17an = 0;
    let currentSosial = 0;
    let totalKaleng = 0;

    store.jurnalKas.forEach((item, index) => {
        const m17 = Number(item.iuran_17an_masuk) || 0;
        const k17 = Number(item.iuran_17an_keluar) || 0;
        const mKaleng = Number(item.kaleng_sosial_masuk) || 0;
        const mSosial = Number(item.kas_sosial_masuk) || 0;
        const kSosial = Number(item.kas_sosial_keluar) || 0;

        current17an += (m17 - k17);
        currentSosial += (mKaleng + mSosial - kSosial);
        totalKaleng += mKaleng;

        const totalSaldoRow = current17an + currentSosial;

        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50 transition border-b border-slate-100 text-xs";
        tr.innerHTML = `
            <td class="py-3 px-3 text-center text-slate-400 font-medium">${index + 1}</td>
            <td class="py-3 px-3 text-slate-600 font-medium">${item.tanggal}</td>
            <td class="py-3 px-3 font-medium text-slate-800">${item.keterangan}</td>
            <td class="py-3 px-3 text-right text-emerald-600 font-medium">${formatRupiah(m17)}</td>
            <td class="py-3 px-3 text-right text-rose-500 font-medium">${formatRupiah(k17)}</td>
            <td class="py-3 px-3 text-right font-extrabold text-slate-900">${formatRupiah(current17an)}</td>
            <td class="py-3 px-3 text-right text-purple-600 font-medium">${formatRupiah(mKaleng)}</td>
            <td class="py-3 px-3 text-right text-emerald-600 font-medium">${formatRupiah(mSosial)}</td>
            <td class="py-3 px-3 text-right text-rose-500 font-medium">${formatRupiah(kSosial)}</td>
            <td class="py-3 px-3 text-right font-extrabold text-slate-900">${formatRupiah(currentSosial)}</td>
            <td class="py-3 px-3 text-right font-extrabold text-blue-600 bg-blue-50/30">${formatRupiah(totalSaldoRow)}</td>
            <td class="py-3 px-3 text-center text-rose-500 cursor-pointer">Hapus</td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById('stat-saldo-17an').innerText = 'Rp ' + current17an.toLocaleString('id-ID');
    document.getElementById('stat-saldo-sosial').innerText = 'Rp ' + currentSosial.toLocaleString('id-ID');
    document.getElementById('stat-kaleng-sosial').innerText = 'Rp ' + totalKaleng.toLocaleString('id-ID');
    document.getElementById('stat-total-saldo').innerText = 'Rp ' + (current17an + currentSosial).toLocaleString('id-ID');
}

export function handleSimpanTransaksi(e) {
    e.preventDefault();
    const tanggal = document.getElementById('tx-tanggal').value;
    const keterangan = document.getElementById('tx-keterangan').value;

    let rowData = {
        id: 'TRX-' + Date.now(),
        tanggal,
        keterangan,
        iuran_17an_masuk: 0,
        iuran_17an_keluar: 0,
        kaleng_sosial_masuk: 0,
        kas_sosial_masuk: 0,
        kas_sosial_keluar: 0
    };

    let adaNominal = false;
    document.querySelectorAll('.input-nominal').forEach(input => {
        const pos = input.getAttribute('data-pos');
        const val = Number(input.value) || 0;
        if (val > 0) {
            rowData[pos] = val;
            adaNominal = true;
        }
    });

    if (!adaNominal) {
        alert("Harap isi minimal satu nominal transaksi!");
        return;
    }

    store.jurnalKas.push(rowData);
    store.save();

    document.getElementById('form-mutasi').reset();
    renderJurnal();
    showToast('Transaksi kas berhasil diposting!');
}