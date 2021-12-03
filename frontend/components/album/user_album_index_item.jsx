import React from 'react';
import { Link } from 'react-router-dom';

const UserAlbumIndexItem = (props) => {
    return (
        <div className="album-items">
                <Link className="album-item-link" to={`/albums/${props.album.id}`}>
                    {props.album.title}
                    {/* <img className='album-image' src={albums.photos[0].photoUrl}></img> */}
                </Link>
        </div>
    )
}

export default UserAlbumIndexItem;