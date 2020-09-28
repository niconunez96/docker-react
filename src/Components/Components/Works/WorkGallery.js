import React from 'react'

import Works from './Works'


const WorkGallery = (props) => {
    return (
        <section>
            <Works/>
            <h3>{props.name}</h3>
        </section>
    )
}


export default WorkGallery;