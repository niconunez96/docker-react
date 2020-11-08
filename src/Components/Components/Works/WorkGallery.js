import React from 'react';
import "./WorkGallery.css";
import Footer from '../../Components/Footer';


const WorkGallery = ({ name, works }) => {
    const workCards = works.map((work) => (
        <div key={work.id} className="work-card">
            <img alt="project" src={work.imageUrl} height="300rem" width="100%" className="work-image"></img>
            <div className="work-info">
                <h3 className="work-info-title">
                    {work.title}
                </h3>
                <h5>Ubicación: {work.location}</h5>
                <h5>Fecha: {work.date}</h5>
                <h5>Descripción: {work.description}</h5>
            </div>
        </div>
    ))
    return (
        <div className="work-gallery-container">
            <section className="work-gallery">
                <h3 className="work-gallery-title">{name}</h3>
                <div className="gallery">
                    {workCards}
                </div>
            </section>
            <Footer/>
        </div>
    )
};


export default WorkGallery;