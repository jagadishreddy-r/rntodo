import React, { Component } from "react";
import AddTodo from "../AddTodo";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";
import {
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
  Alert
} from "react-native";
@observer
class ShowTodo extends Component {
  handle = value => {
    if (value.trim() != "") {
      this.props.todoStore.addTodo(value);
    }
    this.props.todoStore.changeshowTodos();
  };

  render() {
    const todos = this.props.todoStore.filteredTodos;
    return (
      <ScrollView style={styles.todoslist}>
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
      </ScrollView>
    );
  }
}
const screenHeight = Math.round(Dimensions.get("window").height);
const styles = StyleSheet.create({
  todoslist: {
    height: screenHeight - 195,
    backgroundColor: "#fff"
  }
});
export default ShowTodo;
