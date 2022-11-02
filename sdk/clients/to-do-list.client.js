import { $http } from "../services/http.service";
import { ENDPOINTS } from "../constants";

export const ToDoListClient = {
  getAllTasks() {
    return $http.get(ENDPOINTS.TASKS).then(({ data }) => data);
  },
  addNewTask(payload) {
    return $http.post(ENDPOINTS.TASKS, payload).then(({ data }) => data);
  },
  toggleStatus(payload) {
    return $http
      .put(`${ENDPOINTS.TASKS}/${payload?.id}`, payload)
      .then(({ data }) => data);
  },
  deleteTask(id) {
    return $http.delete(`${ENDPOINTS.TASKS}/${id}`).then(({ data }) => data);
  },
};
