import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import TaskEdit from "./components/TaskEdit";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { setWith } from "lodash";
import { WebpackOptionsApply } from "webpack";
if (document.getElementById("root")) {
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/:id/edit" component={TaskEdit} />

                <App />
            </Switch>
        </BrowserRouter>,

        document.getElementById("root")
    );
}
