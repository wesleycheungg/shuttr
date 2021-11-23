import React from 'react';
import { Link } from 'react-router-dom';

const SessionLinks = () => {
    return(
        <div>
            <nav>
                <Link className="login" to="/login">Log In</Link>
                <br></br>
                <Link className="signup" to="/signup">Sign Up</Link>
            </nav>
        </div>
    )
}

export default SessionLinks