import React from 'react'

const PorjectDetails = (props) => {
    let id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>lalslaplspl</p>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by The Net Ninja</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PorjectDetails
