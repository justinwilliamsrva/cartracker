import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import TaskEdit from "./components/TaskEdit";
import ShowCar from "./components/ShowCar";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { setWith } from "lodash";
import { WebpackOptionsApply } from "webpack";
if (document.getElementById("root")) {
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={App} />\
                <Route path="/:id/edit" component={TaskEdit} />
                <Route path="/:id" component={ShowCar} />
            </Switch>
        </BrowserRouter>,

        document.getElementById("root")
    );
}
{
    /* <Route path="/home">
<App />
</Route>
<Route path="/:id/edit">
<TaskEdit />
</Route>
<Route path="/:id">
<ShowCar />
</Route> */
}
