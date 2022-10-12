import { createSlice } from "@reduxjs/toolkit";
import {dataRefer, dataVideos} from '../shared/data/dataRefer'

const contentSlice = createSlice({
    name : 'refer',
    initialState : {
        refer:dataRefer,
        video : dataVideos
    },
    reducers : {
    }
})
const {actions,reducer} = contentSlice;
export default reducer;