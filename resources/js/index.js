import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import TaskEdit from "./components/TaskEdit";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import NewCar from "./components/Newcar/NewCar";
// import "../../public/css/index.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { setWith } from "lodash";
import { WebpackOptionsApply } from "webpack";
if (document.getElementById("root")) {
    ReactDOM.render(
        <Router>
            <Switch>
                <Route exact path="/newcar" component={NewCar} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/home" component={Dashboard} />
                <Route exact path="/:id/edit" component={TaskEdit} />
                {/* <ShowCar /> */}

                {/* <Route exact path="/home">
                    <App />
                </Route>
                <Route exact path="/:id/edit">
                    <TaskEdit />
                </Route> */}
            </Switch>
            <Footer />
        </Router>,

        document.getElementById("root")
    );
}

// <Route path="/:id">
// <ShowCar />
// </Route>
