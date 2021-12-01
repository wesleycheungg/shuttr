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
        // this.props.fetchAlbumPhotos(this.props.userId, this.props.albumId)
        // console.log(this.props.userId)
        // console.log(this.props.albumId)
        // this.props.fetchAlbums(this.props.userId)
        // console.log(this.props.userId)
    }

    render(){
        // const { albums } = this.props
        let a = this.props.albums.map( album => {
            return (
                <UserAlbumIndexItem key={album.id} album={album}/>
            )
        })
        return(
            <div className="albums-index-container">
                <div className="profile-nav-bar">
                    <Link className="profile-nav-bar-photostream" to="/">Photostream</Link>
                    <Link className="profile-nav-bar-albums" to={`/users/${this.props.userId}/albums`}>Albums</Link>
                </div>
                {/* {
                    albums.map(album => {
                        <Link to={`/albums/${album.id}`}>
                            <img className='album-image' src={album.photos[0].photoUrl}></img>
                        </Link>
                    })
                } */}
                {a}
                {/* <AlbumForm /> */}
                {/* <Link to='/albums/new'>CREATE ALBUM</Link> */}
            </div>
        )
    }
}

export default UserAlbumIndex;