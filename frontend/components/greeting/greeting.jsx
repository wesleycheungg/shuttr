import React from 'react'
import { Link } from 'react-router-dom';
import upload_img from 'assets/images/upload-icon.png';
import shutter from 'assets/images/shuttr.png';



const Greeting = ({ currentUser, currentUserId, logout, login }) => {

    const handleSubmit = () => {
        logout()
    }

    const handleClick = () => {
        let demoUser = {username: "demo", password: "password"}
        login(demoUser)
    }

    const loggedInView = () => (
        <nav className="nav-bar-1">
            <img className="shuttr-logo" src={shutter} alt="shuttr-logo"></img>
            <Link className="logo" to="/">Shuttr</Link>
            <p className="greeting">Hi, {currentUser.full_name}</p>
            <Link className="upload" to="/new"><img className="upload-img" src={upload_img} alt=""></img></Link>
            <Link className="profile" to={`/users/${currentUserId}/photos`}>Profile</Link>
            <Link className="logout" onClick={handleSubmit} to="/">Log Out</Link>
        </nav>
    )
    
    const loggedOutView = () => (
            <nav className="nav-bar-1">
                <img className="shuttr-logo" src={shutter} alt="shuttr-logo"></img>
                <Link className="logo" to="/">Shuttr</Link>
                <Link className="login" to="/login">Log In</Link>
                <button className="signupButton"><Link className="signup" to="/signup">Sign Up</Link></button>
                <button className="demoButton" onClick={handleClick}>DEMO LOGIN</button>
            </nav>
    )

    return currentUser ? loggedInView() : loggedOutView();
};

export default Greeting