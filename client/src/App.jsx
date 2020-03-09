import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/login/login';
import RecoverPassword from './components/forgotPassword/forgot_password';
import Home from './components/listar/listar';
import Create from './components/crear/crear';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons'
import { Provider } from "react-redux";
import Store from "../src/redux/store";

export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/recover" component={RecoverPassword} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/create" component={Create} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}