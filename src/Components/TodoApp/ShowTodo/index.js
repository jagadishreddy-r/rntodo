import React, { Component } from "react";
import AddTodo from "../AddTodo";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";
import {
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Text
} from "react-native";
import { Scroller } from "./StyledComponents";
@observer
class ShowTodo extends Component {
  componentDidMount() {
    this.props.todoStore.getTodos();
  }
  handle = value => {
    if (value.trim() != "") {
      this.props.todoStore.addTodo(value);
    }
    this.props.todoStore.changeshowTodos();
  };

  render() {
    const todos = this.props.todoStore.filteredTodos;
    const isLoading = this.props.todoStore.isLoading;
    return (
      <>
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {!isLoading && todos.length === 0 && <Text>no internet</Text>}
        {!isLoading && todos.length > 0 && (
          <Scroller>
            {this.props.todoStore.showTodos && (
              <AddTodo defaultText="" functionToCall={this.handle} />
            )}
            {!this.props.todoStore.showTodos && (
              <FlatList
                data={todos}
                keyExtractor={item => item.todoDesc}
                extraData={todos.slice()}
                renderItem={({ item }) => (
                  <TodoItem
                    key={item.id}
                    todoStore={this.props.todoStore}
                    item={item}
                  />
                )}
              />
            )}
          </Scroller>
        )}
      </>
    );
  }
}

export default ShowTodo;
