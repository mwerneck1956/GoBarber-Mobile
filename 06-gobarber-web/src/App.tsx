import React from "react";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

import AppProvider from "./hooks";
function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
