import { createSlice } from "@reduxjs/toolkit";
import {topics,topicClass} from '../shared/data/dataTopic'

const topicSlice = createSlice({
    name : 'topic',
    initialState : {
        topic : topics,
        class : topicClass
    },
    reducers : {
    }
})
const {actions,reducer} = topicSlice;
export default reducer;