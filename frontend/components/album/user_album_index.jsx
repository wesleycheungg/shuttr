import React from 'react';
import { Link } from 'react-router-dom'
import UserAlbumIndexItem from './user_album_index_item';
import AlbumForm from './album_form';

class UserAlbumIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchUserAlbums(this.props.userId)
    }

    render(){
        let username = this.props.currentUser.username
        let a = this.props.albums.map( album => {
            return (
                <UserAlbumIndexItem className="albums-list" key={album.id} album={album}/>
            )
        })
        return(
            <div >
                <div className="profile-header">
                    {username}
                </div>

                <div className="profile-nav-bar">
                    <Link className="profile-nav-bar-photostream" to={`/users/${this.props.userId}/photos`}>Photostream</Link>
                    <Link className="profile-nav-bar-albums" to={`/users/${this.props.userId}/albums`}>Albums</Link>
                </div>

                <div className="profile-album-header-container">
                    <div className="profile-album-header">Your Album List</div>
                </div>
                {a}

                <div className="profile-nav-bar">
                    {/* <Link className="profile-nav-bar-new-albums-btn"to={`/albums/new`}>Create New Album</Link> */}
                    <Link className="profile-nav-bar-new-albums-btn" to={`/albums/new`}><button>Create New Album</button></Link>
                </div>

                {/* {
                    albums.map(album => {
                        <Link to={`/albums/${album.id}`}>
                            <img className='album-image' src={album.photos[0].photoUrl}></img>
                        </Link>
                    })
                } */}
            </div>
        )
    }
}

export default UserAlbumIndex;