import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Login from './components/Login';


export default (
    <Switch>
        <Route exact path = '/' component={Login} />
        <Route path = '/menu' component={Menu}/>
        <Route path = '/cart' component={Cart} />
    </Switch>
)