import { store } from '../store.js';

export function populateSuratDropdown() {
    const select = document.getElementById('surat-warga-select');
    if (!select) return;
    select.innerHTML = '<option value="">-- Pilih Warga --</option>';

    store.warga.forEach(w => {
        const opt = document.createElement('option');
        opt.value = w.id;
        opt.innerText = `${w.nama} (Blok ${w.norumah})`;
        select.appendChild(opt);
    });
}

export function generateSuratPreview() {
    const id = parseInt(document.getElementById('surat-warga-select')?.value);
    const w = store.warga.find(item => item.id === id);

    const jenis = document.getElementById('surat-jenis')?.value || '';
    const nomor = document.getElementById('surat-nomor')?.value || '';
    const catatan = document.getElementById('surat-catatan')?.value || '';

    document.getElementById('prev-surat-nomor').innerText = nomor;
    document.getElementById('prev-keperluan').innerText = jenis;
    document.getElementById('prev-catatan-block').innerText = catatan ? `Catatan: ${catatan}` : 'Catatan: -';

    if (w) {
        document.getElementById('prev-nama').innerText = `: ${w.nama}`;
        document.getElementById('prev-nik').innerText = `: ${w.nik}`;
        document.getElementById('prev-ttl').innerText = `: ${w.ttl}`;
        document.getElementById('prev-gender').innerText = `: ${w.gender}`;
        document.getElementById('prev-pekerjaan').innerText = `: ${w.pekerjaan}`;
        document.getElementById('prev-alamat').innerText = `: Blok ${w.norumah}, RT 02 / RW 02`;
        document.getElementById('prev-ttd-warga').innerText = `( ${w.nama} )`;
    }
}