import React from 'react'

const PhotoIndexItem = (props) => {
    const photoUrl = props.photos.photoUrl;
    return (
        <div>
            {/* <img src={photoUrl}>photo</img> */}
            <img src="/Users/wes/Desktop/shuttr/app/assets/images/test_images/test6.jpg"></img>
        </div>
    )
}

export default PhotoIndexItem;