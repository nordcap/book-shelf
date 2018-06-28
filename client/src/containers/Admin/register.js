import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, userRegisterUser } from "./../../actions";

class Register extends Component {
    state = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        error: ""
    };

    //TODO: change on constructor or componentDidMount
    componentWillMount() {
        this.props.dispatch(getUsers());
    }

    handleInputEmail = event => {};

    handleInputPassword = event => {};

    handleInputName = event => {};

    handleInputLastname = event => {};

    submitForm = e => {
        e.preventDefault();
    };

    showUsers = user =>
        user.users
            ? user.users.map(item => (
                  <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.lastname}</td>
                      <td>{item.email}</td>
                  </tr>
              ))
            : null;

    render() {
        let user = this.props.user;
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Добавить пользователя</h2>
                </form>
                <div className="current_users">
                    <h4>Текущие пользователи:</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Имя</th>
                                <th>Фамилия</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>{this.showUsers(user)}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Register);
