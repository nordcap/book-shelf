import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const SidenavItems = () => {

    const items = [
        {
            type: 'navItem',
            icon: 'home',
            text: 'Главная',
            link: '/',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Профиль',
            link: '/user',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Добавить админа',
            link: '/user/register',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Вход',
            link: '/login',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Отзывы',
            link: '/user/user-reviews',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Добавить отзыв',
            link: '/user/add',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Выход',
            link: '/user/logout',
            restricted: false
        }
    ]

    const element = (item, i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon} />
                {item.text}
            </Link>
        </div>
    )

    const showItems = () => (
        items.map((item, i) => {
            return element(item, i)
        })
    )

    return (
        <div>
            {showItems()}
        </div>
    );
};

export default SidenavItems;