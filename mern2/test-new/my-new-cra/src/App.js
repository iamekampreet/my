import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AllUsers from "./Users/Pages/AllUsers";
import PostsForUserId from "./Posts/Pages/PostsForUserId";
import UpdatePost from "./Posts/Pages/UpdatePost";
import MainHeader from "./Shared/Components/Navigation/MainHeader";
import NewPost from "./Posts/Pages/NewPost";
import Authenticate from "./Users/Pages/Authenticate";

const App = () => {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <AllUsers />
        </Route>
        <Route path="/:uid/posts" exact>
          <PostsForUserId />
        </Route>
        <Route path="/post/new" exact>
          <NewPost />
        </Route>
        <Route path="/post/:pid" exact>
          <UpdatePost />
        </Route>
        <Route path="/auth" exact>
          <Authenticate />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
