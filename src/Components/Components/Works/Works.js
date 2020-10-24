import React from 'react';
import { Link } from 'react-router-dom'

import './Works.css'

const Works = (props) => {
    
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
                        <label className="work-tag">
                            <Link to="/works/chambers/">
                                Cámaras
                            </Link>
                        </label>
                    </div>
                </div>
            </section>
            {props.children}
        </>
    )
};


export default Works;