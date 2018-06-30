import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import { connect } from "react-redux";

const SidenavItems = ({ user }) => {
    const items = [
        {
            type: "navItem",
            icon: "home",
            text: "Главная",
            link: "/",
            restricted: false
        },
        {
            type: "navItem",
            icon: "file-text-o",
            text: "Профиль",
            link: "/user",
            restricted: true
        },
        {
            type: "navItem",
            icon: "file-text-o",
            text: "Добавить админа",
            link: "/user/register",
            restricted: true
        },
        {
            type: "navItem",
            icon: "file-text-o",
            text: "Вход",
            link: "/login",
            restricted: false,
            exclude: true
        },
        {
            type: "navItem",
            icon: "file-text-o",
            text: "Мои отзывы",
            link: "/user/user-reviews",
            restricted: true
        },
        {
            type: "navItem",
            icon: "file-text-o",
            text: "Добавить отзыв",
            link: "/user/add",
            restricted: true
        },
        {
            type: "navItem",
            icon: "file-text-o",
            text: "Выход",
            link: "/user/logout",
            restricted: true
        }
    ];

    const element = (item, i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon} />
                {item.text}
            </Link>
        </div>
    );

    const showItems = () =>
        user.login
            ? items.map((item, i) => {
                  if (user.login.isAuth) {
                      //если пользователь зарегистрирован, то вернет все элементы кроме "/login",
                      return !item.exclude ? element(item, i) : null;
                  } else {
                      //если пользователь не зарегистрирован, вернет пункты с restricted=false Главная и Вход
                      return !item.restricted ? element(item, i) : null;
                  }
              })
            : null;

    return <div>{showItems()}</div>;
};

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(SidenavItems);
