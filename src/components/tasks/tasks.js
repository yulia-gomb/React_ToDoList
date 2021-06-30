import React, { useState, useEffect } from "react";
import { Spinner, Badge } from "reactstrap";
import TodosForm from "@comp/tasks/taskItem/form";

import style from "./tasks.module.css";

export default function Tasks(props) {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    const token = localStorage.getItem("token");
    console.log("token" + token);

    fetch("https://data.testxhr.com/api/todos", {
      method: "GET",
      headers: {
        apptoken:
          "$2y$10$vLQLLXsxQ9fbY0QIQWO90uLpdmcW9oopVhB5jYRQwT.x8MYpC9i26",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        console.log("response");
        console.log(data);
      });
  }, []);

  const addItem = (task) => {
    setTasks([task, ...tasks]);
    setShowForm(!showForm);
  };

  /*const removeItem = () => {
    fetch("https://data.testxhr.com/api/todos/" + "id", {
      method: "DELETE",
    })
      .then((data) => data.json()) // or res.json()
      .then((data) => console.log(data));
  };*/

  return (
    <div className={style.tasks}>
      <h1>ALL TASKS</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "close" : "Add new task"}
      </button>

      {showForm ? <TodosForm cb={addItem} /> : null}

      {tasks.length != 0 ? (
        <div>
          {console.log(tasks.data)}
          {tasks.data.map((todo) => (
            <div key={todo.id} className={style.task}>
              <div>
                {todo.completed ? (
                  <Badge color="success">Done</Badge>
                ) : (
                  <Badge color="danger">Undone</Badge>
                )}
                <div>
                  <span>
                    Task #{todo.order}
                    Title: {todo.title}{" "}
                  </span>
                </div>
                <div>
                  <span>Deadline:</span> {todo.dead_line}
                </div>
                <div>
                  <span>Description:</span> {todo.description}
                </div>
              </div>

              <div>
                <button>Update</button>
                <button>More</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Spinner color="dark" />
      )}
    </div>
  );
}
