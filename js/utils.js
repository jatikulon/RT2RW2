export function formatRupiah(val) {
    if (!val || val === 0) return '-';
    return 'Rp ' + Number(val).toLocaleString('id-ID');
}

export function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    const isSuccess = type === 'success';
    const bgColor = isSuccess ? 'bg-slate-900 border-emerald-500' : 'bg-red-900 border-red-500';
    const icon = isSuccess ? 'fa-circle-check text-emerald-400' : 'fa-circle-exclamation text-red-400';
    
    toast.className = `flex items-center gap-3 ${bgColor} border-l-4 text-white text-xs px-4 py-3 rounded-xl shadow-xl transition-all duration-300 transform translate-y-2 opacity-0 pointer-events-auto`;
    toast.innerHTML = `
        <i class="fa-solid ${icon} text-base"></i>
        <span class="font-medium">${message}</span>
    `;

    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.remove('translate-y-2', 'opacity-0'));

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

export function maskNIK(nik, unmaskedState, id) {
    if (unmaskedState[id]) return nik;
    if (!nik || nik.length < 16) return nik;
    return nik.substring(0, 6) + '******' + nik.substring(12);
}