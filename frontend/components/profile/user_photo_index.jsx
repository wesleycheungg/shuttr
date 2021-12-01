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
            <div className="user-container">
                <div>
                    User Photo Index Page
                </div>
                <Link to="/">Photostream</Link>
                <br></br>
                <Link to={`/users/${this.props.userId}/albums`}>Albums</Link>
                {/* <Link to={`/albums`}>Albums</Link> */}
                <div className="user-index-container">TEST</div>
            </div>
        )
    }
}

export default UserPhotoIndex;