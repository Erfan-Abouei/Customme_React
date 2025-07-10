import { configureStore } from '@reduxjs/toolkit'
import magnetReducer from '@/reducers/magnet/magnetReducer'

const store = configureStore({
    reducer: {
        magnetPosts: magnetReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store