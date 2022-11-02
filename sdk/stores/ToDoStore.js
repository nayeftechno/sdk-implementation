import { observable, computed, makeAutoObservable } from "mobx";
import { ToDoListClient } from "../clients/to-do-list.client";

class ToDoStore {
  tasks = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this, {
      tasks: observable,
      isLoading: observable,
      getTasks: computed,
      getIsLoading: computed,
    });
    this.fetch = this.fetch.bind(this);
  }

  get getTasks() {
    return this.tasks;
  }

  get getIsLoading() {
    return this.isLoading;
  }

  fetch = function* () {
    this.isLoading = true;
    const response = yield ToDoListClient.getAllTasks();
    this.isLoading = false;
    this.tasks = response;
  };
}

export default ToDoStore;
