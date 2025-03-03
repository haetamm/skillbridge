import obfuscator from "javascript-obfuscator";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname } from "path";

// Path sumber dan tujuan
const sourcePath = "src/utils/referral.js";
const outputPath = "public/widget/referral.js";

// Baca kode dari file sumber
const code = readFileSync(sourcePath, "utf8");

// Obfuscate kode
const obfuscated = obfuscator
  .obfuscate(code, {
    compact: true, // Menghapus spasi dan baris baru
    controlFlowFlattening: true, // Mengacak alur kontrol
    deadCodeInjection: true, // Menyisipkan kode mati untuk membingungkan
    renameGlobals: true, // Mengacak nama variabel global
    stringArray: true, // Mengacak string ke dalam array
    stringArrayRotate: true,
    stringArrayShuffle: true,
  })
  .getObfuscatedCode();

// Pastikan folder "public/widget" ada
const outputDir = dirname(outputPath); // Ambil direktori dari path tujuan (public/widget)
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true }); // Buat folder secara rekursif jika belum ada
}

// Tulis kode yang sudah diobfuscate ke file tujuan
writeFileSync(outputPath, obfuscated);
console.log(
  "Obfuscation complete! Folder and file created if they didn't exist."
);
