import React, { Component } from 'react';
class SignIn extends Component {
    state = { 
        email:'',
        password:''
     }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
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
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn teal lighten-2 z-depth-0">Login</button>
                    </div>
                </form>
                </div>
                <div className="col s12 m3"></div>
                </div>
            </div>
         );
    }
}
 
export default SignIn;