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
        <nav>
            <Link className="login" to="/login">Log In</Link>
            <br></br>
            <Link className="signup" to="/signup">Sign Up</Link>
            <br></br>
            <button onClick={handleClick}>DEMO LOGIN</button>
        </nav>
    )

    return currentUser ? loggedInView() : loggedOutView();
};

export default Greeting