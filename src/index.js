import React from "react";
import {render} from "react-dom";
import {Provider} from 'mobx-react';
import {HashRouter} from 'react-router-dom'
import RouteWithSubRoutes from './components/RouteWithSubRoutes.jsx'
import routes from './routes/index'
import stores from './models'
import './style/reset.css'

if (module.hot) {
    module.hot.accept();
}

render(
    <Provider {...stores}>
        <HashRouter>
            <div>
                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById("App")
);