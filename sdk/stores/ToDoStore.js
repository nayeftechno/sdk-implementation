import { observable, action, computed, makeAutoObservable } from "mobx";

class ToDoStore {
  tasks = [];
  isLoading = false;
  adding = false;

  constructor() {
    makeAutoObservable(this, {
      tasks: observable,
      isLoading: observable,
      adding: observable,
      getEmployees: computed,
      getIsLoading: computed,
      getAdding: computed,
      fetch: action,
    });
  }

  get getTasks() {
    return this.tasks;
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getAdding() {
    return this.adding;
  }

  fetch = async () => {
    this.isLoading = true;
    const response = await fetch("http://localhost:4000/tasks");
    const tasks = await response.json();
    this.isLoading = false;
    this.tasks = tasks;
  };
}

export default ToDoStore;
