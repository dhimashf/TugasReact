import "./prestasi.css"
import { Link } from "react-router-dom"

function Prestasi() {
    return(
        <>
        <div className="Nav">
                <div className="logo">
                    <h2>My Profile</h2>
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
            <div>
            <img className="logouin" src="src/assets/LogoUin.png" alt="" />
            </div>
            <div className="box-prestasi">
                <div className="title-box">
                    <h1>My Achievement</h1>
                </div>
                <div className="boxes">
                    <div className="box-kiripres">
                        <img src="src/assets/JuaraAkustik.jpeg" alt="" />
                        <p><h3>JUARA 1 MUSIKALISASI PUISI</h3></p>
                        <p></p>
                    </div>
                    <div className="box-tengahpres">
                        <img src="src/assets/SertifikatRank.jpeg" alt="" />
                        <p><h3>JUARA II</h3></p>
                        <p>Siswa Berprestasi Akademik</p>
                    </div>
                    <div className="box-kananpres">
                        <img src="src/assets/SertifikatRank2.jpeg" alt="" />
                        <p><h3>Juara II</h3></p>
                        <p>Siswa Berprestasi Akademik</p>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="container">
                    <p>&copy; M Dhimas Hadid | 12250111231</p>
                </div>
            </footer>
        </>
    )
}

export default Prestasi