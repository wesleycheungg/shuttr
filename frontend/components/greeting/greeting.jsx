import React from 'react'
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, login, removeSessionErrors}) => {

    const handleSubmit = () => {
        logout()
    }

    const handleClick = () => {
        let demoUser = {username: "demo", password: "password"}
        login(demoUser)
    }

    const loggedInView = () => (
        <Link className="logout" onClick={handleSubmit} to="/">Log Out</Link>
    )

    const handleError = () => {
        removeSessionErrors
    }


    const loggedOutView = () => (
            <nav className="nav-bar-1">
                <Link className="logo" to="/">Shuttr</Link>
                <Link className="login" to="/login">Log In</Link>
                <button className="signupButton" onClick={handleError}><Link className="signup" to="/signup">Sign Up</Link></button>
                <button className="demoButton" onClick={handleClick}>DEMO LOGIN</button>
            </nav>
    )

    return currentUser ? loggedInView() : loggedOutView();
};

export default Greeting