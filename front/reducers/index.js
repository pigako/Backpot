import { combineReducers } from 'redux';
import user from './user';
import book from './book';
import board from './board';
import episode from './episode';

const rootReducer = combineReducers({ user, book, board, episode });

export default rootReducer;
