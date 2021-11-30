import React from 'react';
import { Switch, Route } from "react-router-dom"
import GreetingContainter from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import HomeContainer from './home/home_container'
import PhotoShowContainer from './photo/photo_show_container';
import PhotoCreateContainer from './photo/photo_create_container'
import UserPhotoIndexContainer from './profile/user_photo_index_container'

import PhotoIndex from './photo/photo_index_aws';
import Form from './form';


import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <GreetingContainter />

        <Switch>
            <Route path="/photos/:id" component={PhotoShowContainer} />
            <Route path="/users/:id/photos" component={UserPhotoIndexContainer} />
            <Route path="/new" component={PhotoCreateContainer} />
            <Route path="/" component={HomeContainer} />
        </Switch>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />






    </div>
);

export default App;

// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             photos: []
//         };
//         this.fetchPhotos = this.fetchPhotos.bind(this);
//     }

//     fetchPhotos() {
//         $.ajax({
//             url: "/api/photos"
//         }).then(photos => {
//             // debugger
//             this.setState({ photos });
//         });
//     }

//     componentDidMount() {
//         this.fetchPhotos();
//     }

//     render() {
//         return (
//             <div>
//                 <Form fetchPhotos={this.fetchPhotos} />
//                 <PhotoIndex photos={this.state.photos} />
//             </div>
//         );
//     }
// }
