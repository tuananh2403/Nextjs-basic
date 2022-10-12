import { createSlice } from "@reduxjs/toolkit";
import {dataContent} from '../shared/data/dataContent'

const contentSlice = createSlice({
    name : 'content',
    initialState : dataContent,
    reducers : {
    }
})
const {actions,reducer} = contentSlice;
export default reducer;