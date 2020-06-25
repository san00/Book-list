import React, { useEffect } from "react";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [favourites, setFavourites] = React.useState({});

  useEffect(() => {
    if (Object.keys(favourites).length !== 0) {
      localStorage.setItem("favourites", JSON.stringify(favourites));
    } else {
      const stored = JSON.parse(localStorage.getItem("favourites"));
      if (stored && Object.keys(stored).length !== 0) {
        setFavourites(stored);
      }
    }
  }, [favourites]);

  return (
    <AppContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
