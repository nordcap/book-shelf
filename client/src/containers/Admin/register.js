import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, userRegister } from "./../../actions";

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

    handleInputEmail = event => {
        this.setState({ email: event.target.value });
    };

    handleInputPassword = event => {
        this.setState({ password: event.target.value });
    };

    handleInputName = event => {
        this.setState({ name: event.target.value });
    };

    handleInputLastname = event => {
        this.setState({ lastname: event.target.value });
    };

   //TODO: change on componentDidUpdate
    componentWillReceiveProps(nextProps){

    }

    submitForm = e => {
        e.preventDefault();
        this.setState({ error: "" });
        this.props.dispatch(
            userRegister({
                name: this.state.name,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password
            }, this.props.user.users)
        );
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
        console.log(this.props);
        let user = this.props.user;
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Добавить пользователя</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите имя"
                            value={this.state.name}
                            onChange={this.handleInputName}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите фамилию"
                            value={this.state.lastname}
                            onChange={this.handleInputLastname}
                        />
                    </div>

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

                    <button type="submit">Добавить пользователя</button>
                    <div className="error">{this.state.error}</div>
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
