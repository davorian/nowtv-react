
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import membersReducer from './reducers/membersReducer';
import messagesReducer from './reducers/messagesReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const rootReducer = combineReducers({messages:messagesReducer, members:membersReducer});
export const store = createStore(rootReducer,{}, composeEnhancers(applyMiddleware(promiseMiddleware())
));
