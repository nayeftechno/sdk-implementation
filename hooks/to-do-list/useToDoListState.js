import { useMapStoreStateToClientState } from "../useMapStoreStateToClientState";

export default function useToDoListState(store) {
  return useMapStoreStateToClientState(store, (store) => ({
    isLoading: store?.toDoStore?.getIsLoading,
    tasks: store?.toDoStore?.getTasks,
    completedCount: store?.toDoStore?.getCompletedCount,
    inCompletedCount: store?.toDoStore?.getInCompletedCount,
    addTask: store?.toDoStore?.addTask,
    removeTask: store?.toDoStore?.removeTask,
    toggleStatus: store?.toDoStore?.toggleStatus,
  }));
}
