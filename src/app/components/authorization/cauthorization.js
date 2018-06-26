import { connect } from "react-redux";
import { aAuthorUsers, aTestAuthorUsers,  aLogoutUsers  } from "../../action/auser";
import  Authorization from "./authorization.jsx";

const mapStateToProps = ( state ) => {
    return {
        currUser:       state.users,
        authorStatus:   state.authorstatus,
        authorError:    state.usrerror
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        onAuthorUsers: (userParam) => {
            dispatch( aAuthorUsers (userParam) )
        },
        onTestAuthorUsers: () => {
            dispatch(aTestAuthorUsers() )
        },
        onLogoutUsers : () => {
            dispatch( aLogoutUsers () )
        }
    }
};

const CAuthorization = connect (
    mapStateToProps,
    mapDispatchToProps
)(Authorization);

export default CAuthorization;