import { createSlice } from '@reduxjs/toolkit'
export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: {
        }
    },
    reducers: {
        GetAllTasks: (state, action) => {
            state.tasks = action.payload;
        }
    }
})

export const { GetAllTasks } = taskSlice.actions;
export default taskSlice.reducer;

