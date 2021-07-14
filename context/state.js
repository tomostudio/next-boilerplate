import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [scrollState, setScrollState] = useState(null);

  return (
    <AppContext.Provider value={{scrollState, setScrollState}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
