import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import TaskEdit from "./components/TaskEdit";
import ShowCar from "./components/ShowCar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { setWith } from "lodash";
import { WebpackOptionsApply } from "webpack";
if (document.getElementById("root")) {
    ReactDOM.render(
        <Router>
            <Switch>
                <Route exact path="/newcar" component={App} />
                <Route exact path="/dashboard" component={ShowCar} />
                <Route exact path="/home" component={ShowCar} />
                <Route exact path="/:id/edit" component={TaskEdit} />
                {/* <ShowCar /> */}

                {/* <Route exact path="/home">
                    <App />
                </Route>
                <Route exact path="/:id/edit">
                    <TaskEdit />
                </Route> */}
            </Switch>
        </Router>,

        document.getElementById("root")
    );
}

// <Route path="/:id">
// <ShowCar />
// </Route>
