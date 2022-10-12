import { createSlice } from "@reduxjs/toolkit";
import {dataNew} from '../shared/data/dataNew'
   let start = 0
   let end = 8
const newsView = dataNew.filter((data,index) =>  (index >= start && index < end) )
const paginationSlice = createSlice({
    name : 'news',
    initialState : {
        current : 1,   
        limit: 8,
        totalPages : Math.ceil(dataNew.length /8),
        data : newsView,
    },
    reducers : {
        nextPage : (state) => {
            state.current ++;
            if(state.current >= state.totalPages){
                state.current = state.totalPages;
            }
            let start = (state.current - 1) * state.limit;
            let end  = state.current * state.limit;
            state.data =  dataNew.filter((data,index) => (index >= start && index < end) );
            console.log(state.current);
        },
        prevPage(state){
            state.current --;
            if(state.current <= 1){
                state.current = 1;
            }
            let start = (state.current - 1) * state.limit;
            let end  = state.current * state.limit;
            state.data =  dataNew.filter((data,index) => (index >= start && index < end) );
        },
}})
const {actions , reducer} = paginationSlice;
export const {nextPage,prevPage} = actions;
export default reducer;