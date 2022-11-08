import { createContext, useContext } from "react";

const MainContext = createContext();

function MainContextProvider({ store, children }) {
  return <MainContext.Provider value={store}>{children}</MainContext.Provider>;
}

function useStore() {
  return useContext(MainContext);
}

export { MainContextProvider, useStore };
