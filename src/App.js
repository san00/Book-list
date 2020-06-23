import React from "react";

import FetchData from "./components/FetchData";
import Header from "./components/Header";
import AppContextProvider from "./components/AppContext";

function App() {
  return (
    <AppContextProvider>
      <main data-test="component-app">
        <Header />
        <FetchData />
      </main>
    </AppContextProvider>
  );
}

export default App;
