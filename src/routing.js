import React from 'react';

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import App from "./pages/App";
import Other from "./pages/Other";
import OtherName from "./pages/OtherName";
import {isAuthed} from "./services/auth";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render = { props => (
                isAuthed() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname: "/", state: {from: props.location}}}/>
                )
            )
        }
    />
);

//<Switch> Não deixa 2 rotas serem exibidas ao mesmo tempo
const Routing = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/other" component={Other} />
            <PrivateRoute path="/other/:id" component={OtherName} />
        </Switch>
    </Router>
);


// class Routing extends Component {
//     render() {
//         return (
//
//         );
//     }
// }

export default Routing;
