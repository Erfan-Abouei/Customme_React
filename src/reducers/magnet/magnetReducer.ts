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
        changeSelectedPost: (state, { payload }) => {
            state.selectedMagnet = payload
        },
        savePosts: (state, { payload }: { payload: Post[] }) => {
            state.isLoadingMagnets = false
            state.magnets = payload
        }
    }
})

export const loadPost = () => async (dispatch: Dispatch) => {
    dispatch(postsLoading())
    const data = await getMagnetPosts(3)
    console.log(data)
    data?.data.posts ? dispatch(savePosts(data.data.posts)) : dispatch(savePosts([]))

}

export const { postsLoading, postsLoaded, changeSelectedPost, savePosts } = magnetPostReducer.actions
export default magnetPostReducer.reducer