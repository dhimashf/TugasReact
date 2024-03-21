import "./contact.css"
import { Link } from "react-router-dom"

function Contact() {
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
            <img className="logouin" src="Gambar/LogoUin.png" alt="" />
            </div>
            <div className="Welcome">
            </div>
            <div className="nama">
                <div className="button">
                    <a className="button-link" href="Biodata.html">Me</a>
                    <a className="button-link" href="Prestasi.html">Prestasi</a>
                    <a className="button-link" href="Galeri.html">Galeri</a>
                    <a className="button-link" href="Portofolio.html">Portofolio</a>
                    <a className="button-link" href="Contact.html">Contact</a>
                </div>
            </div>
            <div className="containerForm">
                <h2>Contact Us</h2>
                <form action="submit.php" method="post">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your name.." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your email.." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Your message.." required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
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

export default Contact