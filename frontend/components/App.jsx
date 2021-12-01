import React from 'react';
import { Switch, Route } from "react-router-dom"
import GreetingContainter from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import HomeContainer from './home/home_container'
import PhotoShowContainer from './photo/photo_show_container';
import PhotoCreateContainer from './photo/photo_create_container'
import UserPhotoIndexContainer from './profile/user_photo_index_container'
import UserAlbumIndexContainer from './album/user_album_index_container'
import AlbumFormContainer from './album/album_form_container'
import AlbumShowContainer from './album/album_show_container'

import PhotoIndex from './photo/photo_index_aws';
import Form from './form';


import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <GreetingContainter />

        <Switch>
            <Route path="/photos/:id" component={PhotoShowContainer} />
            <Route path="/users/:id/photos" component={UserPhotoIndexContainer} />
            <Route path="/users/:id/albums" component={UserAlbumIndexContainer} />
            <Route path="/albums/:id" component={AlbumShowContainer} />
            {/* <Route path="/albums/new" component={AlbumFormContainer} /> */}
            <Route path="/albums" component={UserAlbumIndexContainer} />

            <Route path="/new" component={PhotoCreateContainer} />
            <Route path="/" component={HomeContainer} />
        </Switch>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />



    </div>
);

export default App;

