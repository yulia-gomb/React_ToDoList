import React from "react";
import style from "./List.module.css";
import { NavLink } from "react-router-dom";

const List = (props) => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.active}>
          <span>ALL</span>
        </li>
        <li>
          <span>UNDONE</span>
        </li>
        <li>
          <span>DONE</span>
        </li>
      </ul>
    </nav>
  );
};

export default List;
