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

// Fungsi untuk tombol selamat datang
function showWelcomeMessage() {
    alert("Selamat datang di website Bambang Sugiarto!");
}

</head>
<body>

    <!-- Navbar -->
    <div class="navbar">
        <a href="#">Beranda</a>
        <a href="about.html">About Me</a>
        <a href="contact-us.html">Contact Us</a>
        <a href="blog.html">Blog</a>
        <a href="footer.js">JavaScript</a>
    </div>
