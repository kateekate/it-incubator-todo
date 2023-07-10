import React from "react";
import { TaskType } from "../Types/TaskType";
import { FilterValueType } from "../Types/FilterValueType";

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTasks: (id: number) => void;
  changeFilter: (value: FilterValueType) => void;
};

export default function TodoList(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>

      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            {" "}
            <input type="checkbox" checked={task.isDone} />
            <span>{task.title}</span>
            <button
              onClick={() => {
                props.removeTasks(task.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => {
            props.changeFilter("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            props.changeFilter("active");
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            props.changeFilter("completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
