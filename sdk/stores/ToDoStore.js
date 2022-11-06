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
      getCompletedCount: computed,
      getInCompletedCount: computed,
    });
    this.fetch = this.fetch.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  get getTasks() {
    return this.tasks;
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getCompletedCount() {
    return this.tasks.filter((task) => task?.isCompleted).length;
  }

  get getInCompletedCount() {
    return this.tasks.filter((task) => !task?.isCompleted).length;
  }

  fetch = function* () {
    this.isLoading = true;
    const response = yield ToDoListClient.getAllTasks();
    this.isLoading = false;
    this.tasks = response;
  };

  addTask = function* (payload) {
    const response = yield ToDoListClient.addNewTask(payload);
    this.tasks = [...this.tasks, response];
  };

  toggleStatus = function* (payload) {
    const response = yield ToDoListClient.toggleStatus(payload);
    const index = this.tasks.findIndex((task) => task.id === payload.id);
    this.tasks[index] = response;
  };

  removeTask = function* (id) {
    const response = yield ToDoListClient.deleteTask(id);
    const list = this.tasks.filter((task) => task.id !== id);
    this.tasks = list;
  };
}

export default ToDoStore;
