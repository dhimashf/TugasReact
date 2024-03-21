import "./galeri.css"
import { Link } from "react-router-dom"

function Galeri() {
    return(
        <>
        <div>
            <div className="Nav">
                <div className="logo">
                    <h2>My Profile</h2>
                </div>
                <div>
                    <img className="logouin" src="src/assets/LogoUin.png" alt="" />
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

            <div className="clearfix">
                <div className="img-container">
                    <img src="src/assets/FotoSunset.jpeg" alt="d" style={{ width: "100%" }} />
                </div>
                <div className="img-container">
                    <img src="src/assets/FotoHome.jpeg" alt="d" style={{ width: "200%" }} />
                </div>
                <div className="img-container">
                    <img src="src/assets/FotoSendiri.jpeg" alt="d" style={{ width: "100%" }} />
                </div>

                <div className="img-container2">
                    <img src="src/assets/FotoBasket.jpeg" alt="d" style={{ width: "100%" }} />
                </div>
                <div className="img-container2">
                    <img src="src/assets/Foto3.jpeg" alt="d" style={{ width: "100%" }} />
                </div>
                <div className="img-container2">
                    <img src="src/assets/Akustik.jpeg" alt="d" style={{ width: "100%" }} />
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

export default Galeri