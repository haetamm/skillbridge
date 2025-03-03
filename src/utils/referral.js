(function () {
  // Dapatkan elemen skrip saat ini untuk mengakses atribut datanya
  const script = document.currentScript;

  // Ambil parameter dari atribut skrip dengan nilai default
  const params = {
    placement: script.getAttribute("data-placement") || "right",
    text: script.getAttribute("data-text") || "Refer And Earn",
    textColor: script.getAttribute("data-text-color") || "#FFFFFF",
    iconSrc:
      script.getAttribute("data-icon-src") ||
      "https://dcdko16buub2z.cloudfront.net/widget/PjUYPiQFKI8Kxprt.png", // Ganti dengan URL ikon yang sesuai
    bgColor: script.getAttribute("data-bg-color") || "#1d81d9", // Tetapkan ke warna biru baru
    borderRadius: script.getAttribute("data-border-radius") || "12px", // Sesuaikan radius sudut untuk sudut yang membulat
    redirectURL: script.getAttribute("data-redirect-url") || "#",
  };

  // Buat elemen popup
  const popup = document.createElement("div");
  popup.style.position = "fixed"; // CSS: Mengikat popup ke viewport
  popup.style.bottom = "30px"; // CSS: Mengatur jarak dari bawah sebesar 30px
  popup.style[params.placement] = "30px"; // CSS: Mengatur jarak dari posisi yang ditentukan (misalnya, kanan) sebesar 30px
  popup.style.background = params.bgColor; // CSS: Mengatur warna latar belakang popup
  popup.style.color = params.textColor; // CSS: Mengatur warna teks
  popup.style.padding = "0"; // CSS: Mengatur ulang padding, elemen anak akan menangani padding
  popup.style.borderRadius = params.borderRadius; // CSS: Membulatkan sudut popup
  popup.style.display = "flex"; // CSS: Menggunakan flexbox untuk tata letak
  popup.style.alignItems = "center"; // CSS: Menengahkan item secara vertikal dalam kontainer flex
  popup.style.cursor = "pointer"; // CSS: Mengubah kursor untuk menunjukkan elemen yang dapat diklik
  popup.style.boxShadow = "0 3px 12px 0 rgb(48 56 80 / 50%)"; // CSS: Menambahkan efek bayangan
  popup.style.transition = "opacity 0.3s"; // CSS: Transisi opacity yang halus untuk animasi
  popup.style.zIndex = "999999"; // CSS: Memastikan popup tetap berada di atas elemen lain
  popup.style.opacity = "1"; // CSS: Mengatur opacity penuh untuk visibilitas
  popup.style.lineHeight = "1.53"; // CSS: Menyesuaikan tinggi baris untuk jarak teks

  // Buat kontainer ikon (elemen bulat)
  if (params.iconSrc) {
    const iconContainer = document.createElement("span");
    iconContainer.style.minWidth = "50px"; // CSS: Memastikan lebar minimum 50px
    iconContainer.style.width = "50px"; // CSS: Mengatur lebar tetap 50px
    iconContainer.style.height = "50px"; // CSS: Mengatur tinggi tetap 50px
    iconContainer.style.backgroundColor = params.bgColor; // CSS: Mencocokkan warna latar belakang dengan popup
    iconContainer.style.borderRadius = params.borderRadius;
    iconContainer.style.display = "flex"; // CSS: Menggunakan flexbox untuk tata letak
    iconContainer.style.alignItems = "center"; // CSS: Menengahkan item secara vertikal
    iconContainer.style.justifyContent = "center"; // CSS: Menengahkan item secara horizontal
    iconContainer.style.color = "#080c13"; // CSS: Mengatur warna teks di dalam ikon (opsional, mungkin tidak diperlukan)

    const icon = document.createElement("img");
    icon.src = params.iconSrc;
    icon.style.width = "35px"; // CSS: Mengatur lebar gambar ikon
    icon.style.borderRadius = "50%"; // CSS: Memastikan ikon berbentuk bulat
    iconContainer.appendChild(icon);

    popup.appendChild(iconContainer);
  }

  // Buat elemen teks
  const textNode = document.createElement("span");
  textNode.textContent = params.text;
  textNode.style.whiteSpace = "nowrap"; // CSS: Mencegah teks bergaris baru
  textNode.style.overflow = "hidden"; // CSS: Menyembunyikan teks yang meluap
  textNode.style.textOverflow = "ellipsis"; // CSS: Menampilkan elipsis (...) untuk teks yang meluap
  textNode.style.display = "inline-block"; // CSS: Membolehkan teks berperilaku seperti elemen inline dengan properti blok
  textNode.style.fontFamily = "CarmenSans, 'Montserrat', sans-serif"; // CSS: Mengatur font ke CarmenSans atau fallback Montserrat/sans-serif
  textNode.style.fontSize = "17px"; // CSS: Mengatur ukuran font
  textNode.style.fontWeight = "700"; // CSS: Membuat teks tebal
  textNode.style.letterSpacing = "0.46px"; // CSS: Menyesuaikan jarak antar huruf
  textNode.style.color = params.textColor; // CSS: Mengatur warna teks (putih)
  textNode.style.paddingLeft = "15px"; // CSS: Menambahkan padding kiri
  textNode.style.paddingRight = "15px"; // CSS: Menambahkan padding kanan
  textNode.style.textTransform = "none"; // CSS: Mencegah transformasi teks (misalnya, huruf kapital)

  popup.appendChild(textNode);

  // Tambahkan pendengar event klik untuk mengarahkan ke URL yang ditentukan
  popup.addEventListener("click", function () {
    window.location.href = params.redirectURL;
  });

  // Tambahkan popup ke halaman (memastikan DOM sudah siap melalui DOMContentLoaded di versi sebelumnya)
  document.body.appendChild(popup);
})();
