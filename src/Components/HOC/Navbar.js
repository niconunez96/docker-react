import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = (Component) => (props) => {

    const getNavbarClass = (path) => {
        const currentPath = document.location.pathname;
        return currentPath.includes(path) ? 'navbar-item current-navbar-item':'navbar-item'
    }

    return (
        <div>
            <nav className="navbar">
                <div className={getNavbarClass("/home")}>
                    <Link to="/home" className="navbar-link">Inicio</Link>
                </div>
                <div className={getNavbarClass("/aboutus")}>
                    <Link to="/aboutus" className="navbar-link">
                        Sobre nosotros
                    </Link>
                </div>
                <div className={getNavbarClass("/works")}>
                    <Link to="/works" className="navbar-link">
                        Nuestros trabajos
                    </Link>
                </div>
            </nav>
            <Component {...props}></Component>
        </div>
    )
}


export default Navbar