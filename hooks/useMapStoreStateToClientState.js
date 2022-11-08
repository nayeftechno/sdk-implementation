import { autorun } from "mobx";
import { useEffect, useState } from "react";

export function useMapStoreStateToClientState(store, storePropsSelectionFunc) {
  const [state, setState] = useState(storePropsSelectionFunc(store));

  useEffect(
    () =>
      autorun(() => {
        setState(storePropsSelectionFunc(store));
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return state;
}
