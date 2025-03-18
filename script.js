<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Bambang Sugiarto</title>
    <style>
        .navbar {
            background-color: #333;
            overflow: hidden;
            padding: 10px;
        }
        .navbar a {
            color: white;
            text-decoration: none;
            padding: 10px 15px;
            display: inline-block;
        }
        .navbar a:hover {
            background-color: #575757;
        }
    </style>
    <script>
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
    </script>
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

    <script>
        var x = 1;
        switch (x) {
            case 1:
                window.alert("tidak ada");
                break;
            case 2:
                window.alert("tidak ada");
                break;
            default:
                window.alert("Tidak ada");
        }
    </script>
</body>
</html>
