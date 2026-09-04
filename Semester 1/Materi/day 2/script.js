console.log("Bismillah, Hello World!");
console.log("------------------------");
// komentar pake js
// tiap deklarasi di akhiri titik koma lebih baik
let namaSantri = "Budi Siregar"; // string 
let umur = 15; // integer atau number
let kenyang = false; // boolean
console.log(namaSantri); // print nilai
console.log({ umur, kenyang }); // debug biar jadi objek 
//  var = bisa berubah (mutable - versi jadul)
//  let = bisa berubah (mutable)
//  const = tidak bisa berubah (mutable)
const jumlahKelasAngkatan2026 = 5;
console.log("Jumlah Kelas :", jumlahKelasAngkatan2026);
// umur e nambah per 01 juli
umur = 16; // let bisa di timpa / ubah lagi
// umur = "hello bang"; // bisa di timpa tipe data lain
console.log("Umur terkini :", umur);
// jumlahKelasAngkatan2026 = 10; // mesti error ini
// bbrp keanehan variables di JS
angkaX = "10";  // string
angkaY = 50; // number
totalAngka = angkaY - angkaX; // 50 - "10"  = 40
console.log("Total Angka: ", totalAngka);
totalAngkaAneh = angkaY + angkaX; // 50 + "10"  = "5010"
console.log("Total Angka Aneh: ", totalAngkaAneh);
// Template literal = cara nyambung teks dari variable
const salam = "﷽"; // teks unicode
const manyala = "🔥"; // teks emoji
const sapaSapa = salam + " Halo Babang Tamfan! " + manyala;
console.log(sapaSapa); // meyambung teks
// gunakan backtick `isi konten` lebih rekomen
const sapaSapaAlus = `${salam}, Halo Babang Tamfan! ${manyala}`;
console.log(sapaSapaAlus);
// cara mengenali tipe data: typeof
const tipeSalam = `Tipe data salam: ${typeof salam}`;
const tipeUmur = `Tipe data umur: ${typeof umur}`;
console.log(tipeSalam);
console.log(tipeUmur);
const namaStasiun = "St. Kutoarjo";
const nomorGerbong = 5;
const infoKereta = `いらっしゃいませ
    🚉 Stasiun: ${namaStasiun} 
    #️⃣  Nomor Gerbong: ${nomorGerbong}
    Made with \u2665 
    \u00A9 HSI BS - 2026
`;
console.log(infoKereta);
// operator perbandingan
const umurBudi = 19; // integer
const umurUjang = "19"; // string
// sama dengan 2 (==): tidak membandingkan tipe data
// sama dengan 3 (===): ikut membandingkan tipe data
const checkUmur = umurBudi === umurUjang;
console.log({ umurBudi, umurUjang, checkUmur });
// jika seumuran 
if (checkUmur) {
    console.log("✅ Budi dan Ujang Seumuran");
} else {
    console.log("🙈 Budi dan Ujang Tidak Seumuran!");
}
// > : lebih besar
// < : lebih kecil
const umurSupardi = 15;
if (umurSupardi < umurBudi) {
    console.log("✅ Supardi Mudaan!");
} else {
    console.log("🙈 Supardi Tuaan!");
}
// != : tidak sama dengan
// !== : tidak sama dengan + tipe datanya sama
if (umurBudi !== umurUjang) {
    console.log("🙈 Budi dan Ujang Beda!");
} else {
    console.log("✅ Budi dan Ujang Samaan!");
}
// perulangan -> for loop
for (let i = 1; i <= 5; i++) {
    console.log(`Hello Bang Ke-${i}!`);
    if (i === 2) {
        console.log('Wah udah lewat 2 aja...');
    }
}
// array = data berurutan yg berindeks
const daftarSantri = ["Bima", "Raden", "Ucup"];
console.log(daftarSantri); // semua items
console.log(daftarSantri[0]); // data indeks ke 0
console.log(daftarSantri[1]); // data indeks ke 1
console.log(daftarSantri[2]); // data indeks ke 2
// object = pakai { } dan punya key
const profilBima = {
    nama: 'Bima Saputra Al-Jawi',
    kelas: 11,
    asrama: 'Ibnu Batutah'
}
console.log(profilBima); // print semua data
console.log(profilBima.nama); // panggil berdasarkan key
console.log(profilBima.kelas);
console.log(profilBima.asrama);
// Date => manipulasi penanggalan
const tanggalBaru = new Date();
console.log(tanggalBaru); // format UTC
console.log(tanggalBaru.toString()); 
console.log(tanggalBaru.toLocaleString());