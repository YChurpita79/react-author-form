import React from "react";
import "./authorization.styl";
import AuthorForm from './authorform/authorform.jsx';

class Authorization extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {
        return(
            <section className="authorization-section">
                <AuthorForm authprop = {this.props}/>
            </section>
        );
    };
};

export default Authorization;