import React, { Component } from "react";
import TodoApp from "./Components/TodoApp";
import Login from "./Components/Login";
import TodoStore from "./Stores/TodoStore";

import { Router, Scene } from "react-native-router-flux";
import Splash from "./Components/Splash";
import { AsyncStorage } from "react-native";
import { create } from "mobx-persist";
const todoStore = new TodoStore();
const hydrate = create({
  storage: AsyncStorage,
  jsonify: true
});
class App extends Component {
  constructor(props) {
    super(props);
    hydrate("TODOSTORE", todoStore).then(() => {
      console.log("bdfb");
    });
  }
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
