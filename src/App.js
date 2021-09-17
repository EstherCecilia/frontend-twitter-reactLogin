import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Login } from "./pages/login";
function App() {
  return (
    <Router>
      <Route exact patch="/" component={Login} />
    </Router>
  );
}

export default App;
