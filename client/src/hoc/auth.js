import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedClass) {
    class AuthenticationCheck extends Component {
        state = {
            loading: true
        };

        render() {
            if (this.state.loading) {
                return <div className="loader">Загрузка...</div>;
            }
            return <div />;
        }
    }

    function mapStateToProps(state) {
        return {
            user: state.user
        };
    }

    return connect(mapStateToProps)(AuthenticationCheck);
}