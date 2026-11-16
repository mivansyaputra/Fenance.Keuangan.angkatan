# FENANCE KEUANGAN IMMN
Aplikasi keuangan angkatan (offline): tagihan wajib / tidak wajib, cicilan berwarna per kelipatan, kas, laporan.

## Pakai di HP / browser (PWA)
Upload semua file ke GitHub, aktifkan GitHub Pages (Settings → Pages → branch main), buka link-nya, lalu "Tambahkan ke layar utama".

## Jadi .exe Windows 64-bit portable
1. Upload semua file (termasuk folder `.github`) ke repo.
2. Tab **Actions** → **Build EXE Windows** → **Run workflow**.
3. Setelah hijau, buka run-nya → **Artifacts** → unduh `FENANCE-KEUANGAN-IMMN-portable`.
4. Ekstrak, jalankan `.exe` (tanpa install). Data tersimpan di folder `DATA-FENANCE-IMMN` di sebelah .exe.

Lokal: `npm install` lalu `npm start` (coba) atau `npm run build` (di Windows).
