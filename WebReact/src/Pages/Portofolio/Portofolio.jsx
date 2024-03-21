import "./portofolio.css"
import { Link } from "react-router-dom"

function Portofolio() {
    return(
        <>
        <div>
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

            <div className="container-project">
                <div>
                    <video className="project1" autoPlay controls>
                        <source src="src/assets/Video1.mp4" type="video/mp4" />
                    </video>  
                </div>
                

                <div>
                    <img className="project2" src="src/assets/Sertifikat1.png" alt="" />
                </div>
                <div>
                    <img className="project" src="src/assets/Sertifikat2.png" alt="" />
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

export default Portofolio