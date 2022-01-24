import appReducer from './App/reducer';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  App: appReducer
});

export const store = configureStore({reducer:rootReducer});
