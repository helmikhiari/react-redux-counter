import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";


const taskSlice = createSlice({
    name: "tasks",
    initialState: { tasks: [] },
    reducers:
    {
        addTask: (state, action) => {
            const id = v4();
            const newTask = { id, description: action.payload, isDone: false }
            state.tasks.push(newTask);
        },
        removeTask: (state, action) => {

            state.tasks = [...state.tasks.filter((task) => task.id != action.payload)];


        },
        toggleDone: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id == action.payload)
            state.tasks[index].isDone = !state.tasks[index].isDone
        }
    }
})


export const { addTask, removeTask, toggleDone } = taskSlice.actions;

export default taskSlice.reducer;