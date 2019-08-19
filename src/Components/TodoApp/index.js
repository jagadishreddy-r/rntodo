import React, { Component } from "react";
import BottomBar from "./BottomBar";
import FloatingButton from "./FloatingButton";
import Heading from "./Heading";
import ShowTodo from "./ShowTodo";
import { observer } from "mobx-react";
import { AsyncStorage } from "react-native";
import { create } from "mobx-persist";
import i18n from "../../I18n";
import { date } from "serializr";

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
    this.state = {
      language: i18n.locale
    };
  }
  languageChange = value => {
    this.setState({
      language: value
    });
  };
  render() {
    const { todoStore } = this.props;
    i18n.locale = this.state.language;
    return (
      <>
        <Heading
          i18n={i18n}
          language={this.state.language}
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
