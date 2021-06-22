import React, { useEffect, useRef, useState, forwardRef } from "react";

import style from "./form.module.css";

export default function TodosForm(props) {
  const [task, setTask] = useState(props.task);
  const form = useRef(null);

  const handleSubmit = (e) => {
    alert(
      "submit не работает, получаю ошибку 500. " +
        "При этом через Postman запрос POST срабатывает, данные сохраняются на сервере"
    );
    e.preventDefault();
    const data = new FormData(form.current);

    fetch("https://data.testxhr.com/api/todos", {
      method: "POST",
      headers: {
        apptoken:
          "$2y$10$vLQLLXsxQ9fbY0QIQWO90uLpdmcW9oopVhB5jYRQwT.x8MYpC9i26",
      },
      body: data,
    })
      .then((data) => data.json())
      .then((json) => setTask(json.task));
  };

  /*
     data: {
       title: "YOUR_TITLE",
       description: "YOUR_DESCRIPTION",
       dead_line: 20210101,
       completed: 1,
       order: 4,
     },
*/
  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit} ref={form}>
        <h2>Add new task</h2>
        <input
          type="text"
          name="task[title]"
          placeholder="Title"
          //defaultValue="Exam"
        />
        <input
          type="datetime-local"
          name="task[dead_line]"
          placeholder="Deadline"
        />
        <textarea
          name="task[description]"
          placeholder="Description"
          //defaultValue="Urgent task"
        />
        <input type="submit" value="Add" className={style.add} />
      </form>
    </div>
  );
}
