import React from 'react';
const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0.4 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by the Net Ninja</p>
                <p className="grey-text">2nd september, 2am</p>
            </div>

        </div>
    )
}
export default ProjectSummary;