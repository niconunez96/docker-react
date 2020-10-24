import React from 'react';
import './Footer.css'


const Footer = (props) => {
    return (
        <section className="contactUsContainer">
            <section className="contactUs">
                <h3 className="contactUs-title">Contáctanos</h3>
                <div className="contactUs-media">
                    <a className="media-link" href="https://wa.link/l5b15d" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                        261 556-5192
                    </a>
                    <a className="media-link" href="https://www.linkedin.com/in/jorge-sainer-lizarazo-254a621aa/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                        Jorge Sainer Lizarazo
                    </a>
                    <a className="media-link" href="mailto:sainerlizarazo@hotmail.com.ar" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                        sainerlizarazo@hotmail.com
                    </a>
                </div>
            </section>
            <section className="address">
                <div className="address-name">
                    <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                    <p>Gral. Manuel Belgrano s/n Cruz de Piedra - Maipu</p>
                </div>
            </section>
        </section>
    )
};


export default Footer;