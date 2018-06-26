import {USERS_ERROR_AUTHORIZATION} from "../const.js";

let authorError = {
        errlogin: "NO",
        errPass: "NO"
    };

export default function usrerror ( state = authorError, action ){
    if  (action.type ===  USERS_ERROR_AUTHORIZATION){
            authorError = action.aauthorError;
            return  authorError ;
    } else return state;
};