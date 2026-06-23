# 🐾 KawatLucu – Website Promosi Gantungan Kunci Kawat Bulu

Website promosi penjualan gantungan kunci kawat bulu handmade, dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework) — ringan, cepat, dan mudah di-deploy.

## ✨ Fitur

- **Landing page lengkap** dengan hero section, katalog produk, cara pesan, kontak admin
- **Desain soft pastel** yang menarik dan cocok untuk produk crafts/handmade
- **Filter produk** berdasarkan kategori (Hewan, Karakter, Buah, Aksesori)
- **3 kontak admin WhatsApp** dengan tombol langsung ke chat WA
- **Floating WhatsApp button** untuk kemudahan pemesanan
- **Responsif** untuk HP, tablet, dan desktop
- **Animasi halus** saat scroll (IntersectionObserver)
- **Counter animasi** pada statistik di hero section
- **Navbar aktif** mengikuti section yang sedang dilihat

## 📁 Struktur Folder

```
keychain-shop/
│
├── index.html          ← Halaman utama (single page)
│
├── css/
│   └── style.css       ← Semua styling (tema soft pastel)
│
├── js/
│   └── main.js         ← Interaktivitas: filter, animasi, navbar, WA button
│
├── images/             ← (Opsional) Tambahkan foto produk asli di sini
│   └── .gitkeep
│
├── assets/             ← (Opsional) Logo, ikon, atau aset lain
│   └── .gitkeep
│
└── README.md           ← File ini
```

## 🚀 Cara Deploy ke GitHub Pages

### 1. Buat Repository di GitHub
- Buka [github.com](https://github.com) → klik **New repository**
- Nama repo: `kawatlucu` (atau bebas)
- Set ke **Public**
- Klik **Create repository**

### 2. Upload File
**Cara A – Via GitHub Web:**
1. Masuk ke repo yang baru dibuat
2. Klik **Add file → Upload files**
3. Drag & drop seluruh folder `keychain-shop/` atau upload satu per satu
4. Klik **Commit changes**

**Cara B – Via Git (Terminal):**
```bash
git init
git add .
git commit -m "🐾 Initial commit - KawatLucu website"
git branch -M main
git remote add origin https://github.com/USERNAME/kawatlucu.git
git push -u origin main
```

### 3. Aktifkan GitHub Pages
1. Di repo GitHub, klik **Settings**
2. Scroll ke bawah, cari **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main**, folder: **/ (root)**
5. Klik **Save**
6. Tunggu 1–2 menit, website live di: `https://USERNAME.github.io/kawatlucu/`

## ✏️ Cara Kustomisasi

### Ganti Nomor WhatsApp Admin
Buka `index.html`, cari dan ganti:
```
6281234567890   → nomor Admin Sari
6289876543210   → nomor Admin Rini
6285678901234   → nomor Admin Devi
```
Format: `62` + nomor tanpa `0` di depan. Contoh: `0812xxx` → `62812xxx`

### Ganti Nama Toko
Cari `KawatLucu` dan ganti dengan nama tokomu.

### Tambah/Hapus Produk
Di `index.html`, cari `<!-- Product Grid -->` dan duplikasi blok `.product-card`. Sesuaikan:
- `data-category` → kategori produk (`hewan`, `karakter`, `buah`, `aksesori`)
- Emoji di `.wire-art` → ganti sesuai produk
- Nama, deskripsi, harga
- Link WhatsApp di tombol Pesan

### Tambah Foto Produk Asli
Taruh foto di folder `images/`, lalu di CSS ganti background produk:
```css
.product-img--namaproduk {
  background-image: url('../images/foto-produk.jpg');
  background-size: cover;
  background-position: center;
}
```

### Ganti Warna Tema
Di `css/style.css`, bagian `:root {}`, edit variabel:
```css
--pink:       #f9c6d0;   /* warna utama pink */
--pink-deep:  #d47090;   /* pink gelap (teks & tombol) */
--mint:       #b8e8d8;   /* warna aksen mint/hijau */
--lavender:   #d4c8f0;   /* ungu muda */
```

## 📋 Produk yang Tersedia (Default)

| Kategori  | Produk | Harga |
|-----------|--------|-------|
| 🐾 Hewan  | Kelinci Kawat Bulu | Rp 12.000 |
| 🐾 Hewan  | Beruang Teddy | Rp 13.000 |
| 🐾 Hewan  | Kucing Chubby | Rp 12.000 |
| 🐾 Hewan  | Otter Peluk | Rp 15.000 |
| 🐾 Hewan  | Rubah Mini | Rp 13.000 |
| 🐾 Hewan  | Katak Hijau | Rp 11.000 |
| 🎭 Karakter | Malaikat Kecil | Rp 15.000 |
| 🎭 Karakter | Hantu Lucu | Rp 12.000 |
| 🎭 Karakter | Alien Mini | Rp 12.000 |
| 🍓 Buah   | Stroberi Manis | Rp 10.000 |
| 🍓 Buah   | Alpukat Lucu | Rp 12.000 |
| ✨ Aksesori | Bintang Bersinar | Rp 10.000 |
| ✨ Aksesori | Hati Berlapis | Rp 10.000 |

## 🛠️ Teknologi

- **HTML5** – Struktur halaman
- **CSS3** – Animasi, grid, flexbox, custom properties
- **Vanilla JS** – Filter, scroll effects, IntersectionObserver
- **Google Fonts** – Poppins + Playfair Display
- Tidak menggunakan framework/library eksternal

## 📄 Lisensi

Free to use & modify untuk keperluan pribadi dan bisnis kecil.

---

Dibuat dengan 💖 untuk UMKM Handmade Indonesia
