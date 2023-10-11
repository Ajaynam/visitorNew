import { configureStore } from "@reduxjs/toolkit";
import newVisitReducer from "../../Components/newInvite/store/newVisitSlice";
import newEmployeeReducer from '../../Components/addEmployee/store/employeeSlice'
import authSliceReducer from '../../Components/Auth/store/userSlice/authSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import employeeSlice from "../../Components/EmploteeTable/store/employeeSlice";
import { combineReducers } from "@reduxjs/toolkit";
import employeeReducer from "../../Components/EmploteeTable/store/employeeSlice";
// import userReducer from './userSlice';

const persistConfig = {
 key: 'root',
 version:1,
 storage
}

const reducer = combineReducers({
 newVisit: newVisitReducer,
 newEmployee:newEmployeeReducer,
 authSlice: authSliceReducer,
})

const persistedReducer=persistReducer(persistConfig,reducer)

const store = configureStore({
 reducer: persistedReducer,

//  employees: employeeReducer,
})

export default store;