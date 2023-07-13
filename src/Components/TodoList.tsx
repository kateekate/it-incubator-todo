import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { TaskType } from "../Types/TaskType";
import { FilterValueType } from "../Types/FilterValueType";

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTasks: (id: string) => void;
  changeFilter: (value: FilterValueType) => void;
  addTask: (title: string) => void;
};

export default function TodoList(props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.addTask(newTaskTitle);
      setNewTaskTitle("");
    }
  };

  const addTask = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle("");
  };

  const onAllClickHandler = () => props.changeFilter("all");
  const onActiveClickHandler = () => props.changeFilter("active");
  const onCompletedClickHandler = () => props.changeFilter("completed");

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={onNewTitleChangeHandler}
          onKeyDown={onKeyPressHandler}
        />
        <button onClick={addTask}>+</button>
      </div>
      <ul>
        {props.tasks.map((task) => {
          const handleRemoveTask = () => {
            props.removeTasks(task.id);
          };
          return (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone} />
              <span>{task.title}</span>
              <button onClick={handleRemoveTask}>X</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
      </div>
    </div>
  );
}
