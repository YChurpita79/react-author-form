import React from "react";
import "./greeting.styl";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return(
            <section className="greeting-section">
                <div className="greeting">
                    <i className="glyphicon glyphicon-user"/>
                    <div className="greeting-user-wrap">
                        <h2>Welcome</h2>
                        <h3>login: {this.props.currUser.login}</h3>
                        <h3>password: {this.props.currUser.password}</h3>
                        <a onClick = {()=>{ this.props.onLogoutUsers()} } >logout <i className = "glyphicon glyphicon-log-out"></i></a>
                    </div>
                </div>
            </section>
        );
    };
};

export default  Greeting;