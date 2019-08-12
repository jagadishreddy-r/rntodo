import React, { Component } from "react";
import BottomBar from "./Components/BottomBar";
import FloatingButton from "./Components/FloatingButton";
import Heading from "./Components/Heading";
import ShowTodo from "./Components/Body/ShowTodo";
import TodoStore from "./Stores/TodoStore";
import { View, StyleSheet } from "react-native";
const todoStore = new TodoStore();

class App extends Component {
  render() {
    return (
      <>
        <Heading />
        <ShowTodo todoStore={todoStore} />

        <FloatingButton todoStore={todoStore} />

        <BottomBar todoStore={todoStore} />
      </>
    );
  }
}
const styles = StyleSheet.create({
  bar: {}
});
export default App;
