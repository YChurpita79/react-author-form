import {SEND_USERS_AUTHORIZATION, TEST_USERS_STATUS, USERS_ERROR_AUTHORIZATION} from "../const.js";
export const  aAuthorUsers = (userParam) => {
    return dispatch => {
        fetch('users.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                for (let i = 0; i < jsonData.users.length ; i++){
                   if ( jsonData.users[i].login === userParam.login){
                       if (jsonData.users[i].password === userParam.password){
                           localStorage.setItem("author_user", JSON.stringify(userParam));
                           dispatch( { type: USERS_ERROR_AUTHORIZATION, aauthorError: {"errlogin":"OK", "errPass":"OK"} });
                           dispatch( { type: SEND_USERS_AUTHORIZATION, acurrUser: userParam} );
                           dispatch( { type: TEST_USERS_STATUS, authorStatus: "LOGIN" } );
                           break;
                       } else {
                           localStorage.removeItem("author_user");
                           dispatch( { type: USERS_ERROR_AUTHORIZATION, aauthorError: {"errlogin":"OK", "errPass":"NO"} });
                           dispatch( { type: TEST_USERS_STATUS, authorStatus: "LOGOUT" });
                           break;
                       };
                   } else {
                      if (i === jsonData.users.length - 1){
                          dispatch( { type: USERS_ERROR_AUTHORIZATION, aauthorError: {"errlogin":"NO", "errPass":"NO"} });
                          dispatch( { type: TEST_USERS_STATUS, authorStatus: "LOGOUT" } );
                      };
                   };
                };
            })
    };
};

export const aLogoutUsers = () => {
    return dispatch => {
        localStorage.removeItem("author_user");
        dispatch( { type: SEND_USERS_AUTHORIZATION, acurrUser: {} } );
        dispatch( { type: USERS_ERROR_AUTHORIZATION, aauthorError: {"errlogin":"NO", "errPass":"NO"}});
        dispatch( { type: TEST_USERS_STATUS, authorStatus: "LOGOUT" } );
    }
};

export const aTestAuthorUsers = () => {
    let authorUser =  JSON.parse(localStorage.getItem("author_user"));

    return dispatch => {

        fetch('users.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                if ( authorUser !== null )
                for (let i = 0; i< jsonData.users.length ; i++){
                    if ( jsonData.users[i].login === authorUser.login ){
                        if (jsonData.users[i].password === authorUser.password){
                            dispatch( { type: USERS_ERROR_AUTHORIZATION, aauthorError: {"errlogin":"OK", "errPass":"OK"} });
                            dispatch( { type: SEND_USERS_AUTHORIZATION, acurrUser: authorUser });
                            dispatch( { type: TEST_USERS_STATUS, authorStatus: "LOGIN" });
                            break;
                        } else {
                            localStorage.removeItem("author_user");
                            dispatch( { type: USERS_ERROR_AUTHORIZATION, aauthorError: {"errlogin":"OK", "errPass":"NO"} });
                            dispatch( { type: TEST_USERS_STATUS, authorStatus: "LOGOUT" });
                            dispatch( { type: SEND_USERS_AUTHORIZATION, acurrUser: {} });
                        };

                    };
                };
            })
    };
};

