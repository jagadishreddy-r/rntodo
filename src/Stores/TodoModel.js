import { observable, action } from "mobx";
import { persist } from "mobx-persist";
class TodoModel {
  @persist id;
  @persist @observable description;
  @persist @observable status;
  constructor(description) {
    this.id = Date.now();
    this.description = description;
    this.status = false;
  }
  setConstructor(description, status) {
    this.id = Date.now();
    this.description = description;
    this.status = status;
  }
  @action.bound toggleTaskStatus() {
    this.status = !this.status;
  }
  @action.bound updateTodoDescription(description) {
    this.description = description;
  }
}
export default TodoModel;
