import { createSlice } from "@reduxjs/toolkit";
import {listDocuments, listJobs, majors } from '../shared/data/dataLibrary'
const librarySlice = createSlice({
    name : 'content',
    initialState : {
        doucment : listDocuments,
        job : listJobs,
        major : majors
    },
    reducers : {
    }
})
const {actions,reducer} = librarySlice;
export default reducer;