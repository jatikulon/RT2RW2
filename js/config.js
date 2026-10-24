export const SUPABASE_CONFIG = {
    URL: "https://rnjytvheloksdirxkmli.supabase.co/rest/v1/",
    ANON_KEY: "sb_publishable_dUaGycA4F9MGFLk-2-WsXw_cxQAJJC8"
};

export const initialWarga = [
    { id: 1, nik: '3171011205880001', kk: '3171010101150001', nama: 'Abdi Bagus Wijaya', ttl: 'Jakarta, 12 Mei 1988', gender: 'Laki-laki', agama: 'Islam', pekerjaan: 'Karyawan Swasta', norumah: 'A-01', statustinggal: 'Tetap', hp: '081234567890', bansos: 'Tidak', goldarah: 'O' },
    { id: 2, nik: '3171014508900002', kk: '3171010101150001', nama: 'Abdul Qodir', ttl: 'Bandung, 15 Agustus 1990', gender: 'Laki-laki', agama: 'Islam', pekerjaan: 'Wiraswasta', norumah: 'A-02', statustinggal: 'Tetap', hp: '081298765432', bansos: 'Ya', goldarah: 'A' },
    { id: 3, nik: '3171012010950003', kk: '3171010202180002', nama: 'Adhi Yulistiyanto', ttl: 'Surabaya, 20 Oktober 1995', gender: 'Laki-laki', agama: 'Kristen', pekerjaan: 'Software Engineer', norumah: 'B-04', statustinggal: 'Kontrak', hp: '085712341234', bansos: 'Tidak', goldarah: 'B' },
    { id: 4, nik: '3171010303000004', kk: '3171010303200003', nama: 'Agus Muryanto', ttl: 'Yogyakarta, 03 Maret 1982', gender: 'Laki-laki', agama: 'Islam', pekerjaan: 'PNS', norumah: 'C-02', statustinggal: 'Tetap', hp: '081311223344', bansos: 'Tidak', goldarah: 'AB' },
    { id: 5, nik: '3171011001750005', kk: '3171010404100004', nama: 'Agus Taraya Wicaksono', ttl: 'Semarang, 10 Januari 1975', gender: 'Laki-laki', agama: 'Islam', pekerjaan: 'Wiraswasta', norumah: 'A-05', statustinggal: 'Tetap', hp: '081809080706', bansos: 'Ya', goldarah: 'O' },
    { id: 6, nik: '3171011001750006', kk: '3171010404100005', nama: 'Agus Tri Cahyo', ttl: 'Solo, 14 Februari 1992', gender: 'Laki-laki', agama: 'Islam', pekerjaan: 'BUMN', norumah: 'B-01', statustinggal: 'Tetap', hp: '081233445566', bansos: 'Tidak', goldarah: 'A' }
];

export const initialJurnalKas = [
    {
        id: 'TRX-1',
        tanggal: '2026-01-06',
        keterangan: 'Saldo Desember 2025',
        iuran_17an_masuk: 1225000,
        iuran_17an_keluar: 0,
        kaleng_sosial_masuk: 0,
        kas_sosial_masuk: 3088300,
        kas_sosial_keluar: 0
    }
];

export const initialIuranMatrix = [
    { wargaId: 1, jenis: 10, jenisHistory: [{ jenis: 10, startMonthIndex: 0 }], months: { jan: "01", feb: "02", mar: "", apr: "04", mei: "05", jun: "06", jul: "07", agu: "", sep: "", okt: "", nov: "", des: "" } },
    { wargaId: 2, jenis: 10, jenisHistory: [{ jenis: 10, startMonthIndex: 0 }], months: { jan: "01", feb: "05", mar: "", apr: "05", mei: "07", jun: "07", jul: "07", agu: "", sep: "", okt: "", nov: "", des: "" } },
    { wargaId: 3, jenis: 10, jenisHistory: [{ jenis: 10, startMonthIndex: 0 }], months: { jan: "01", feb: "04", mar: "", apr: "04", mei: "05", jun: "06", jul: "07", agu: "", sep: "", okt: "", nov: "", des: "" } },
    { wargaId: 4, jenis: 10, jenisHistory: [{ jenis: 10, startMonthIndex: 0 }], months: { jan: "05", feb: "05", mar: "", apr: "05", mei: "05", jun: "", jul: "", agu: "", sep: "", okt: "", nov: "", des: "" } },
    { wargaId: 5, jenis: 10, jenisHistory: [{ jenis: 10, startMonthIndex: 0 }], months: { jan: "01", feb: "04", mar: "", apr: "04", mei: "05", jun: "06", jul: "07", agu: "", sep: "", okt: "", nov: "", des: "" } },
    { wargaId: 6, jenis: 10, jenisHistory: [{ jenis: 10, startMonthIndex: 0 }], months: { jan: "", feb: "", mar: "", apr: "", mei: "", jun: "", jul: "", agu: "", sep: "", okt: "", nov: "", des: "" } }
];

export const initialArisanMatrix = [
    { wargaId: 1, nominal: 5000, months: { jan: "01", feb: "02", mar: "", apr: "", mei: "", jun: "", jul: "", agu: "", sep: "", okt: "", nov: "", des: "" } },
    { wargaId: 2, nominal: 5000, months: { jan: "01", feb: "02", mar: "", apr: "", mei: "", jun: "", jul: "", agu: "", sep: "", okt: "", nov: "", des: "" } },
    { wargaId: 5, nominal: 5000, months: { jan: "01", feb: "", mar: "", apr: "", mei: "", jun: "", jul: "", agu: "", sep: "", okt: "", nov: "", des: "" } }
];

export const initialPengaduan = [
    { id: 1, pelapor: 'Adhi Yulistiyanto', subjek: 'Lampu Jalan Blok B Padam', isi: 'Lampu penerangan jalan utama dekat rumah B-04 sudah padam sejak dua hari lalu. Mohon perbaikan.', status: 'Proses', tanggal: '21 Okt 2026' },
    { id: 2, pelapor: 'Abdi Bagus Wijaya', subjek: 'Usulan Penambahan Tempat Sampah', isi: 'Mohon disediakan tempat sampah pilah di lapangan olahraga RT.', status: 'Selesai', tanggal: '18 Okt 2026' }
];
