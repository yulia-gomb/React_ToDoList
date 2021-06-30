import React from "react";
import { NavLink } from "react-router-dom";

import style from "./login.module.css";

const handleLogin = (e) => {
  alert("e");
  e.preventDefault();
  localStorage.setItem("token", e.area.value);
};

export default function Login() {
  return (
    <div>
      <div className={style.login}>
        <p>PLEASE, LOG IN</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="area"
            id="area"
            /*ref={area}*/
            /*onInput={localStorage.setItem("token", area.value)}*/
            defaultValue="$2y$10$vLQLLXsxQ9fbY0QIQWO90uLpdmcW9oopVhB5jYRQwT.x8MYpC9i26"
          />
          <NavLink to="/todos">
            <input type="submit" value="Send" className={style.enter} />
          </NavLink>
        </form>
      </div>

      <div className={style.img}></div>
    </div>
  );
}
