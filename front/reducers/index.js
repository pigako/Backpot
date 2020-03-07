import { combineReducers } from 'redux';
import user from './user';
import book from './book';
import board from './board';

const rootReducer = combineReducers({ user, book, board });

export default rootReducer;
