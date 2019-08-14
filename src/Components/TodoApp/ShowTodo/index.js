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
    return (
      <ScrollView style={styles.todoslist}>
        {this.props.todoStore.showTodos && (
          <AddTodo defaultText="" functionToCall={this.handle} />
        )}
        {!this.props.todoStore.showTodos && (
          <FlatList
            data={this.props.todoStore.filteredTodos}
            keyExtractor={item => item.todoDesc}
            extraData={this.props.todoStore.filteredTodos.slice()}
            renderItem={({ item }) => (
              <TodoItem todoStore={this.props.todoStore} item={item} />
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
