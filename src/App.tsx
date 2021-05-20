import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from "./assets/styles/GlobalStyles";
import Routes from "./routes";

function App() {
  return (
    <Router>
        <Routes/>
        <GlobalStyles/>
    </Router>
  );
}

export default App;
