import React from 'react';
import { Switch, Route } from "react-router-dom"
import GreetingContainter from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'

import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>Shuttr</h1>
            <GreetingContainter />
        </header>
        <div>
            <AuthRoute path='/login' component={LoginFormContainer} />
            <AuthRoute path='/signup' component={SignupFormContainer} />
        </div>

    </div>
);

export default App;