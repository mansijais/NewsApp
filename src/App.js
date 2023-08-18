import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=5;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route strict exact path="/"><News key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route strict exact path="/general"><News key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route strict exact path="/business"><News key="business" pageSize={this.pageSize} country="in" category="business" /></Route>
            <Route strict exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" /></Route>
            <Route strict exact path="/science"><News key="science" pageSize={this.pageSize} country="in" category="science" /></Route>
            <Route strict exact path="/sports"><News key="sports" pageSize={this.pageSize} country="in" category="sports" /></Route>
            <Route strict exact path="/technology"><News key="technology" pageSize={this.pageSize} country="in" category="technology" /></Route>
            <Route strict exact path="/health"><News key="health" pageSize={this.pageSize} country="in" category="health" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

