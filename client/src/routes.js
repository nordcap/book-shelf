import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/layout";
import Home from "./components/Home/home";
import BookView from "./components/Books";
import Login from "./containers/Admin/login";

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/books/:id" exact component={BookView} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </Layout>
    );
};

export default Routes;
