import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from "./pages/App";
import Other from "./pages/Other";
import OtherName from "./pages/OtherName";


class Routing extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/other" component={Other} />
                    <Route path="/other/:id" component={OtherName} />
                </Switch>
            </Router>
        );
    }
}

export default Routing;
