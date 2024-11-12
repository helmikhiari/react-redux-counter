import React from "react";
import Task from "./task";
import { useSelector } from "react-redux";

const TaskList = () => {
  const {tasks}=useSelector(state=>state.task)
  return (
    <div>
      {tasks?.map((task) => (
        <Task
          id={task.id}
          description={task.description}
          isDone={task.isDone}
        />
      ))}
    </div>
  );
};

export default TaskList;
