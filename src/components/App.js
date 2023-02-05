import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)

  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const tasksToDisplay = tasks.filter(task => {
    if (selectedCategory === "All") {
      return task
    } else {
      return task.category === selectedCategory
    }
  })

  function handleFilter(event) {
    setSelectedCategory(event.target.id)
  }

  function handleAddTask(newTask) {
    console.log(newTask)
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} 
                      onCategoryChange={handleFilter} 
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={tasksToDisplay} setTasks={setTasks}/>
    </div>
  );
}

export default App;


