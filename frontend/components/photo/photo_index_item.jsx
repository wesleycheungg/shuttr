import React from 'react'

const PhotoIndexItem = (props) => {
    const photoUrl = props.photo.photoUrl;
    return (
        <div>
            <img src={photoUrl} alt=""></img>
        </div>
    )
}

export default PhotoIndexItem;