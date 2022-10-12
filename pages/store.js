import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from '../reducer/pagination'
import contentReducer from '../reducer/content'
import documentReducer from '../reducer/document'
import headerReducer from '../reducer/header'
import libraryReducer from '../reducer/library'
import questionReducer from '../reducer/question'
import referReducer from '../reducer/refer'
import topicReducer from '../reducer/topic'

const store = configureStore({
    reducer : {
        pagination : paginationReducer,
        content : contentReducer, 
        document : documentReducer,
        header : headerReducer,
        library : libraryReducer,
        question : questionReducer,
        refer : referReducer,
        topic : topicReducer
    }
})
export default store;