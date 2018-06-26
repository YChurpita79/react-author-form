import {  SEND_USERS_AUTHORIZATION } from "../const.js";
let currUser = {};

export default function users ( state = currUser, action ){
    if  ( action.type === SEND_USERS_AUTHORIZATION ){
        currUser = action.acurrUser;
        return  currUser ;
    } else return state;
};