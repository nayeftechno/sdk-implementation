import { useEffect } from "react";
import { reaction } from "mobx";

export function useToDoListFetch(store) {
  useEffect(() => {
    store?.toDoStore?.fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () =>
      reaction(
        () => store?.toDoStore?.getTasks,
        () => {
          store?.toDoStore?.fetch();
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
}
