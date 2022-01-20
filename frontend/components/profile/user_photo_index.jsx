import React from 'react';
import { Link } from 'react-router-dom';

class UserPhotoIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        // console.log(this.props.userId)
        // console.log("this is componenet did mount")
        this.props.fetchUserPhotos(this.props.userId)
        console.log(this.props.photoLength)
    }

    render() {
        let username = this.props.currentUser.username
        if (!this.props.userId){
            return null;
        }

        let photos;

        photos = this.props.photos.map( photo => {
            return(
                <div key={photo.id} className="profile-photo-index-items">
                    <Link to={`/photos/${photo.id}`}>
                        <img src={photo.photoUrl} alt=""></img>
                    </Link>
                </div>
            )
        })

        console.log(photos)

        return (
            <div className="profile-container">
                <div className="profile-header">
                    {username}
                </div>

                <div className="profile-nav-bar">
                    <Link className="profile-nav-bar-photostream" to={`/users/${this.props.userId}/photos`}>Photostream</Link>
                    <Link className="profile-nav-bar-albums"to={`/users/${this.props.userId}/albums`}>Albums</Link>
                </div>

                <div className="profile-photo-index">
                    {photos}
                </div>

                <div className={(photos.length < 1 ? "msg-unhidden" : "msg-hidden")}>You have no photos! Use the upload button on the Nav bar to upload photos!</div>
            </div>
        )
    }
}

export default UserPhotoIndex;