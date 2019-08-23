import React, { Component } from 'react';
import { connect } from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
class CreateProject extends Component {
    state = { 
        title:'',
        content:''
     }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createProject(this.state);
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col s12 m2"></div>
                    <div className="col s12 m7">
                    
                
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                         <textarea id="content"  className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn teal lighten-2 z-depth-0">Create</button>
                    </div>
                </form>
                </div>
                <div className="col s12 m3"></div>
                </div>
            </div>
         );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        createProject:(project)=>dispatch(createProject(project))
    }
}
 
export default connect(null, mapDispatchToProps)(CreateProject);