import {TEST_USERS_STATUS} from "../const.js";
let authorStatus = "NO";

export default function authorstatus ( state = authorStatus, action ){
    if  ( action.type === TEST_USERS_STATUS){
        authorStatus  = action.authorStatus;
        return  authorStatus ;
    } else return state;
};