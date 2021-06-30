import React from "react";
import { NavLink } from "react-router-dom";

import style from "./login.module.css";

const login = (e) => {
  alert("login");
};

export default function Login() {
  return (
    <div>
      <div className={style.login}>
        <p>PLEASE, LOG IN</p>
        <form>
          <input
            type="text"
            name="token"
            defaultValue="$2y$10$vLQLLXsxQ9fbY0QIQWO90uLpdmcW9oopVhB5jYRQwT.x8MYpC9i26"
          />
        </form>
        <NavLink to="/todos" onClick={login} className={style.enter}>
          Send
        </NavLink>
      </div>

      <div className={style.img}></div>
    </div>
  );
}
