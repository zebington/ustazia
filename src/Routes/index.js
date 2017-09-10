import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Home from './Home';
import Lidl from './Lidl';
import Maps from './Maps';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/maps" component={Maps} />
            <Route exact path="/lidl" component={Lidl} />
        </Switch>
    </Router>
);
