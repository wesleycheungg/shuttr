import React from 'react'
import ReactDOM from 'react-dom'
import { login, signup, logout } from './util/session_api_util'
import configureStore from './store/store'
import Root from './components/root'
import { fetchAllPhotos } from './util/photo_api_util'


document.addEventListener("DOMContentLoaded", () => {
    let store;

    if(window.currentUser){
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: {currentUserId: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    window.fetchAllPhotos = fetchAllPhotos
    window.login = login
    window.signup = signup
    window.logout = logout
    window.fetchAllPhotos = fetchAllPhotos
    // TESTING END
    
    
    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store} />, root)
})