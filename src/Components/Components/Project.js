import React from 'react';

const Project = ({ img_url }) => {
    return (
        <section className="project-card">
            <img height="100%" width="100%" src={img_url} alt="project"></img>
        </section>
    )
};


export default Project;