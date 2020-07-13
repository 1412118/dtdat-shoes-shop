import React from "react";
import HomePage from "./components/homePage.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Routes = () => {
    return (
        <Router>
            <Route path="/" exact component={HomePage} />
        </Router>
    );
}

export default Routes;