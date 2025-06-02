# SewaKantor Frontend
Repositori ini merupakan bagian frontend dari aplikasi Sewa Kantor, sebuah platform untuk menyewa ruang kantor secara online. Frontend dibangun menggunakan React, TypeScript, dan Vite untuk memberikan pengalaman pengguna yang cepat dan responsif.

### Fitur
- **Antarmuka Pengguna Interaktif**: Menyediakan UI yang intuitif untuk pencarian dan pemesanan ruang kantor.

- **Integrasi API**: Berkomunikasi dengan backend Laravel melalui RESTful API.

- **Routing Dinamis**: Menggunakan React Router untuk navigasi antar halaman.

- **Manajemen State**: Mengelola state aplikasi dengan efisien.

- **Validasi Formulir**: Validasi input pengguna pada formulir pendaftaran dan login.

### Teknologi yang Digunakan
1. **React**: Library JavaScript untuk membangun antarmuka pengguna.

2. **TypeScript**: Superset JavaScript yang menambahkan tipe statis.

3. **Vite**: Build tool untuk pengembangan frontend yang cepat.

4. **ESLint**: Alat untuk menjaga konsistensi kode dan menemukan masalah.

5. **React Router**: Library untuk routing di aplikasi React.

### Prasyarat
Pastikan telah menginstal:

- Node.js (disarankan versi terbaru LTS)

- npm (sudah bawaan dari Node JS) atau yarn

### Langkah Instalasi
1. Kloning Repositori:
    ```bash
   git clone https://github.com/mfaskdr10/sewakantor-frontend.git
   cd sewakantor-frontend
2. Instalasi Dependensi:
    ```bash
    // Menggunakan npm:
    npm install

    // Atau menggunakan yarn:
    yarn install
3. Menjalankan Aplikasi
    ```bash
    Menggunakan npm:
    npm run dev

    Atau menggunakan yarn:
    yarn dev
Aplikasi akan berjalan di http://localhost:5173 secara default.

### Struktur Direktori
- **public/**: Berisi file statis seperti index.html.
- **src/**: Berisi kode sumber utama aplikasi.
- **components/**: Komponen React yang dapat digunakan kembali.
- **pages/**: Halaman-halaman utama aplikasi.
- **App.tsx**: Komponen utama aplikasi.
- **main.tsx**: Titik masuk aplikasi.