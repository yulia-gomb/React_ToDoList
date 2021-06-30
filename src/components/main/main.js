import React from "react";
import style from "./main.module.css";

import List from "@comp/navbar/List";
import Tasks from "@comp/tasks/tasks";

//$2y$10$vLQLLXsxQ9fbY0QIQWO90uLpdmcW9oopVhB5jYRQwT.x8MYpC9i26

const Main = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.todo}>
        <List />
        <Tasks />
      </div>
    </div>
  );
};

export default Main;
