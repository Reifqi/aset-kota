# Nama Aplikasi
Aplikasi AsetKota adalah aplikasi yang dirancang untuk Diskominfotik Banda Aceh dengan fokus aplikasi sistem informasi yang menampilkan aset-aset kota yang dimiliki oleh kota Banda Aceh. Aplikasi ini juga sudah bisa di maintain oleh admin untuk menambah, menghapus, mengedit akses kota dengan memanfaatkan database MongoDb untuk mengatur role admin ataupun user dari data yang diambil pada proses sign up serta login.

## Slide
https://www.canva.com/design/DAFqXwFYYN4/QKkNoKmzqdV642fHq-UsAw/edit?utm_content=DAFqXwFYYN4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton


## Prerequisites (Requirements)
- [NPM]
- [MongoDb]
- [MacbookPro-2020]

## Installation
- Clone [repo](https://gitlab.bandaacehkota.go.id/test.git).
- `cd nama-folder` untuk masuk ke direktori.
- npm install


## Run Project
Untuk memulai aplikasi buka 3 terminal, yang pertama untuk API dengan command
- cd api
- node server.js

Yang kedua untuk mengkoneksikan MongoDb ke servernya dengan command
- brew services start mongodb-community@6.0

Yang ketiga untuk menjalankan aplikasi NextJs nya dengan command
- npm run dev



## Features
1. [x] Home
2. [x] Search Aset
3. [x] SignIn
4. [x] SignUp
5. [x] Admin Dashboard
6. [x] Responsive

## Frameworks
- NextJS 13.4.12

## Third Parties
- [Google Fonts](https://pub.dev/packages/google_fonts)
- [brew] (https://brew.sh)


Copyright © Diskominfotik Banda Aceh 2023