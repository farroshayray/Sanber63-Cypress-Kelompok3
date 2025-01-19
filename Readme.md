# Sanber63-Cypress-Kelompok3

## Anggota Kelompok & Roles


| Nama                      | username github       | Test yang dilakukan                 |
|---------------------------|-----------------------|-------------------------------------|
| **Qonita Lutfia**         | `qonitalutfia`      | Create Account Test                   |
| **Novazira A.F**          | `novaziraa`         | Login Test                            |
| **Fadly Mahendra**        | `fadlymahendra`     | Edit Account Information              |
| **Reza Hammed Tri Wibowo**| `rezahamedtriwibowo`| Edit Address                           |
| **Samuel Allhert**        | `Toxine1157`        | Choose Product & Update shopping cart |
| **Farros H.R**            | `farroshayray`      | Proceed to Checkout                   |


## Panduan Langkah-Langkah untuk Berkontribusi pada Proyek

Catatan:
- Setiap project yang akan dikerjakan dimulai dengan membuat branch terlebih dahulu (1 branch baru untuk 1x push, jika akan mengerjakan tipe pekerjaan lain maka buat branch baru lagi).
- Test dikerjakan dengan membuat file baru pada folder `cypress\e2e\tests` dengan format `[namaPageTest.cy.js]` misalkan `loginTest.cy.js`
- Jika ingin menggunakan `fixtures` harap membuat file baru pada folder `cypress\fixtures` dengan contoh nama file `userLogin.json`.

### **1. Jika Baru Pertama Kali Akan Clone dari Repo GitHub**

#### a. **Instalasi Node.js <span style="color: red;">(Jika Belum Install)</span>**
1. Unduh dan instal Node.js dari [nodejs.org](https://nodejs.org/).
2. Pastikan Node.js terinstal dengan benar:
   ```bash
   node -v
   npm -v
   ```

#### b. **Instalasi Git <span style="color: red;">(Jika Belum Install)</span>**
1. Unduh dan instal Git dari [git-scm.com](https://git-scm.com/).
2. Konfigurasikan Git dengan identitas Anda:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

#### c. **Clone Repo dari GitHub**
1. Buka terminal atau command prompt.
2. Jalankan perintah berikut untuk meng-clone repositori:
   ```bash
   git clone https://github.com/farroshayray/Sanber63-Cypress-Kelompok3.git
   ```
3. Masuk ke folder proyek:
   ```bash
   cd Sanber63-Cypress-Kelompok3
   ```

#### d. **Membuat dan Berpindah ke Branch Baru**
1. Buat branch baru dengan nama Anda sebagai kontributor:
   ```bash
   git checkout -b [nama_branch/nama_pekerjaan]
   ```
   Contoh:
   ```bash
   git checkout -b farros_haydar/test_login
   ```

2. Pastikan Anda sudah berada di branch baru:
   ```bash
   git branch
   ```
   Branch aktif akan ditandai dengan tanda `*`.

---
### **2. Jika Sudah Pernah Mengerjakan Proyek/Push di Repo yang Sama Sebelumnya**
- Jangan lupa untuk menarik (pull) perubahan terbaru dari branch utama sebelum memulai pekerjaan baru:
   ```bash
   git pull
   ```
- Silahkan Kerjakan Proyeknya

### **3. Jika Sudah Mengerjakan Proyek**

#### a. **Menambahkan Perubahan ke Staging Area**

*cek terlebih dahulu file yang telah dikerjakan, dapat dilihat melalui command:
   ```bash
   git status
   ```
   file yang belum di add akan berwarna <span style="color: red;">merah.</span> <br>
   setelah itu dapat di add dengan 2 cara: <br><br>
**Opsi 1.** Tambahkan semua perubahan yang telah Anda buat satu per satu:
   ```bash
   git add [nama file]
   ```
   contoh 
   ```bash
   git add .\Readme.md
   ```
   <br><br>
   **Atau**
   <br><br>
**Opsi 2.** Tambahkan semua perubahan yang telah Anda buat secara bersamaan:
   ```bash
   git add .
   ```

   


#### b. **Membuat Commit**
1. Buat commit dengan pesan yang jelas:
   ```bash
   git commit -m "[Deskripsi perubahan]"
   ```
   Contoh:
   ```bash
   git commit -m "Testing fitur login"
   ```

#### c. **Mendorong Perubahan ke Branch di Repository**
1. Dorong (push) perubahan Anda ke branch yang sesuai:
   ```bash
   git push origin [nama_branch]
   ```
   Contoh:
   ```bash
   git push origin farros_haydar/test_login
   ```

2. Setelah push berhasil, Kita akan berdiskusi dalam    menjalankan pull request bersama

---

### **3. Catatan Tambahan**
- Selalu pastikan branch `main` atau `develop` tetap bersih dari push langsung.
- Jangan lupa untuk menarik (pull) perubahan terbaru dari branch utama sebelum memulai pekerjaan baru:
   ```bash
   git pull origin [nama_branch]
   ```
- Jika ada konflik, selesaikan konflik terlebih dahulu sebelum melanjutkan.

---
