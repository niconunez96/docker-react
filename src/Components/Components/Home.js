import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import CurrentProjects from './CurrentProjects';
import './Home.css';

const Home = (props) => {
    return (
        <div>
            <div className="home">
                <section className="feed">
                    <div className="feed-image">
                        <article className="feed-article">
                            <h1 className="feed-article-title">Somos una empresa confiable para nuestros clientes</h1>
                            <p className="feed-article-paragraph">
                            Contamos con amplia capacidad para dar respuestas
                            adecuadas a las necesidades de tiempo y calidad,
                            a través de personal altamente capacitado y motivado,
                            utilizando tecnología de primer nivel.
                            </p>
                            <Link className="feed-article-btn" to="/trabajos">
                                Nuestros trabajos
                                <i class="fa fa-building" aria-hidden="true">
                                </i>
                            </Link>
                        </article>
                    </div>
                </section>
                <section className="currentProjects">
                    <CurrentProjects/>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default Home;