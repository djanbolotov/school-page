import { createStore, combineReducers, applyMiddleware } from 'redux';
import {reducer} from './reducers/login';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    user: reducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk));