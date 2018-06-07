import React from 'react';

const Layout = (props) => {
    return (
        <div>
            HEADER
            <div>
                {props.children}
            </div>

        </div>
    );
};

export default Layout;