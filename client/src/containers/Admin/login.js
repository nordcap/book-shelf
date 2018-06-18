import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "./../../actions";

class Login extends Component {
    state = {
        email: "",
        password: "",
        error: "",
        success: false
    };

    submitForm = e => {
        e.preventDefault();
        this.props.dispatch(loginUser(this.state));
    };

    handleInputEmail = event => {
        this.setState({
            email: event.target.value
        });
    };

    handleInputPassword = event => {
        this.setState({
            password: event.target.value
        });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.login.isAuth) {
            this.props.history.push("/user"); //переход на http://localhost:3000/user - аналог ридиректа?
        }
    }

    render() {
        let user = this.props.user;
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Регистрация:</h2>

                    <div className="form_element">
                        <input
                            type="email"
                            placeholder="Введите email"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                        />
                    </div>
                    <div className="form_element">
                        <input
                            type="password"
                            placeholder="Введите пароль"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                        />
                    </div>
                    <button type="submit">регистрация</button>
                    <div className="error">
                        {user.login ? <div>{user.login.message}</div> : null}
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Login);
