import React from 'react'
import './about.css'

function Job(props) {
    return (
        <div className="job-description">
            <h4>{props.title}</h4>
            {props.subtitle && <h6>{props.subtitle}</h6>}
            {props.location && <p className="job-location">
                                    <a className="job-location" href={props.url}>{props.location}</a> , {props.period}
                                </p>}
        </div>
    )
}

export default Job
