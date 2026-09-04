console.log("===========================")
console,log("MATERI 3 PART 1 - DATA MANIPULATION")
console.log("===========================")
// String Manipulation
const namaTokoh ="Prof. dr. Ing. H. Bacharuddin Husuf Habibie, FREng."
console.log({ namaTokoh });
const namaTokohKecil = namaTokoh.toLowerCase(); // jangan lupa () karena dia function
const namaTokohBesar = namaTokoh.toUpperCase();
console.log({ namaTokohKecil, namaTokohBesar });
const namaPanggilan = namaTokoh.slice(36, 43); // ( IndexAwal, IndexAkhir )
console.log({ namaPanggilan });