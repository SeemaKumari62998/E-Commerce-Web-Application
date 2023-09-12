
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cardItems from './reducer';

const rootReducer = combineReducers({
  cardItems,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;








// import {combineReducers } from "redux";

// import cardItems from "./reducer";

// export default combineReducers({
//     cardItems,
// })
