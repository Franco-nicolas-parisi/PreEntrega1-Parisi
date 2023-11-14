import CardWidget from "../CardWidget/CardWidget"
import NavbarLogos from "../assets/navbar-logos.png"
import "./Navbar.css"

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src={NavbarLogos} alt="Navbar logos" className="NavbarLogos" />
                    
                    <div className="tituloNavbar">
                        <p>LOS TRES PULGOSOS</p>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Alimento</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Accesorios</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Ropa</a>
                        </li>
                        <CardWidget/>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar