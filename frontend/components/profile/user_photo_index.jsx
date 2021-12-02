import React from 'react';
import { Link } from 'react-router-dom';

class UserPhotoIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        console.log(this.props.userId)
        this.props.fetchUserPhotos(this.props.userId)
    }

    render() {
        if (!this.props.userId){
            return null;
        }

        let photos = this.props.photos.map( photo => {
            return(
                <div key={photo.id} className="profile-photo-index-items">
                    <Link to={`/photos/${photo.id}`}>
                        <img src={photo.photoUrl} alt=""></img>
                    </Link>
                </div>
            )
        })


        return (
            <div className="profile-container">
                <div className="profile-nav-bar">
                    <Link className="profile-nav-bar-photostream"to="/">Photostream</Link>
                    <Link className="profile-nav-bar-albums"to={`/users/${this.props.userId}/albums`}>Albums</Link>
                </div>

                <div className="profile-photo-index">
                    {photos}
                </div>
            </div>
        )
    }
}

export default UserPhotoIndex;