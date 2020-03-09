import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./styles.css";
import axios from 'axios';
 
export default class crear extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            task: ""
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

        const { task } = this.state;

        axios.post("http://localhost:9000/todos/create", { id: new Date().valueOf().toString(), task })
            .then(todos => this.props.history.push('/home'))
            .catch(err => {
                if (err.response) {
                    return console.log(err.response.data)
                }

                console.log(err)
            });
    }

    render() {

        const { task } = this.state;
        
        return (
            <div className="linear-background create-todo">
               <div className="card-wrapper">
                  <div className="card-content">
                     <form onSubmit={this.onSubmit}>
                        <h5 className="mb-5">Create new ToDo</h5>
                        <div className="input-group mb-4">
                            <input onChange={this.onChange} value={task} type="text" className="form-control" placeholder="ToDo description" name="task" />
                        </div>
                        <Link to="/home" className="btn btn-outline-secondary mr-5">Cancel</Link>
                        <button type="submit" className="btn btn-success">Create</button>
                     </form>
                  </div>
               </div>
            </div>
        )
    }
}
