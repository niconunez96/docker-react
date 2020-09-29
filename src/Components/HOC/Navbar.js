import React from 'react'
import Navbar from '../Components/Navbar/Navbar'


const NavbarHOC = (Component) => (props) => {
    return (
        <div>
            <Navbar></Navbar>
            <Component {...props}></Component>
        </div>
    )
}


export default NavbarHOC