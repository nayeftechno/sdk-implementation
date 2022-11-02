import { observable, action, computed, makeAutoObservable } from "mobx";
import { ToDoListClient } from "../clients/to-do-list.client";

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
    const response = await ToDoListClient.getAllTasks();
    this.isLoading = false;
    this.tasks = response;
  };
}

export default ToDoStore;
