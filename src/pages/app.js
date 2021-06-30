import React from "react";
import "../app.css";

import Login from "@comp/login/login";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "@comp/main/main";
import { Container } from "reactstrap";

//$2y$10$vLQLLXsxQ9fbY0QIQWO90uLpdmcW9oopVhB5jYRQwT.x8MYpC9i26

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Route exact path={`/`} component={Login} render={() => <Login />} />
        <Route exact path={`/todos`} component={Main} render={() => <Main />} />
      </BrowserRouter>
    </Container>
  );
};

export default App;
