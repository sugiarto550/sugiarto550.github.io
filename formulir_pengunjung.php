<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulir Data Pengunjung Perpustakaan Bambang Sugiarto</title>
    <style>
        body {
            font-family: calibri;
            background-color:rgb(218, 163, 36);
            margin: 0;
            padding: 20px;
        }
        h2 {
            text-align: center;
            color: #333;
        }
        .form-container {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 600px;
            margin: auto;
        }
        table {
            width: 100%;
            margin: 20px 0;
        }
        td {
            padding: 10px;
        }
        input[type="text"], input[type="email"], input[type="tel"], select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        input[type="submit"] {
            background-color:rgb(50, 40, 6);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
        }
        input[type="submit"]:hover {
            background-color:rgb(43, 41, 15);
        }
    </style>
</head>
<body>
 <div class="navbar">
    <a href="index.html">Beranda</a>
    <a href="about.html">About Me</a>
    <a href="contact-us.html">Contact Us</a>
    <a href="blog.html">Blog</a>
    <a href="hello.html">Hello</a>
    <a href="formulir_pengunjung.php">Pengunjung</a>
  </div>

<div class="content">
<h2>Formulir Data Pengunjung Perpustakaan Bambang Sugiarto</h2>
<div class="form-container">
    <form method="post" action="proses.php">
        <table>
            <tr>
                <td>Nama</td>
                <td><input type="text" name="nama" required></td>
            </tr>
            <tr>
                <td>NIP</td>
                <td><input type="text" name="NIP" required></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="email" name="email" required></td>
            </tr>
            <tr>
                <td>Telepon</td>
                <td><input type="tel" name="telepon" required></td>
            </tr>
            <tr>
                <td>Jenis Kelamin</td>
                <td>
                    <select name="jenis_kelamin" required>
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Alamat</td>
                <td><input type="text" name="alamat" required></td>
            </tr>
            <tr>
                <td>Jenis Pengunjung</td>
                <td>
                    <select name="jenis_pengunjung" required>
                        <option value="">Pilih Jenis Pengunjung</option>
                        <option value="Mahasiswa">Mahasiswa</option>
                        <option value="Dosen">Dosen</option>
                        <option value="Tenaga Pendidik">Tenaga Pendidik</option>
                        <option value="Pustakawan">Pustakawan</option>
                        <option value="Staff">Staff</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="submit" value="Kirim">
                </td>
            </tr>
        </table>
    </form>
</div>

</body>
</html>