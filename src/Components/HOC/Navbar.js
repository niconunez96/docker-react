import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = (Component) => (props) => {
    return (
        <div>
            <nav className="navbar">
                <Link to="/home" className="navbar-item">Inicio</Link>
                <Link to="/trabajos" className="navbar-item">
                    Nuestros trabajos
                </Link>
                <Link to="/cv" className="navbar-item">
                    Curriculum
                </Link>
                <Link to="/proyectos-actuales" className="navbar-item">
                    Proyectos actuales
                </Link>
            </nav>
            <Component {...props}></Component>
        </div>
    )
}


export default Navbar