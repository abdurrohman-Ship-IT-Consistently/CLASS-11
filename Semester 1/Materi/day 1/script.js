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