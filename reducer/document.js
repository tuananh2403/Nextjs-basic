import { createSlice } from "@reduxjs/toolkit";
import {dataDocumentLaw} from '../shared/data/dataDocumentLaw'
import {dataDocumentStem} from '../shared/data/dataDocumentStem'

const documentSlice = createSlice({
    name : 'document',
    initialState : {
        law : dataDocumentLaw,
        stem : dataDocumentStem
    },
    reducers : {
    }
})
const {actions,reducer} = documentSlice;
export default reducer;