import React from 'react';
import './Footer.css'


const Footer = (props) => {
    return (
        <section className="contactUs">
            <h3 className="contactUs-title">Contactanos</h3>
            <div className="contactUs-media">
                <i className="fa fa-whatsapp fa-3x" aria-hidden="true"></i>
                <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
            </div>
        </section>
    )
};


export default Footer;