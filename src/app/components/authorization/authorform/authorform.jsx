import React from "react";
import "./authorform.styl";

class AuthorForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login:"",
            password:"",
            cWidth:840
        };
        this.loginValidat = /[^\!\@\#\$\%\^\`\&\+\(\)][a-zA-Z_0-9-]*/g;
        this.inpLogin = null;
        this.inpPass = null;
        this.loginLabel = null;
        this.passLabel = null;
        this.inpForm = null;
    };

    componentDidMount(){
        this.getWidth();
        window.onresize =  this.getWidth;
    };

    getWidth = () => {
        let cStele;
        cStele = window.getComputedStyle(this.inpForm,null).getPropertyValue("width");
        this.setState( {cWidth: parseInt( cStele ,10)} );
    };

    changeLogin = (e) => {
        let login = e.target.value;
        if(this.loginValidat.test(login) === false) {
            this.inpLogin.classList.add('valid-err');
            this.loginLabel.classList.add('label-err');
            this.state.login = '';
        } else {
            this.inpLogin.classList.remove('valid-err');
            this.loginLabel.classList.remove('label-err');
            this.state.login = login;
        };
    };

    changePass = (e) => {
        let password = e.target.value;
        this.state.password = password;
    };

    componentDidUpdate(){
        if (this.inpLogin.value!=='' ||  this.inpPass.value!=='')
        this.validateStyle(this.props.authprop.authorError);
    };

    validateStyle = (authorError) => {
        if (authorError.errlogin ==='NO'){
            this.inpLogin.classList.add('valid-err');
            this.loginLabel.classList.add('label-err');
        } else {
            this.inpLogin.classList.remove('valid-err');
            this.loginLabel.classList.remove('label-err');
        };
        if (authorError.errPass ==='NO'){
            this.inpPass.classList.add('valid-err');
            this.passLabel.classList.add('label-err');
        } else {
            this.inpPass.classList.remove('valid-err');
            this.passLabel.classList.remove('label-err');
        };

    };

    testInputSend = () => {
        if (this.inpLogin.value!=='' ||  this.inpPass.value!=='') {
            this.props.authprop.onAuthorUsers(this.state);
        };

        if (this.inpLogin.value===''){
            this.inpLogin.classList.add('valid-err');
            this.loginLabel.classList.add('label-err');
        } else {
            this.inpLogin.classList.remove('valid-err');
            this.loginLabel.classList.remove('label-err');
        };
        if (this.inpPass.value===''){
            this.inpPass.classList.add('valid-err');
            this.passLabel.classList.add('label-err');
        } else {
            this.inpPass.classList.remove('valid-err');
            this.passLabel.classList.remove('label-err');
        };
    };

    leftBlock = () => {
        return(
            <div className="login-container login-social" >
                <a className="social-btn btn-facebook">
                    <i className="btn-icon face-icon"></i>
                    <span>Log in with Facebook</span>
                </a>
                <a className="social-btn btn-google">
                    <i className="btn-icon google-icon"></i>
                    <span>Log in with Google +</span>
                </a>
            </div>
        );
    };

    rightBlock = () => {
        return(
            <div className="login-container login-server">
                <div className="author-input-wrap">
                    <label ref={(label)=>{this.loginLabel = label}} htmlFor="login-1" >Login</label>
                    <input id="login-1" onChange={this.changeLogin} ref={(input)=>{this.inpLogin = input}} type="text"></input>
                </div>
                <div className="author-input-wrap">
                    <label  ref={(label)=>{this.passLabel = label}}  htmlFor="password-1" >Password</label>
                    <input id="password-1" onChange={this.changePass}  ref={(input)=>{this.inpPass = input}}  type="password"></input>
                </div>
                <div className="remember-wrap">
                    <input type="checkbox" id="c1" name="cc" />
                    <label htmlFor="c1"><i></i>Remember me</label>
                </div>

                <div className="author-btn-wrap">
                    <a onClick={this.testInputSend}>Log in</a>
                    <p>Need help logging in?</p>
                </div>
            </div>
        );
    };

    setBlock = () => {
        if ( this.state.cWidth <= 720){
            return(
                <div className="author-form-wrap">
                    {this.rightBlock()}
                    {this.leftBlock()}
                </div>
            );
        } else {
            return(
                <div className="author-form-wrap">
                    {this.leftBlock()}
                    {this.rightBlock()}
                </div>
            );
        };
    };

    render(){
        return(
            <form ref={ (form )=>{this.inpForm = form; } } className="author-form">
                <i className="btn-close"></i>
                <h2>Log in to the Site</h2>
                {this.setBlock()}
                <h4> Dont have an account yet? <a>Sign up</a></h4>
            </form>

        );
    };
};

export default AuthorForm;