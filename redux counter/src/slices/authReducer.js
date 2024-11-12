import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: "auth",
    initialState: { isAuthenticated: false, name: "" },
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
            state.name = "Bechir"
        }
        ,
        logout: (state) => {
            state.isAuthenticated = false;
            state.name = "";
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;