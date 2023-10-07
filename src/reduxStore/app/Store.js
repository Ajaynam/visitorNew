import { configureStore } from "@reduxjs/toolkit";
import newBuyingReducer from "../features/newBuying/newBuyingSlice";
import newSellingReducer from "../features/newSelling/newSellingSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
 key: 'root',
 version:1,
 storage
}

const reducer = combineReducers({
 newBuying: newBuyingReducer,
 newSelling: newSellingReducer,
})

const persistedReducer=persistReducer(persistConfig,reducer)

const store = configureStore({
 reducer: persistedReducer
})

export default store;