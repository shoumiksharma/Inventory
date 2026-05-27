import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name : null,
    isLoggedIn : false
}

const authSlice = createSlice({
    name : 'auth',

    initialState,

    reducers : {
        login : (state, action) => {
            state.name = action.payload.name,
            state.isLoggedIn = true;
        },

        logout : (state, action) => {
            state.name = null,
            state.isLoggedIn = false;
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;