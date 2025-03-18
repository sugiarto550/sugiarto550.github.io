document.addEventListener("DOMContentLoaded", function () {
    let marquee = document.createElement("div");
    marquee.innerText = "Selamat datang di Website Perpustakaan Bambang Sugiarto!";
    marquee.style.position = "fixed";
    marquee.style.bottom = "10px";
    marquee.style.width = "100%";
    marquee.style.background = "#333";
    marquee.style.color = "#fff";
    marquee.style.padding = "5px";
    marquee.style.fontSize = "14px";
    marquee.style.whiteSpace = "nowrap";
    marquee.style.overflow = "hidden";
    marquee.style.display = "block";
    marquee.style.textAlign = "center";

    document.body.appendChild(marquee);

    let pos = window.innerWidth;
    function moveText() {
        pos -= 2;
        if (pos < -marquee.offsetWidth) {
            pos = window.innerWidth;
        }
        marquee.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(moveText);
    }
    moveText();

    // Fungsi untuk menampilkan salam berdasarkan waktu
    function setGreeting() {
        let greetingText = "";
        let hour = new Date().getHours();
        if (hour < 12) {
            greetingText = "Selamat Pagi, Selamat Datang di Website Perpustakaan Bambang Sugiarto!";
        } else if (hour < 18) {
            greetingText = "Selamat Siang, Selamat Datang di Website Bambang Sugiarto!";
        } else {
            greetingText = "Selamat Malam, Selamat Datang di Website Perpustakaan Bambang Sugiarto!";
        }
        document.getElementById("greeting").innerText = greetingText;
    }
    
    // Fungsi untuk mengaktifkan mode kuning
    document.getElementById("toggle-mode").addEventListener("click", function() {
        document.body.classList.toggle("yellow-mode");
    });
    
    // Tambahkan CSS untuk mode kuning
    let style = document.createElement("style");
    style.innerHTML = `
        .yellow-mode {
            background-color: yellow !important;
            color: black !important;
        }
    `;
    document.head.appendChild(style);
    
    // Panggil fungsi salam saat halaman dimuat
    setGreeting();
});
