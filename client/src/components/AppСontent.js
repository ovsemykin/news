import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./HomePage";
import LoggingPage from "./LoggingPage";
import NewsPage from "./NewsPage";
import ProfilePage from "./ProfilePage";
import Container from "react-bootstrap/Container";

class AppСontent extends React.Component {
  render() {
    return (
      <Container className="p-5">
        <Router>
          <Switch>
            <Route exact path="/login">
              {localStorage.login === "true" ? (
                <Redirect to="/profile" />
              ) : (
                <LoggingPage />
              )}
            </Route>
            <Route path="/news">
              <NewsPage />
            </Route>
            <Route exact path="/profile">
              {localStorage.login === "true" ? (
                <ProfilePage />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default AppСontent;
