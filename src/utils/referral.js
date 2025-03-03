(function () {
  const script = document.currentScript;

  // Ambil parameter dari atribut script
  const params = {
    placement: script.getAttribute("data-placement") || "right",
    text: script.getAttribute("data-text") || "Refer a Friend!",
    textColor: script.getAttribute("data-text-color") || "#ffffff",
    iconSrc: script.getAttribute("data-icon-src") || "",
    bgColor: script.getAttribute("data-bg-color") || "#007bff",
    borderRadius: script.getAttribute("data-border-radius") || "10px",
    redirectURL: script.getAttribute("data-redirect-url") || "#",
  };

  // Buat elemen popup
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.bottom = "20px";
  popup.style[params.placement] = "20px";
  popup.style.background = params.bgColor;
  popup.style.color = params.textColor;
  popup.style.padding = "10px 20px";
  popup.style.borderRadius = params.borderRadius;
  popup.style.display = "flex";
  popup.style.alignItems = "center";
  popup.style.cursor = "pointer";
  popup.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  popup.style.transition = "opacity 0.3s";
  popup.style.zIndex = "9999";

  // Tambahkan ikon jika ada
  if (params.iconSrc) {
    const icon = document.createElement("img");
    icon.src = params.iconSrc;
    icon.style.width = "24px";
    icon.style.height = "24px";
    icon.style.marginRight = "10px";
    popup.appendChild(icon);
  }

  // Tambahkan teks
  const textNode = document.createElement("span");
  textNode.textContent = params.text;
  popup.appendChild(textNode);

  // Tambahkan event klik untuk redirect
  popup.addEventListener("click", function () {
    window.location.href = params.redirectURL;
  });

  // Tambahkan popup ke halaman
  document.body.appendChild(popup);
})();
