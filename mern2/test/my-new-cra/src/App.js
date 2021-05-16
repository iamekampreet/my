import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./Shared/Components/UI/Header";
import Footer from "./Shared/Components/UI/Footer";
import UsersList from "./User/Pages/UsersList";
import NewPlace from "./Places/Pages/NewPlace";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <UsersList />
        </Route>
        <Route exact path="/places/new">
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
