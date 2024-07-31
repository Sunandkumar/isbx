import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState= {
    users: [{id:1, text: ""}]
}

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state,action) => {
            const user = {
                id: nanoid(),
                text:action.payload
            }
            state.users.push(user)
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        },
    }
})

export const {addUser,removeUser} = loginSlice.actions;
export default loginSlice.reducer;