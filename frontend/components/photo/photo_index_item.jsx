import React from 'react'
import { Link } from 'react-router-dom';

const PhotoIndexItem = (props) => {
    const photoUrl = props.photo.photoUrl;
    const photoUserId = props.photo.user_id;
    const currentUserId = props.currentUser;

    let info = ""
    if(photoUserId === currentUserId){
        info = "YOU!"
    } else {
        info = "Other User!"
    }
    return (
        <div className="photo-items">
            <Link to={`/photos/${props.photo.id}`}>
                <img className="photo-img" src={photoUrl} alt=""></img>
            </Link>
            <div className="photo-info">by {info}</div>
        </div>
    )
}

export default PhotoIndexItem;