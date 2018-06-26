import { combineReducers } from 'redux' ;
import users from './users';
import authorstatus from './authorstatus';
import usrerror from './usrerror';

export default combineReducers({
    users,
    authorstatus,
    usrerror
});