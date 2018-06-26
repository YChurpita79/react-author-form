import "babel-polyfill";
import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import { Provider }  from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HashRouter  from 'react-router-dom/HashRouter';
import { renderRoutes } from "react-router-config";
import routes from "./routes.js";

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
));

const component = (
    <Provider store={store}>
        <HashRouter>
            { renderRoutes(routes) }
        </HashRouter>
    </Provider>
);

ReactDOM.render( component , document.getElementById("app") );
