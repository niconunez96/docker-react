import React from 'react';
import { Link } from 'react-router-dom'

import './Works.css'

const Works = (props) => {
    
    const getDefaultGallery = () => {
        return (
            <section className="default-gallery">
                <h3>
                    Galeria
                </h3>
            </section>
        )
    }

    const DefaultGallery = props.displayDefaultGallery
                ? getDefaultGallery()
                : null
    return (
        <>
            <section className="works-container">
                <div className="works-selector">
                    <h2 className="works-title">Trabajos realizados:</h2>
                    <div className="work-tags">
                        <label className="work-tag">
                            <Link to="/works/pipes-wire/">
                                Cables y tuberias
                            </Link>
                        </label>
                        <label className="work-tag">
                            <Link to="/works/street/">
                                Cruces de calle
                            </Link>
                        </label>
                    </div>
                </div>
            </section>
            {DefaultGallery}
        </>
    )
};


export default Works;