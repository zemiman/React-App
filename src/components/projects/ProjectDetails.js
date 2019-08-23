import React from 'react';
const ProjectDetails=(props)=>{
    // console.log(props);
    const id=props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title-{id}</span>
                    <p>React can be used as a base in the development of single-page or mobile applications, 
                        as it is optimal for fetching rapidly changing data that needs to be recorded. However, 
                        fetching data is only the beginning of what happens on a web page, which is why complex 
                        React applications usually require the use of additional libraries for state management, 
                        routing, and interaction with an API</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd september, 2am</div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDetails