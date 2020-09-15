import React from 'react';
import { Link } from 'react-router-dom'
import Footer from './Footer';

import './Home.css';

const Home = (props) => {
    return (
        <div>
            <div className="home">
                <section className="feed">
                    <article className="feed-article">
                        <h1 className="feed-article-title">Somos un equipo con mas de 10 años de experiencia</h1>
                        <p className="feed-article-paragraph">Contamos con mas de 10 obras realizadas a distintas empresas tales como claro,...</p>
                        <Link className="feed-article-btn" to="/trabajos">
                            Nuestros trabajos
                        </Link>
                    </article>
                    <div className="feed-image">
                    </div>
                </section>
                <section className="aboutUs">
                    <h3>
                        Sobre nosotros
                    </h3>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default Home;