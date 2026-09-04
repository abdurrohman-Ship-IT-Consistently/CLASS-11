/*
  ==================================================
  JS Weekly Challenge #2 - STUDENT DATA PROCESSOR
  File: index.js
  Nama: [Tulis Namamu Disini]
  Kelas: XI Rombel 1 Mr Izan
  ==================================================
*/

// 1. Data Awal (Raw Data)
const studentName = "  aHmAd fAuZaN  ";
const ageText = "17 tahun";
const scoreText = "85.678";
const registrationText = "21-08-2026";


// 2. Part 1 — Clean the Name & Username
// Membersihkan spasi, lalu memecah kata untuk membuat huruf besar di awal
const nameParts = studentName.trim().toLowerCase().split(" ");
let cleanNameArr = [];

for (let i = 0; i < nameParts.length; i++) {
  // Menggabungkan huruf pertama (UpperCase) dengan sisa huruf (slice)
  cleanNameArr.push(nameParts[i].charAt(0).toUpperCase() + nameParts[i].slice(1));
}
const cleanName = cleanNameArr.join(" ");

// Membuat Username (ahmad.fauzan)
const username = cleanName.toLowerCase().split(" ").join(".");


// 3. Part 2 — Analyze the Name
const containsAhmad = cleanName.includes("Ahmad");
const firstFiveChars = cleanName.slice(0, 5);
const replacementName = cleanName.replace("Ahmad", "Budi");


// 4. Part 3 — Process the Age & Bonus Birth Year
const age = parseInt(ageText);
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;


// 5. Part 4 — Process the Score & Pembulatan
const score = parseFloat(scoreText);
const formattedScore = score.toFixed(2);

const roundScore = Math.round(score);
const floorScore = Math.floor(score);
const ceilScore = Math.ceil(score);


// 6. Part 5 — Determine the Grade
let grade = "";
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "E";
}


// 7. Part 6 — Process Registration Date
const regParts = registrationText.split("-");
const regDay = Number(regParts[0]);
const regMonth = Number(regParts[1]);
const regYear = Number(regParts[2]);


// 8. Part 7 & 8 — Current Date & Time + Date Formatter
const now = new Date();

function formatDate(date) {
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0"); // Bulan dimulai dari 0
  const y = String(date.getFullYear());
  return `${d}/${m}/${y}`;
}

const reportDate = formatDate(now);
const reportHours = String(now.getHours()).padStart(2, "0");
const reportMinutes = String(now.getMinutes()).padStart(2, "0");
const reportTime = `${reportHours}:${reportMinutes}`;


// 9. Part 9 — Lucky Dice
const dice = Math.floor(Math.random() * 6) + 1;
let diceResult = "";

if (dice === 6) {
  diceResult = "🔥 JACKPOT!";
} else if (dice === 1) {
  diceResult = "💀 BAD LUCK!";
} else {
  diceResult = "😎 GOOD LUCK!";
}


// 10. Fitur Bonus Kreativitas (Object & Array)
// Memanfaatkan Object untuk menyimpan data bonus sekaligus memenuhi rubric "Object"
const bonusData = {
  email: `${username}@hsi.sch.id`,
  statusLulus: score >= 75 ? "LULUS ✅" : "BELUM LULUS ❌",
  dayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
};
const dayName = bonusData.dayNames[now.getDay()];


// 11. FINAL REPORT (Output Console)
console.log("╔════════════════════════════════════╗");
console.log("║      🎓 STUDENT DATA PROCESSOR     ║");
console.log("╚════════════════════════════════════╝");

console.log("👤 STUDENT");
console.log("────────────────────────────────────");
console.log(`Original Name : "${studentName}"`);
console.log(`Clean Name    : ${cleanName}`);
console.log(`Username      : ${username}`);
console.log(`Email Auto    : ${bonusData.email}`); // Fitur Bonus

console.log("\n🔎 NAME ANALYSIS");
console.log("────────────────────────────────────");
console.log(`Contains Ahmad : ${containsAhmad}`);
console.log(`First 5 chars  : ${firstFiveChars}`);
console.log(`Replacement    : ${replacementName}`);

console.log("\n🎂 AGE");
console.log("────────────────────────────────────");
console.log(`Age Text       : ${ageText}`);
console.log(`Age            : ${age}`);
console.log(`Birth Year     : ${birthYear}`);

console.log("\n📊 SCORE");
console.log("────────────────────────────────────");
console.log(`Original Score : ${scoreText}`);
console.log(`Formatted      : ${formattedScore}`);
console.log(`Round          : ${roundScore}`);
console.log(`Floor          : ${floorScore}`);
console.log(`Ceil           : ${ceilScore}`);
console.log(`Grade          : ${grade}`);
console.log(`Status         : ${bonusData.statusLulus}`); // Fitur Bonus

console.log("\n📅 REGISTRATION");
console.log("────────────────────────────────────");
console.log(`Day            : ${regDay}`);
console.log(`Month          : ${regMonth}`);
console.log(`Year           : ${regYear}`);

console.log("\n🕐 REPORT GENERATED");
console.log("────────────────────────────────────");
console.log(`Date           : ${reportDate} (${dayName})`); // Fitur Bonus (Nama Hari)
console.log(`Time           : ${reportTime}`);

console.log("\n🎲 LUCKY DICE");
console.log("────────────────────────────────────");
console.log(`Dice           : ${dice}`);
console.log(`Result         : ${diceResult}`);

console.log("╔════════════════════════════════════╗");
console.log("║       🚀 PROCESS COMPLETE!         ║");
console.log("╚════════════════════════════════════╝");