import { configureStore,combineReducers } from '@reduxjs/toolkit'
import modalReducer from './slices/modalSlice';
const reducer = combineReducers({
  Modal:modalReducer
});
export default configureStore({
  reducer
});