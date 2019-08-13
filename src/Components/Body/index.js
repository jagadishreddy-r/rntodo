import React, { Component } from "react";
import BottomBar from "../BottomBar";
import FloatingButton from "../FloatingButton";
import Heading from "../Heading";
import ShowTodo from "./ShowTodo";
import { observer } from "mobx-react";

@observer
class Body extends Component {
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

export default Body;
