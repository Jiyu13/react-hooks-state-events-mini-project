import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  console.log(tasks)

  return (
    <div className="tasks">

      {/* display a list of tasks using Task component */}

      {/* map each task, return a Task component with */}
      {tasks.map(task => {
        return <Task key={task.id} task={task} />
      })}

    </div>
  );
}

export default TaskList;
