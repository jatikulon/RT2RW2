import { store } from '../store.js';

let chartAgeInstance = null;
let chartGenderInstance = null;

export function renderDashboardStats() {
    const statWarga = document.getElementById('stat-total-warga');
    const statKK = document.getElementById('stat-total-kk');
    const statArisan = document.getElementById('stat-total-arisan');

    if (statWarga) statWarga.innerText = store.warga.length;
    
    const uniqueKK = new Set(store.warga.map(w => w.kk)).size;
    if (statKK) statKK.innerText = uniqueKK;

    if (statArisan) statArisan.innerText = store.arisanMatrix.length;
}

export function initCharts() {
    const ctxAge = document.getElementById('chartAge')?.getContext('2d');
    if (ctxAge) {
        chartAgeInstance = new Chart(ctxAge, {
            type: 'bar',
            data: {
                labels: ['0-17 Thn (Anak)', '18-35 Thn (Pemuda)', '36-55 Thn (Dewasa)', '55+ Thn (Lansia)'],
                datasets: [{
                    label: 'Jumlah Warga',
                    data: [1, 2, 2, 0],
                    backgroundColor: ['#38bdf8', '#0284c7', '#0369a1', '#075985'],
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, ticks: { stepSize: 1 } }
                }
            }
        });
    }

    const ctxGender = document.getElementById('chartGender')?.getContext('2d');
    if (ctxGender) {
        chartGenderInstance = new Chart(ctxGender, {
            type: 'doughnut',
            data: {
                labels: ['Laki-laki', 'Perempuan'],
                datasets: [{
                    data: [
                        store.warga.filter(w => w.gender === 'Laki-laki').length,
                        store.warga.filter(w => w.gender === 'Perempuan').length
                    ],
                    backgroundColor: ['#0284c7', '#ec4899']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }
}