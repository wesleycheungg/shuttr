import React from 'react';
import { Switch, Route } from "react-router-dom"
import GreetingContainter from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import HomeContainer from './home/home_container'

import PhotoIndex from './photo/photo_index_aws';
import Form from './form';


import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <GreetingContainter />

        <Route path="/" component={HomeContainer} />
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
