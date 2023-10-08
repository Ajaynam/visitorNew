import { configureStore } from "@reduxjs/toolkit";
import newVisitReducer from "../../Components/newInvite/store/newVisitSlice";
import authSliceReducer from '../../Components/login/store/authSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
// import userReducer from './userSlice';

const persistConfig = {
 key: 'root',
 version:1,
 storage
}

const reducer = combineReducers({
 newVisit: newVisitReducer,
 authSlice: authSliceReducer
})

const persistedReducer=persistReducer(persistConfig,reducer)

const store = configureStore({
 reducer: persistedReducer,
//  user: userReducer,
})

export default store;