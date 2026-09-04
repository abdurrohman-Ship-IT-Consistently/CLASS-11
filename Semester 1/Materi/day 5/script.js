console.log("===================================");
console.log(" MATERI 3 PART 2 - DATA PROCESSING");
console.log("===================================");
const skills = ["HTML", "CSS", "JavaScript"];
console.log(skills);
// akses berdasarkan index nya
console.log(skills[2]); // akses nilai js di index ke-2
skills.push('Python'); // tambah item di akhir
console.log(skills);
// menghapus item terakhir
skills.pop();
skills.pop();
console.log(skills); 
skills.unshift("GitHub"); // tambah di depan
console.log(skills); 
skills.shift(); // hapus dari depan
skills.shift();
console.log(skills); 
const cekJs = skills.includes('JavaScript');
console.log({ cekJs }); 
if (cekJs) 
    console.log('Javascript ditemukan!')
else
    console.log('Javascript belum ada!')

skills.push('TailwindCSS');
skills.push('ReactJS');
skills.push('HonoJS');
console.log(skills);
// cari index berdasarkan value
const cariIndexReactJS = skills.indexOf('ReactJS');
console.log({ cariIndexReactJS });
console.log(`Panggil by index: ${skills[cariIndexReactJS]}`);
// string teks yg di join lewat krakter pemisah misal , - | >
const joinData = skills.join(' > '); 
console.log({ joinData });

// --------------------
// DATA PROCESSING
// --------------------
const myWallet = [1000000, 500000, 2500000];
const kursUSD = 17300;
// mapping data dengan .map()
const myDollarWallet = myWallet.map(
    wallet => {
        const nilaiUSD = (wallet / kursUSD).toFixed(2);
        return `$ ${nilaiUSD}`;
    }
);
console.log({ myWallet, myDollarWallet });
// filter data dengan .filter()
const underSejuta = myWallet.filter(
    rupiah => rupiah < 1000000
);
console.log({ underSejuta });
// menggabungkan atau mengakumulasi data pakai .reduce()
//  0 didalam adalah angka awal
const totalRupiah = myWallet.reduce(
    (akumulator, rupiah) => akumulator + rupiah,
    0
);
console.log({ totalRupiah });
// method chaining = menggabungkan berbagai method dalam 1 deklarasi
const totalMurahUSD = myWallet.map(rupiah => rupiah / kursUSD)
    .filter(usd => usd < 100)
    .reduce((sum, usd) => sum + usd, 0);

const totalBawah100Dollar = `$ ${totalMurahUSD.toFixed(2)}`;
console.log({ totalBawah100Dollar });