import Home from "./Pages/Home/Home"
import Biodata from "./Pages/Biodata/Biodata"
import Galeri from "./Pages/Galeri/Galeri"
import Portofolio from "./Pages/Portofolio/Portofolio"
import Prestasi from "./Pages/Prestasi/Prestasi"
import Contact from "./Pages/Contact/Contact"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Biodata" element={<Biodata/>}/>
          <Route path="/Galeri" element={<Galeri/>}/>
          <Route path="/Prestasi" element={<Prestasi/>}/>
          <Route path="/Portofolio" element={<Portofolio/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
