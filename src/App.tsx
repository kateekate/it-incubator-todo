import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import { TaskType } from "./Types/TaskType";
import { FilterValueType } from "./Types/FilterValueType";
import { v1 } from "uuid";

function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: "HTML & CSS", isDone: true },
    { id: v1(), title: "JS", isDone: false },
    { id: v1(), title: "React", isDone: true },
    { id: v1(), title: "Next.js", isDone: false },
  ]);

  const [filter, setFilter] = useState<FilterValueType>("all");

  function removeTasks(id: string) {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  function addTask(title: string) {
    const newTask = { id: v1(), title: title, isDone: false };
    const newTasks = [newTask, ...tasks];
    setTasks(newTasks);
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
        addTask={addTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
