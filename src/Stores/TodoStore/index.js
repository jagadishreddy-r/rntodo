import { observable, action, computed } from "mobx";
import { filterValues } from "../../constant.js";
import TodoModel from "../TodoModel";
class TodoStore {
  @observable todos;
  @observable showTodos = false;
  @observable todoFilter = filterValues.all;
  constructor() {
    this.todos = [];
  }
  @action.bound addTodo(description) {
    this.todos.push(new TodoModel(description));
  }
  @action.bound deleteTodo(todoObject) {
    this.todos.remove(todoObject);
    console.log(this.todos);
  }
  @action.bound changeFilter(filterValue) {
    this.todoFilter = filterValue;
  }
  @action.bound changeshowTodos() {
    this.showTodos = !this.showTodos;
  }
  @computed get filteredTodos() {
    if (this.todoFilter === filterValues.completed) {
      return this.todos.filter(todo => todo.taskStatus === true);
    } else if (this.todoFilter === filterValues.active) {
      return this.todos.filter(todo => todo.taskStatus === false);
    } else {
      return this.todos;
    }
  }
  @action.bound clearCompleted() {
    this.todos = this.todos.filter(todo => todo.taskStatus === false);
  }
  @computed get undoneLeft() {
    return this.todos.filter(todo => todo.taskStatus === false).length;
  }
}
export default TodoStore;
