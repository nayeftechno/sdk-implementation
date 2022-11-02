import { $http } from "../services/http.service";
import { ENDPOINTS } from "../constants";

export const ToDoListClient = {
  getAllTasks() {
    return $http.get(ENDPOINTS.GET_ALL_TASKS).then(({ data }) => data);
  },
};
