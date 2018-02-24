import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from "./Components/Home";
import Gifs from "./Components/Gifs";
import Contact from "./Components/Contact";
import logo from './logo.svg';
import styles from "./App.css"

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <HashRouter>
                  <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                      <li><NavLink exact to="/">Home</NavLink></li>
                      <li><NavLink to="/gifs">Gifs</NavLink></li>
                      <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                      <Route exact path="/" component={Home}/>
                      <Route path="/gifs" component={Gifs}/>
                      <Route path="/contact" component={Contact}/>
                    </div>
                  </div>
                </HashRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;
