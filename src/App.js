import React, { Component } from "react";
import Body from "./Components/Body";
import Login from "./Components/Login";
import TodoStore from "./Stores/TodoStore";
import { Router, Scene } from "react-native-router-flux";

const todoStore = new TodoStore();
class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" intial />
          <Scene
            key="home"
            component={Body}
            todoStore={todoStore}
            title="Home"
          />
        </Scene>
      </Router>
    );
  }
}

export default App;
