import React from "react";
import "./home.styl";
import CAuthorization from "../authorization/cauthorization.js";
import Greeting from "../greeting/cgreeting.js";


class Home extends React.Component {
    constructor(props) {
        super(props);
    };

    componentWillMount(){
        this.props.onTestAuthorUsers();
    };


    setForm = () => {
        if (this.props.authorStatus === "LOGIN") {
            return <Greeting />;
        } else {
            return <CAuthorization />;
        };
    };

    render() {
        return (
            <div className="container">
                {this.setForm()}
            </div>
        );
    };
};

export default Home ;
