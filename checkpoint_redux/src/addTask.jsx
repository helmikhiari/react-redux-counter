import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./slices/taskSlice";

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const handleTaskChange = (e) => setTaskDescription(e.target.value);
  const dispatch=useDispatch();

  const handleTaskAdd=()=>dispatch(addTask(taskDescription))

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <label htmlFor="task">Add a new Task</label>
      <input
        type="text"
        name="task"
        id="task"
        value={taskDescription}
        onChange={handleTaskChange}
      />
      <button
        style={{
          backgroundColor: "white",
          borderWidth: "2px",
          borderRadius: "5px",
        }}
        onClick={handleTaskAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
