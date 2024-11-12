import React from "react";
import { useDispatch } from "react-redux";
import { removeTask, toggleDone } from "./slices/taskSlice";

const Task = ({ id, description, isDone }) => {
    const dispatch=useDispatch();

    const handleDelete=()=>dispatch(removeTask(id))
    const handleToggleDone=()=>dispatch(toggleDone(id))
  return (
    <div key={id} style={{display:"flex",flexDirection:"row" , alignContent:"center",alignItems:"center",gap:"25px"}}>
      <p style={{ fontSize: "15px", textDecoration: isDone?"line-through":"none", }}>
        {description}
      </p>
      <button style={{height:'50%',backgroundColor:"transparent",color:"white",fontSize:"10px"}} onClick={handleToggleDone}>Toogle Done</button>
      <button style={{height:'50%',backgroundColor:"transparent",color:"red",fontSize:"10px"}} onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
