import "./home.css"
import { Link } from "react-router-dom"

function Home() {
    return (
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
                <img className="logouin" src="src/assets/LogoUin.png"  alt="" />
            </div>

            <div className="Welcome">
                <img className="me" src="src/assets/dms.jpeg" alt="" />
                <h2>M Dhimas Hadid</h2>
            </div>
            <div className="nama">
                <p>UIN SULTAN SYARIF KASIM RIAU || TEKNIK INFORMATIKA</p>
                <div className="button">
                    <a className="button-link" href="Biodata.html">Me</a>
                    <a className="button-link" href="Prestasi.html">Prestasi</a>
                    <a className="button-link" href="Galeri.html">Galeri</a>
                    <a className="button-link" href="Portofolio.html">Portofolio</a>
                    <a className="button-link" href="Contact.html">Contact</a>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <p>&copy; M Dhimas Hadid | 12250111231</p>
                </div>
            </footer>   
        </>
    );
}

export default Home