import React, { Component } from "react";

import {Route, Switch} from "react-router-dom"

import SmurfForm from "./SmurfForm.jsx"
import SmurfList from "./SmurfList.jsx"
import ProfileCard from "./ProfileCard"

import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
    <Switch>
      <Route path="/profile">
        <ProfileCard />
      </Route>
      <Route path="/">
        <SmurfForm />
        <SmurfList />
      </Route>
s    </Switch>
      </div>
    );
  }
}

export default App;
