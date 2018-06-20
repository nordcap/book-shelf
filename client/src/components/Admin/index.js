import React from "react";

const User = props => {
    let user = props.user.login;
    return (
        <div className="user_container">
            <div className="avatar">
                <img alt="avatar" src="/images/avatar.png" />
            </div>
            <div className="nfo">
                <div>
                    <span>Имя:</span> {user.name}
                </div>
                <div>
                    <span>Фамилия:</span> {user.lastname}
                </div>
                <div>
                    <span>email:</span> {user.email}
                </div>
            </div>
        </div>
    );
};

export default User;
