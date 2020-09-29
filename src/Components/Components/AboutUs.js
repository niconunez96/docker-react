import React from 'react';
import Footer from './Footer'
import './AboutUs.css'
import BodegaLopez from '../../images/clients/bodega-lopez.png'
import ObrasAndinas from '../../images/clients/oa-logo.png'

const AboutUs = (props) => {
    return (
        <div className="aboutUs-container">
            <div className="aboutUs">
                <section className="ourServices">
                    <h3 className="ourServices-title">
                        <i className="fa fa-building mr-1" aria-hidden="true"></i>
                        Alguno de nuestros servicios
                    </h3>
                    <section className="ourServices-list">
                        <article className="construction">
                            <h4>
                                Construcción
                            </h4>
                            <ul>
                                <li>
                                    <i className="fa fa-hand-o-right mr-1 mr-1" aria-hidden="true"></i>
                                    Obra pública y privada
                                </li>
                                <li>
                                    <i className="fa fa-hand-o-right mr-1" aria-hidden="true"></i>
                                    Contrucción en seco
                                </li>
                                <li>
                                    <i className="fa fa-hand-o-right mr-1" aria-hidden="true"></i>
                                    Contrapisos
                                </li>
                                <li>
                                    <i className="fa fa-hand-o-right mr-1" aria-hidden="true"></i>
                                    Plateas para viviendas industriales
                                </li>
                            </ul>
                        </article>
                        <article className="electricity">
                            <h4>
                                Electricidad
                            </h4>
                            <ul>
                                <li>
                                    <i className="fa fa-hand-o-right mr-1 mr-1" aria-hidden="true"></i>
                                    Obra pública y privada
                                </li>
                            </ul>
                        </article>
                        <article className="wineries">
                            <h4>
                                Servicio a bodegas
                            </h4>
                            <ul>
                                <li>
                                    <i className="fa fa-hand-o-right mr-1 mr-1" aria-hidden="true"></i>
                                    Podas, desbrotes ,cruzar ,despampanar
                                </li>
                                <li>
                                    <i className="fa fa-hand-o-right mr-1" aria-hidden="true"></i>
                                    Enmaderacion de cero a terminado
                                </li>
                                <li>
                                    <i className="fa fa-hand-o-right mr-1" aria-hidden="true"></i>
                                    Plantación de cepas (cañas y polainas)
                                </li>
                                <li>
                                    <i className="fa fa-hand-o-right mr-1" aria-hidden="true"></i>
                                    Cambio de maderas
                                </li>
                            </ul>
                        </article>
                        <article className="comunication">
                            <h4>
                                Telecomunicaciones
                            </h4>
                            <ul>
                                <li>
                                    <i className="fa fa-hand-o-right mr-1 mr-1" aria-hidden="true"></i>
                                    Rotura de vereda, zanjeo, colocaion de tritubos, tapado y
                                    compactación (con reposicion del material terminado). 
                                </li>
                                <li>
                                    <i className="fa fa-hand-o-right mr-1" aria-hidden="true"></i>
                                    Contrucción de cámaras de las medidas que se requiera.
                                </li>
                                <li>
                                    <i className="fa fa-hand-o-right mr-1" aria-hidden="true"></i>
                                    Cruzes de calle con herramientas convencionales (manual).
                                </li>
                            </ul>
                        </article>
                    </section>
                </section>
                <section className="clients">
                    <hr></hr>
                    <h3 className="clients-title">
                        <i className="fa mr-1 fa-handshake-o" aria-hidden="true"></i>
                        Nuestros clientes
                    </h3>
                    <section className="clients-list">
                        <img className="bodega-lopez client-logo" src={BodegaLopez} alt="bodega-lopez"></img>
                        <img className="obras-andinas client-logo" src={ObrasAndinas} alt="obras-andinas"></img>
                        <h4 className="client-name">Timsa</h4>
                        <h4 className="client-name">Vizzion SA</h4>
                        <h4 className="client-name">Jugos Cuyo SA</h4>
                        <h4 className="client-name">Saavedra SA</h4>
                    </section>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
};


export default AboutUs;