import React from 'react';
import Project from './Project'
import { CURRENT_PROJECTS_IMG } from '../../Constants/Projects'

import './CurrentProjects.css'

const CurrentProjects = (props) => {
    const projects = CURRENT_PROJECTS_IMG.map(
        project => <Project key={project} img_url={project}></Project>
    )
    return (
        <div>
            <h3 className="projects-title">Proyectos actuales</h3>
            <section className="projects-container">
                {projects}
            </section>
        </div>
    )
};

export default CurrentProjects;