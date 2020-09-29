import React from 'react';
import { Link } from 'react-router-dom'
import './SideNavbar.css'


const SideNavbar = (props) => {

    const sidenavbarIsOpen = props.isOpen
    return (
        <>
            <nav className={sidenavbarIsOpen ? "sidenavbar sidenavbar--open":"sidenavbar"}>
                <button className="sidenavbar-btn" onClick={props.close}>
                    <i className="fa fa-close"></i>
                </button>
                <div className="sidenavbar-items">
                    <div className="sidenavbar-item">
                        <Link to="/home" className="sidenavbar-link" onClick={props.close}>
                            Inicio
                        </Link>
                    </div>
                    <div className="sidenavbar-item">
                        <Link to="/aboutus" className="sidenavbar-link" onClick={props.close}>
                            Sobre nosotros
                        </Link>
                    </div>
                    <div className="sidenavbar-item">
                        <Link to="/works" className="sidenavbar-link" onClick={props.close}>
                            Nuestros trabajos
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
};


export default SideNavbar;