import React from 'react';
import { Link } from 'react-router-dom';

class UserPhotoIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.userId){
            return null;
        }
        return (
            <div className="profile-container">
                <div className="profile-nav-bar">
                    <Link className="profile-nav-bar-photostream"to="/">Photostream</Link>
                    <Link className="profile-nav-bar-albums"to={`/users/${this.props.userId}/albums`}>Albums</Link>
                </div>

                <div className="profile-body">

                </div>
            </div>
        )
    }
}

export default UserPhotoIndex;