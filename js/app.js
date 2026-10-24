import { store } from './store.js';
import { renderDashboardStats, initCharts } from './views/dashboard.js';
import { renderWargaTable } from './views/warga.js';
import { renderJurnal, handleSimpanTransaksi } from './views/kas.js';
import { renderIuranTable } from './views/iuran.js';
import { renderArisanTable } from './views/arisan.js';
import { populateSuratDropdown, generateSuratPreview } from './views/surat.js';
import { renderPengaduanList } from './views/pengaduan.js';

window.addEventListener('DOMContentLoaded', () => {
    store.save();

    renderDashboardStats();
    renderWargaTable();
    renderJurnal();
    renderIuranTable();
    renderArisanTable();
    populateSuratDropdown();
    renderPengaduanList();
    initCharts();

    const formMutasi = document.getElementById('form-mutasi');
    if (formMutasi) {
        formMutasi.addEventListener('submit', handleSimpanTransaksi);
    }

    window.switchTab = function(tabId) {
        document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('bg-sky-600', 'text-white');
            btn.classList.add('text-slate-400');
        });

        const targetView = document.getElementById(`view-${tabId}`);
        if (targetView) targetView.classList.remove('hidden');

        const activeNav = document.getElementById(`nav-${tabId}`);
        if (activeNav) {
            activeNav.classList.add('bg-sky-600', 'text-white');
            activeNav.classList.remove('text-slate-400');
        }
    };

    window.generateSuratPreview = generateSuratPreview;
    window.resetDataToDefault = () => store.resetToDefault();
});