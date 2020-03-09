import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.css';

export default class login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            user: "",
            password: ""
        }
    }

    onChange = (e) => {
       const { name, value } = e.target;
       this.setState({
           [name]: value
       });
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.history.push('/home');
    }
    
    render() {

        const { user, password } = this.state;
        return (
            <div className="linear-background login-form">
               <div className="card-wrapper">
                  <div className="card-content">
                     <form onSubmit={this.onSubmit}>
                        <h5 className="mb-5">Welcome to example app :D</h5>
                        <div className="input-group mb-3">
                            <input onChange={this.onChange} value={user} type="text" className="form-control" placeholder="Username" name="user" />
                        </div>
                        <div className="input-group mb-4">
                            <input onChange={this.onChange} value={password} type="text" className="form-control" placeholder="Password" name="password" />
                        </div>
                        <button type="submit" className="btn btn-success mb-3">Login</button>
                        <Link to ="/recover">Forgot password? Click here!</Link>
                     </form>
                  </div>
               </div>
            </div>
        )
    }
}
