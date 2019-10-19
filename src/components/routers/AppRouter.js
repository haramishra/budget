import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "../Header"
import AddExpencePage from "../AddExpencePage"
import EditExpencePage from "../EditExpencePage"
import ExpenceDashbordPage from "../ExpenceDashbordPage"
import HelpPage from "../HelpPage"
import NotFoundPage from "../NotFoundPage"

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpenceDashbordPage} exact={true} />
                <Route path='/create' component={AddExpencePage} />
                <Route path='/help' component={HelpPage} />
                <Route path='/edit/:id' component={EditExpencePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;