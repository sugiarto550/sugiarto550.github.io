// Tampilkan alert otomatis saat halaman dimuat
window.onload = function() {
    alert("Selamat datang di website Bambang Sugiarto!");
};

// Tambahkan footer ke halaman
document.addEventListener("DOMContentLoaded", function() {
    let footer = document.createElement("footer");
    footer.innerHTML = "<p>&copy; 2025 Perpustakaan Bambang Sugiarto</p>";
    footer.style.backgroundColor = "#e2b00d";
    footer.style.color = "white";
    footer.style.textAlign = "center";
    footer.style.padding = "15px 0";
    footer.style.position = "fixed";
    footer.style.bottom = "0";
    footer.style.width = "100%";
    
    document.body.appendChild(footer);
});

// Fungsi untuk menampilkan alert dari switch case
var x = 1;
switch (x) {
    case 1:
        alert("tidak ada");
        break;
    case 2:
        alert("tidak ada");
        break;
    default:
        alert("Tidak ada");
}
