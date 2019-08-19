import React, { Component } from "react";
import BottomBar from "./BottomBar";
import FloatingButton from "./FloatingButton";
import Heading from "./Heading";
import ShowTodo from "./ShowTodo";
import { observer } from "mobx-react";

import i18n from "../../I18n";

@observer
class TodoApp extends Component {
  languageChange = value => {
    this.props.todoStore.changeLanguage(value);
  };
  render() {
    const { todoStore } = this.props;
    i18n.locale = this.props.todoStore.language;
    return (
      <>
        <Heading
          i18n={i18n}
          language={i18n.locale}
          languageChange={this.languageChange}
        />
        <ShowTodo key={Date.now() + "1"} todoStore={todoStore} />

        {!todoStore.showTodos && <FloatingButton todoStore={todoStore} />}

        <BottomBar key={Date.now()} todoStore={todoStore} i18n={i18n} />
      </>
    );
  }
}

export default TodoApp;
