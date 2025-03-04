import obfuscator from "javascript-obfuscator";
import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
} from "fs";
import { dirname, join } from "path";

// Opsi obfuscation yang akan digunakan
const obfuscationOptions = {
  compact: true,
  controlFlowFlattening: true,
  deadCodeInjection: true,
  renameGlobals: false, // Ubah ke false untuk aman dengan React/Vite
  stringArray: true,
  stringArrayRotate: true,
  stringArrayShuffle: true,
};

// Fungsi untuk mengobfuscate satu file
function obfuscateFile(sourcePath, outputPath) {
  // Baca kode dari file sumber
  const code = readFileSync(sourcePath, "utf8");

  // Obfuscate kode
  const obfuscated = obfuscator
    .obfuscate(code, obfuscationOptions)
    .getObfuscatedCode();

  // Pastikan folder tujuan ada
  const outputDir = dirname(outputPath);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  // Tulis kode yang sudah diobfuscate
  writeFileSync(outputPath, obfuscated);
  console.log(`Obfuscated: ${outputPath}`);
}

// 1. Obfuscate file referral.js (fungsi awal)
const referralSourcePath = "src/utils/referral.js";
const referralOutputPath = "public/widget/referral.js";

if (existsSync(referralSourcePath)) {
  obfuscateFile(referralSourcePath, referralOutputPath);
} else {
  console.log(
    `File ${referralSourcePath} tidak ditemukan, melewati proses referral.js`
  );
}

// 2. Obfuscate file hasil build di dist/assets
const distDir = "dist/assets";

if (existsSync(distDir)) {
  // Baca semua file .js di folder dist/assets
  const buildFiles = readdirSync(distDir).filter((file) =>
    file.endsWith(".js")
  );

  buildFiles.forEach((file) => {
    const filePath = join(distDir, file);
    obfuscateFile(filePath, filePath); // Input dan output sama, menimpa file asli
  });
} else {
  console.log(
    `Folder ${distDir} tidak ditemukan, pastikan vite build sudah dijalankan`
  );
}

console.log("Obfuscation complete!");
