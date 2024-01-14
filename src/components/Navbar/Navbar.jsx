import { Link } from "react-router-dom"
import CardWidget from "../CardWidget/CardWidget"
import "./Navbar.css"

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src="/navbar-logos.png" alt="Navbar logos" className="NavbarLogos" />
                    
                    <div className="tituloNavbar">
                        <Link className="titulo" to='/'>LOS TRES PULGOSOS</Link>
                    </div>
                    <div className="navbar-nav">
                        <Link to='/' className="categoria">INICIO</Link>

                        <Link to='/products/Comida' className="categoria">Comida</Link>

                        <Link to='/products/Ropa' className="categoria">Ropa</Link>

                        <Link to='/products/Accesorios' className="categoria">Accesorios</Link>
                        <CardWidget/>
                    </div>
                </div>
        </nav>
    )
}

export default Navbar