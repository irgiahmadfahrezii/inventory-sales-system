# Inventory & Sales Management System

Project ini adalah aplikasi Inventory & Sales berbasis web yang dibangun menggunakan Next.js App Router.  
Digunakan sebagai project belajar sekaligus portofolio level intermediate.

## Tech Stack
- Next.js App Router
- Prisma ORM
- MySQL
- Tailwind CSS

## Fitur Saat Ini
- Setup Next.js App Router
- Styling dengan Tailwind CSS
- Prisma schema dan migrasi database
- Koneksi MySQL
- Halaman login
- Login logic menggunakan Prisma
- Session login berbasis cookie httpOnly
- Proteksi route dashboard dengan middleware
- Seed user untuk testing

## Struktur Utama
- `(auth)` untuk halaman login
- `(dashboard)` untuk halaman sistem utama
- `middleware.ts` untuk proteksi route
- `lib/prisma.ts` untuk Prisma Client
- `lib/session.ts` untuk session handling

## Cara Menjalankan Project
1. Clone repository
2. Install dependency
   ```bash
   npm install
3. Atur database di .env "DATABASE_URL=mysql://user:password@localhost:3306/invent_sales"
4. jalankan migrasi
    npx prisma migrate dev
    npx prisma generate
5. jalankan server
    npm run dev

## Akun Testing

Email: admin@mail.com

Password: admin123

## Status Project

Project berada pada tahap intermediate dan siap dikembangkan ke fitur inventory, stok, dan transaksi penjualan.

## Rencana Pengembangan

- Hash password

- Logout

- Role admin dan staff

- CRUD kategori dan produk

- Manajemen stok

- Transaksi penjualan

- Dashboard laporan