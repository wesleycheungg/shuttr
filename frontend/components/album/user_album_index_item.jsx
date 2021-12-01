import React from 'react';
import { Link } from 'react-router-dom';

const UserAlbumIndexItem = (props) => {
    return (
        <div className="album-items">
            <li>
                <Link className="album-item-link" to={`/albums/${props.album.id}`}>{props.album.title}</Link>
            </li>
        </div>
    )
}

export default UserAlbumIndexItem;