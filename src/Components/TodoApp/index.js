import React, { Component } from "react";
import BottomBar from "./BottomBar";
import FloatingButton from "./FloatingButton";
import Heading from "./Heading";
import ShowTodo from "./ShowTodo";
import { observer } from "mobx-react";
import { AsyncStorage } from "react-native";
import { create } from "mobx-persist";

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true
});
@observer
class TodoApp extends Component {
  constructor(props) {
    super(props);
    hydrate("TODOSTORE", props.todoStore).then(() => {
      console.log("bdfb");
    });
  }
  render() {
    const { todoStore } = this.props;
    return (
      <>
        <Heading />
        <ShowTodo todoStore={todoStore} />

        {!todoStore.showTodos && <FloatingButton todoStore={todoStore} />}

        <BottomBar todoStore={todoStore} />
      </>
    );
  }
}

export default TodoApp;
