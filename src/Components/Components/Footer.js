import React from 'react';
import './Footer.css'


const Footer = (props) => {
    return (
        <section className="contactUs">
            <h3 className="contactUs-title">Contactanos</h3>
            <div className="contactUs-media">
                <a href="https://wa.link/l5b15d" target="_blank">
                    <i className="fa fa-whatsapp fa-3x" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/jorge-sainer-lizarazo-254a621aa/" target="_blank">
                    <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                </a>
                <a href="mailto:sainerlizarazo@hotmail.com.ar" target="_blank">
                    <i class="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
                </a>
            </div>
            <hr/>
            <div className="address">
                <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                <p>Gral. Manuel Belgrano s/n Cruz de Piedra - Maipu</p>
            </div>
        </section>
    )
};


export default Footer;