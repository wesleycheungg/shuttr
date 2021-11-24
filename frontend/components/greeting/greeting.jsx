import React from 'react'
// import SessionLinks from './session_links'
import { Link } from 'react-router-dom';



const Greeting = ({currentUser, logout, login}) => {

    const handleSubmit = () => {
        logout()
    }

    const handleClick = () => {
        let demoUser = {username: "TEST1", password: "password"}
        login(demoUser)
    }

    const loggedInView = () => (
        <Link className="logout" onClick={handleSubmit} to="/">Log Out</Link>
    )


    const loggedOutView = () => (
        <div className="nav-container">
            <nav className="nav-bar-1">
                <button className="logoButton"><Link className="logo" to="/">Shuttr</Link></button>
                <button className="loginButton"><Link className="login" to="/login">Log In</Link></button>
                <button className="signupButton"><Link className="signup" to="/signup">Sign Up</Link></button>
                <button className="demoButton" onClick={handleClick}>DEMO LOGIN</button>
            </nav>
        </div>
    )

    return currentUser ? loggedInView() : loggedOutView();
};

export default Greeting