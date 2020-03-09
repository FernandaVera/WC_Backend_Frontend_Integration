import React, { Component } from 'react';
import './styles.css';
import { Link } from "react-router-dom";

export default class login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email: ""
        }
    }

    onChange = (e) => {
       const { name, value } = e.target;
       this.setState({
           [name]: value
       });
    }

    sendEmailToRecoverCredentials = (e) => {
        e.preventDefault();

        alert("Success, verify your email")
    }
    
    render() {

        const { email } = this.state;
        return (
            <div className="linear-background recover-password-form">
               <div className="card-wrapper">
                  <div className="card-content">
                     <form onSubmit={this.sendEmailToRecoverCredentials}>
                        <h5 className="mb-5">We will send you a recover link :)</h5>
                        <div className="input-group mb-4">
                            <input onChange={this.onChange} value={email} type="text" className="form-control" placeholder="user@email.com" name="email" />
                        </div>
                        <Link to="/" className="btn btn-outline-secondary mr-5">Back</Link>
                        <button type="submit" className="btn btn-success">Recover password</button>
                     </form>
                  </div>
               </div>
            </div>
        )
    }
}