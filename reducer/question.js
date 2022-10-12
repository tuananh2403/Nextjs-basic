import { createSlice } from "@reduxjs/toolkit";
import {dataQuestions} from '../shared/data/dataQuestion'

const questionSlice = createSlice({
    name : 'question',
    initialState : dataQuestions,
    reducers : {
    }
})
const {actions,reducer} = questionSlice;
export default reducer;