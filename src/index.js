import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
// import registerServiceWorker from "registerServiceWorker";

// import { LocalizeProvider } from "react-localize-redux";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css";
import firebase from 'firebase/app';

var config = {
  apiKey: "AIzaSyDQjslYmKz7nljvqRdt7u7jfb7vdgjzHzg",
    authDomain: "triggered-homepage.firebaseapp.com",
    databaseURL: "https://triggered-homepage.firebaseio.com",
    projectId: "triggered-homepage",
    storageBucket: "triggered-homepage.appspot.com",
    messagingSenderId: "994044325551"
};
firebase.initializeApp(config);


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
