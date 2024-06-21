import  taskSlice  from '@/actionReducer/taskReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
       taskDB: taskSlice     
    }
})