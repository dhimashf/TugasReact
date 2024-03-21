import "./biodata.css"
import { Link } from "react-router-dom"

function Biodata() {
    return(
        <>
            <div>
            <div className="Nav">
                <div className="logo">
                    <h2>My Profile</h2>
                </div>
                <div>
                    <img className="logouin" src="src/assets/LogoUin.Png" alt="" />
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Biodata">Biodata</Link></li>
                        <li><Link to="/Prestasi">Prestasi</Link></li>
                        <li><Link to="/Galeri">Galeri</Link></li>
                        <li><Link to="/Portofolio">Portofolio</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className="tabel">
                <h2>About Me</h2>
                <table>
                    <tr>
                        <td>Nama</td>
                        <td>Muhammad Dhimas Hadid Fachrezy</td>
                    </tr>
                    <tr>
                        <td>Tempat Lahir</td>
                        <td>Medan</td>
                    </tr>
                    <tr>
                        <td>Tanggal Lahir</td>
                        <td>14 Oktober 2003</td>
                    </tr>
                    <tr>
                        <td>Jumlah Saudara</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>Belum Nikah</td>
                    </tr>
                </table>
            </div>

            <div className="box-pendidikan">
                <div className="title-box">
                    <h1>Riwayat Pendidikan</h1>
                </div>
                <div className="boxes">
                    <div className="box-kiri">
                        <img src="src/assets/topisd.jpg" alt="" />
                        <p><h3>Sekolah Dasar</h3></p>
                        <p>Saya pernah Bersekolah Dasar di 3 tempat, yaitu SD Muhammadiyah 2 Medan, SDN Jati 02 Sidoarjo dan saya lulus di SDN 159, Kecamatan Payung Sekaki, Kota Pekanbaru - Riau </p>
                    </div>

                    <div className="box-tengah">
                        <img src="src/assets/topismp.png" alt="" />
                        <p><h3>Sekolah Menengah Pertama</h3></p>
                        <p>Saya Bersekolah di SMPN 18, Kecamatan Sukajadi, Kota Pekanbaru - Riau </p>
                    </div>

                    <div className="box-kanan">
                        <img src="src/assets/topisma.jpeg" alt="" />
                        <p><h3>Sekolah Menengah Atas</h3></p>
                        <p>Saya Bersekolah di SMA Muhamadiyah 1 , Kecamatan Sukajadi, Kota Pekanbaru - Riau </p>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <p>&copy; M Dhimas Hadid | 12250111231</p>
                </div>
            </footer>
        </div>
        </>
    )
}

export default Biodata