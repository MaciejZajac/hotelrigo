import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Layout from "./components/HOC/Layout";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Rooms from "./components/Rooms/Rooms";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/rooms' component={Rooms} />
                    <Route exact path='/contact' component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};
export default Router;
