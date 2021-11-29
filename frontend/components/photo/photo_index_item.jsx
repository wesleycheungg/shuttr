import React from 'react'
import { Link } from 'react-router-dom';

const PhotoIndexItem = (props) => {
    const photoUrl = props.photo.photoUrl;
    return (
        <div className="photo-items">
            <Link to={`/photos/${props.photo.id}`}>
                <img src={photoUrl} alt=""></img>
            </Link>
        </div>
    )
}

export default PhotoIndexItem;