import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Backend/Login';

function BackendRoutes(){
    return(
        <Switch>
            <Route path="/admin/login" component={Login}/>
        </Switch>
    );
}

export default BackendRoutes;