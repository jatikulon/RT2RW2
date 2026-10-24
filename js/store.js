import { initialWarga, initialJurnalKas, initialIuranMatrix, initialArisanMatrix, initialPengaduan } from './config.js';
import { supabaseClient } from './supabaseClient.js';

export const store = {
    warga: JSON.parse(localStorage.getItem('rt_warga')) || initialWarga,
    jurnalKas: JSON.parse(localStorage.getItem('rt_jurnal_kas')) || initialJurnalKas,
    iuranMatrix: JSON.parse(localStorage.getItem('rt_iuran_matrix')) || initialIuranMatrix,
    arisanMatrix: JSON.parse(localStorage.getItem('rt_arisan_matrix')) || initialArisanMatrix,
    pengaduan: JSON.parse(localStorage.getItem('rt_pengaduan')) || initialPengaduan,

    async loadFromSupabase() {
        if (!supabaseClient) return false;
        try {
            // Contoh pengambilan data dari Supabase jika terhubung
            const { data: dataWarga, error: errWarga } = await supabaseClient.from('warga').select('*');
            if (!errWarga && dataWarga && dataWarga.length > 0) {
                this.warga = dataWarga;
            }

            const { data: dataKas, error: errKas } = await supabaseClient.from('jurnal_kas').select('*');
            if (!errKas && dataKas && dataKas.length > 0) {
                this.jurnalKas = dataKas;
            }

            this.saveLocal();
            return true;
        } catch (err) {
            console.error("Gagal sinkronisasi dari Supabase:", err);
            return false;
        }
    },

    saveLocal() {
        localStorage.setItem('rt_warga', JSON.stringify(this.warga));
        localStorage.setItem('rt_jurnal_kas', JSON.stringify(this.jurnalKas));
        localStorage.setItem('rt_iuran_matrix', JSON.stringify(this.iuranMatrix));
        localStorage.setItem('rt_arisan_matrix', JSON.stringify(this.arisanMatrix));
        localStorage.setItem('rt_pengaduan', JSON.stringify(this.pengaduan));
    },

    async save() {
        this.saveLocal();

        // Jika Supabase terhubung, simpan/update ke Supabase
        if (supabaseClient) {
            // Implementasi query sync Supabase bisa disesuaikan dengan kebutuhan tabel
        }
    },

    resetToDefault() {
        localStorage.removeItem('rt_warga');
        localStorage.removeItem('rt_jurnal_kas');
        localStorage.removeItem('rt_iuran_matrix');
        localStorage.removeItem('rt_arisan_matrix');
        localStorage.removeItem('rt_pengaduan');
        location.reload();
    }
};
