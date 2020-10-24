import React from 'react';
import "./WorkGallery.css";
import Footer from '../../Components/Footer';


const WorkGallery = (props) => {
    const works = props.images.map((image, index) => (
        <div key={index} className="work-card">
            <img alt="project" src={image} height="300rem" width="100%" className="work-image"></img>
            <div className="work-info">
                <h3 className="work-info-title">
                    Title example
                </h3>
                <p className="work-info-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Sequi laborum nisi adipisci atque autem nobis consectetur 
                    reprehenderit eveniet obcaecati sapiente.
                </p>
            </div>
        </div>
    ))
    return (
        <div className="work-gallery-container">
            <section className="work-gallery">
                <h3 className="work-gallery-title">{props.name}</h3>
                <div className="gallery">
                    {works}
                </div>
            </section>
            <Footer/>
        </div>
    )
};


export default WorkGallery;