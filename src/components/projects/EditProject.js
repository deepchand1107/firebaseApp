import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
// import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class EditProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.project.title,
            content: props.project.content
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        // this.props.createProject(this.state);
        //this.props.history.push('/');
    }
    componentWillReceiveProps(newProps, props) {
        console.log(newProps, props)
        this.setState({
            title: newProps.project.title,
            content: newProps.project.content
        })

    }

    render() {
        const { auth } = this.props;
        const { project } = this.state;
        console.log('props:::', project, this.state)
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Edit Project</h5>
                    <div className="input-field">
                        <input type="text" id='title' value={this.state.title} onChange={this.handleChange} />
                        <label htmlFor="title" className='active'>Project Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="content" className="materialize-textarea" value={this.state.content} onChange={this.handleChange}></textarea>
                        <label htmlFor="content" className='active'>Project Content</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps.match.params.id)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    console.log(project);

    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'projects'
    }])
)(EditProject)
