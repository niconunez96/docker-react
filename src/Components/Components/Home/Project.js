import React from 'react';
import './Project.css'

const Project = ({ img_url }) => {
    return (
        <section className="project-card">
            <img className="project-img" src={img_url} alt="project"></img>
        </section>
    )
};


export default Project;