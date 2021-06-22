import React from "react";
import "../app.css";

import List from "@comp/navbar/List";
import Tasks from "@comp/tasks/tasks";

//$2y$10$vLQLLXsxQ9fbY0QIQWO90uLpdmcW9oopVhB5jYRQwT.x8MYpC9i26

const App = (props) => {
  return (
    <div className="wrapper">
      <div className="todo">
        <List />
        <Tasks />
      </div>
    </div>
  );
};

export default App;
