import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "./../actions";

export default function(ComposedClass, reload) {
    class AuthenticationCheck extends Component {
        state = {
            loading: true
        };

        componentWillMount() {
            this.props.dispatch(auth());
        }

        componentWillReceiveProps(nextProps) {
            this.setState({ loading: false });

            if (!nextProps.user.login.isAuth) {
                if (reload) {
                    this.props.history.push("/login"); //переход на http://localhost:3000/login - аналог ридиректа?
                }
            } else {
                //если user зарегистрирован, то сразу перенаправление на /user
                if (reload === false) {
                    this.props.history.push("/user"); //переход на http://localhost:3000/user - аналог ридиректа?
                }
            }
        }
 
        render() {
            if (this.state.loading) {
                return <div className="loader">Загрузка...</div>;
            }
            return <ComposedClass {...this.props} user={this.props.user} />;
        }
    }

    function mapStateToProps(state) {
        return {
            user: state.user
        };
    }

    return connect(mapStateToProps)(AuthenticationCheck);
}
