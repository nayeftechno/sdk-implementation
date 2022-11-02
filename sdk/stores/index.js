import ToDoStore from "./ToDoStore";

class MainStore {
  toDoStore = null;

  constructor() {
    this.toDoStore = new ToDoStore();
  }
}

export default MainStore;
