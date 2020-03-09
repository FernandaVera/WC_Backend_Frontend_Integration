import React, { Component } from 'react';
import "./styles.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { removeCurrentUser } from '../../redux/actions/sessionActions';

class listar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        console.log(this.props.session);

        axios.get("http://localhost:9000/todos/list")
            .then(todos => this.setState({ todos: todos.data }))
            .catch(err => console.log(err));
    }


    delete = (id) => {
        axios.delete("http://localhost:9000/todos/delete/" + id)
            .then(todos => this.setState({ todos: todos.data }))
            .catch(err => console.log(err));
    }

    logout = () => {
        this.props.removeCurrentUser();
        this.props.history.push('/');
    }
    
    render() {

        const { todos } = this.state;

        return (
            <div className="linear-background list-items-table">
                <Link to="/create" className="createBtn btn btn-primary">Add new ToDo</Link>
                <button className="logoutBtn btn btn-info" onClick={this.logout}>Logout</button>
               <div className="card-wrapper">
                    <div className="card-content">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Task</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.map(todo => {
                                        return (
                                            <tr key={todo.id}>
                                                <td>{ todo.id }</td>
                                                <td>{ todo.task }</td>
                                                <td><span className="material-icons">edit</span></td>
                                                <td><span onClick={() => this.delete(todo.id)} className="material-icons">delete</span></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
               </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    removeCurrentUser
}

const mapStateToProps = (state) => {
    return {
        session: state.session
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(listar);