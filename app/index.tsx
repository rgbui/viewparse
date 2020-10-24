

import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Route, Router } from "react-router";
import * as History from 'history';
import { routes } from "./routes";
const history = History.createBrowserHistory();
ReactDOM.render(
    <Router children={routes} history={history} />,
    document.body.appendChild(document.createElement('div')) as HTMLElement,
) 
