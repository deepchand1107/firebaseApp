import React from 'react'

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
                <p>Posted By Deep</p>
                <small className="grey-text">3rd sep, 2am</small>
            </div>
        </div>
    )
}

export default ProjectSummary
