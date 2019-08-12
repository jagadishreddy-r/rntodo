import { observable, action } from "mobx";

class TodoModel {
  id;
  @observable todoDesc;
  @observable taskStatus;
  constructor(description) {
    this.id = Date.now();
    this.todoDesc = description;
    this.taskStatus = false;
  }
  @action.bound toggleTaskStatus() {
    this.taskStatus = !this.taskStatus;
  }
  @action.bound updateTodoDescription(description) {
    this.todoDesc = description;
  }
}
export default TodoModel;
