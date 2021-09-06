import React from 'react';
import Layout from '../layout';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes
