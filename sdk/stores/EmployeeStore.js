import { observable, action, computed, makeAutoObservable } from "mobx";

class EmployeeStore {
  employees = [];
  loading = false;
  adding = false;

  constructor() {
    makeAutoObservable(this, {
      employees: observable,
      loading: observable,
      adding: observable,
      getEmployees: computed,
      getLoading: computed,
      getAdding: computed,
      fetch: action,
    });
  }

  get getEmployees() {
    return this.employees;
  }

  get getLoading() {
    return this.loading;
  }

  get getAdding() {
    return this.adding;
  }

  fetch = async () => {
    this.loading = true;
    const response = await fetch("http://localhost:4000/employees");
    const employees = await response.json();
    this.loading = false;
    this.employees = employees;
  };
}

export default EmployeeStore;
