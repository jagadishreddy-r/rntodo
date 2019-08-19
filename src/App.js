import React, { Component } from "react";
import TodoApp from "./Components/TodoApp";
import Login from "./Components/Login";
import TodoStore from "./Stores/TodoStore";

import { Router, Scene } from "react-native-router-flux";
import Splash from "./Components/Splash";

const todoStore = new TodoStore();

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="splash" component={Splash} initial />
          <Scene key="login" component={Login} title="Login" />
          <Scene
            key="home"
            component={TodoApp}
            todoStore={todoStore}
            title="Home"
          />
        </Scene>
      </Router>
    );
  }
}

export default App;
