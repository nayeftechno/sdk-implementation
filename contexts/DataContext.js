import { createContext, useContext } from "react";

const DataContext = createContext();

function DataContextProvider({ store, children }) {
  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
}

function useToDoStore() {
  return useContext(DataContext);
}

export { DataContextProvider, useToDoStore };
