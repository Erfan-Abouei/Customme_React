import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { InitialState } from "./types/initialState.type";
import { getMagnetPosts } from "@/services/handle-magnet-post-request";
import type { Post } from "@/services/dto/magnet-post/magnet-post.dto";

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
        changeSelectedPost: (state, { payload }: { payload: Post }) => {
            state.selectedMagnet = payload
        },
        savePosts: (state, { payload }: { payload: Post[] }) => {
            magnetPostReducer.caseReducers.postsLoaded(state)
            state.magnets = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.isLoadingMagnets = true;
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.isLoadingMagnets = false;

                if (Array.isArray(action.payload?.data)) {
                    state.magnets = [];
                } else if (Array.isArray(action.payload?.data?.posts)) {
                    state.magnets = action.payload.data.posts;
                } else {
                    state.magnets = [];
                }
            })
            .addCase(fetchPost.rejected, (state) => {
                state.isLoadingMagnets = false;
            });
    }

})

export const fetchPost = createAsyncThunk('magnetPost/fetchPost', async () => {
    const data = await getMagnetPosts(3)
    return data
})

export const { postsLoading, postsLoaded, changeSelectedPost, savePosts } = magnetPostReducer.actions
export default magnetPostReducer.reducer