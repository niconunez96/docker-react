import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import SideNavbar from './SideNavbar'

class Navbar extends Component{

    constructor(props){
        super(props);
        this.state = {
            shouldDisplaySideNavbar: false,
        }
    }

    getNavbarClass = (path) => {
        const currentPath = document.location.pathname;
        return currentPath.includes(path) ? 'navbar-item current-navbar-item':'navbar-item'
    }

    handleClick = () => {
        this.setState({
            shouldDisplaySideNavbar: true,
        })
    }

    handleClose = () => {
        this.setState({
            shouldDisplaySideNavbar: false,
        })
    }

    render(){
        return (
            <>
                <nav className="navbar-mobile">
                    <button className="navbar-btn" onClick={this.handleClick}>
                        <i className="fa fa-bars"></i>
                    </button>
                </nav>
                <nav className="navbar">
                    <div className={this.getNavbarClass("/home")}>
                        <Link to="/home" className="navbar-link">Inicio</Link>
                    </div>
                    <div className={this.getNavbarClass("/aboutus")}>
                        <Link to="/aboutus" className="navbar-link">
                            Sobre nosotros
                        </Link>
                    </div>
                    <div className={this.getNavbarClass("/works")}>
                        <Link to="/works" className="navbar-link">
                            Nuestros trabajos
                        </Link>
                    </div>
                </nav>
                <SideNavbar close={this.handleClose} isOpen={this.state.shouldDisplaySideNavbar}></SideNavbar>
            </>
        )
    }
}


export default Navbar