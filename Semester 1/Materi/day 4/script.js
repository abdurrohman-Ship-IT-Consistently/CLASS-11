console.log("===================================");
console.log("MATERI 3 PART 1- DATA MANIPULATION");
console.log("===================================");
// STRING MANIPULATION
const namaTokoh = "Prof. Dr. Ing. H. Bacharuddin Jusuf Habibie, FREng."
console.log({ namaTokoh });
const namaTokohKecil = namaTokoh.toLowerCase(); // jgn lupa () karna dia function
const namaTokohBesar = namaTokoh.toUpperCase(); 
console.log({ namaTokohKecil, namaTokohBesar });
const namaPanggilan = namaTokoh.slice(36, 43); // (indexAwal, IndexAkhir)
console.log({ namaPanggilan });
const cekHaji = namaTokoh.includes("H."); // cek kata haji pake `H.`
if (cekHaji) {
    console.log('Siap Pak Haji!');
} else {
    console.log('Belum sempat Haji, kuotanya di korupsi woi!');
}
const namaTokohBaru = namaTokoh.replace("Bacharuddin", "Muhammad");
console.log({ namaTokohBaru });
const namaSamaan = "Abu Abdillah bin Abu Ubaidillah bin Abu Sufyan";
const gantiSamaan = namaSamaan.replaceAll("Abu", "Ibnu");
console.log({ namaSamaan, gantiSamaan });
// NUMBER MANIPULATION
const gajiTokoh = "35000000"; // berupa string
const nominalGaji = Number(gajiTokoh); // berubah jadi integer
console.log({ gajiTokoh, nominalGaji });
const saldoBelanja = "25000.678"; // tipe desimal
const saldoDesimal = parseFloat(saldoBelanja); // berubah jadi number/float
console.log({ saldoBelanja, saldoDesimal });
const tambahSaldo = saldoDesimal + 100000; // akan bug jika tdk di konversi
console.log({ tambahSaldo });
const formatSaldo = tambahSaldo.toFixed(1); // motong belakang koma + jdi string
console.log({ formatSaldo });
// sample angka2 pembulatan dengan fungsi Math
const angkaX = Math.round(85.6); // yg terdekat (atas/bawah)
const angkaY = Math.floor(85.9); // ke bawah
const angkaZ = Math.ceil(85.1);  // ke atas
console.log({ angkaX, angkaY, angkaZ });

// DATE MANIPULATION
const tanggalBaru = new Date(); // tipe data Date
const tanggalLokal = tanggalBaru.toLocaleString();
const tanggalString = tanggalBaru.toString();
console.log({ tanggalBaru, tanggalLokal, tanggalString });
const tahunIni = tanggalBaru.getFullYear(); // nomor tahun
const bulanIni = tanggalBaru.getMonth() + 1; // nomor bulan
const tanggalIni = tanggalBaru.getDate(); // nomor tanggal
// const hariIni = tanggalBaru.getDay(); // nomor hari
const hariIni = 5;
const daftarHariIndo = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const hariIndo = daftarHariIndo[hariIni];
const tanggalIndo = `${hariIndo}, ${tanggalIni}/${bulanIni}/${tahunIni}`;
console.log({ tanggalIndo, hariIni, tanggalIni, bulanIni, tahunIni });
// Format tanggal Arab Saudi (default: Hijri, angka Arab)
const saudiDate = new Intl.DateTimeFormat('ar-SA').format(tanggalBaru);
console.log({ saudiDate });

