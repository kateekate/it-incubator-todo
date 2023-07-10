import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import { TaskType } from "./Types/TaskType";
import { FilterValueType } from "./Types/FilterValueType";

function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: "HTML & CSS", isDone: true },
    { id: 2, title: "JS", isDone: false },
    { id: 3, title: "React", isDone: true },
    { id: 4, title: "Next.js", isDone: false },
  ]);

  const [filter, setFilter] = useState<FilterValueType>("all");

  function removeTasks(id: number) {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  function changeFilter(value: FilterValueType) {
    setFilter(value);
  }

  let tasksForTodoList = tasks;

  if (filter === "completed") {
    tasksForTodoList = tasks.filter((t) => t.isDone === true);
  }
  if (filter === "active") {
    tasksForTodoList = tasks.filter((t) => t.isDone === false);
  }

  return (
    <div className="App">
      <TodoList
        title="My skills"
        tasks={tasksForTodoList}
        removeTasks={removeTasks}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
