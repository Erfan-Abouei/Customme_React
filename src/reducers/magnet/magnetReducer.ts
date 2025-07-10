import { createSlice, type Dispatch } from "@reduxjs/toolkit";
import type { InitialState } from "./types/initialState.type";
import { getMagnetPosts } from "@/services/handle-magnet-post-request";
import type { Post } from "@/services/dto/magnet-post.dto";

const initialState: InitialState = {
    magnets: [],
    selectedMagnet: null,
    isLoadingMagnets: false
}

const magnetPostReducer = createSlice({
    name: 'magnetPost',
    initialState,
    reducers: {
        // Complete this feature after learning createAsyncFunc
        // getMagnets: (state) => {

        // }
        postsLoading: (state) => {
            state.isLoadingMagnets = true
        },
        postsLoaded: (state) => {
            state.isLoadingMagnets = false
        },
        postsError: (state) => {
            state.magnets = []
        },
        changeSelectedPost: (state, { payload }) => {
            const isExsitsMagnet = state.magnets.find((post: Post) => post.id === payload)
            state.selectedMagnet = isExsitsMagnet ?? null
        },
        savePosts: (state, { payload }: { payload: Post[] }) => {
            state.isLoadingMagnets = false
            state.magnets = payload
        }
    }
})

export const loadPost = () => async (dispatch: Dispatch) => {
    dispatch({ type: 'magnetPost/postsLoading' })
    const data = await getMagnetPosts()
    data ? dispatch({ type: 'magnetPost/savePosts', payload: data?.data.posts }) : dispatch({ type: 'magnetPost/postsError' })

}

export const { postsLoading, postsLoaded, postsError, changeSelectedPost, savePosts } = magnetPostReducer.actions
export default magnetPostReducer.reducer