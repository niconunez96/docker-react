import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = (Component) => (props) => {

    const getNavbarClass = (path) => {
        const currentPath = document.location.pathname;
        return currentPath === path ? 'navbar-item current':'navbar-item'
    }

    return (
        <div>
            <nav className="navbar">
                <Link to="/" className={getNavbarClass("/")}>Inicio</Link>
                <Link to="/trabajos" className={getNavbarClass("/trabajos")}>
                    Nuestros trabajos
                </Link>
                <Link to="/nosotros" className={getNavbarClass("/nosotros")}>
                    Sobre nosotros
                </Link>
            </nav>
            <Component {...props}></Component>
        </div>
    )
}


export default Navbar