import React from 'react'
// import SessionLinks from './session_links'
import { Link } from 'react-router-dom';


const Greeting = ({currentUser, logout}) => {

    const handleSubmit = () => {
        logout()
    }

    const loggedInView = () => (
        <Link className="logout" onClick={handleSubmit} to="/">Log Out</Link>
    )


    const loggedOutView = () => (
        <nav>
            <Link className="login" to="/login">Log In</Link>
            <br></br>
            <Link className="signup" to="/signup">Sign Up</Link>
        </nav>
    )

    return currentUser ? loggedInView() : loggedOutView();
};

export default Greeting