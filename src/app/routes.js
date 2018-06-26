import React from "react";
import CHome from "./components/home/chome.js";
import NotFound from "./components/page404/page404.jsx";
import Main from "./main.js";

const routes = [
    { component: Main,
        routes: [
            { path: "/",
                exact: true,
                component: CHome
            },
            { path: "/home",
                component: CHome
            },
            { path: "*",
                component: NotFound
            }
        ]
    }
];

export default routes;