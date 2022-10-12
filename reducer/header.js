import { createSlice } from "@reduxjs/toolkit";
import {dataHeader,ChildHeader,dataFooterAdresss} from '../shared/data/dataHeader'


const headerSlice = createSlice({
    name : 'content',
    initialState : {
        header : dataHeader,
        childHeader : ChildHeader,
        footer: dataFooterAdresss,
        isOpen : false,
    },
    reducers : {
        toggle : (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})
const {actions,reducer} = headerSlice;
export const {toggle} = actions;
export default reducer;