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
        // console.log(this.props.userId)
        // console.log(this.props.currentUser)
        // this.props.fetchAlbums(this.props.userId)
        // console.log(this.props.userId)
    }

    render(){
        let albums = this.props.albums.map( album => {
            return (
                <UserAlbumIndexItem key={album.id} album={album}/>
            )
        })
        return(
            <div className="albums-index-container">
                {albums}
                {/* <AlbumForm /> */}
                {/* <Link to='/albums/new'>CREATE ALBUM</Link> */}
            </div>
        )
    }
}

export default UserAlbumIndex;