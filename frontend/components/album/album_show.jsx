import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component{
    constructor(props){
        super(props)

    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.id !== this.props.match.params.id) {
    //         this.props.fetchAlbum(this.props.match.params.id);
    //     }

    //     if (prevProps.userId !== this.props.userId) {
    //         this.props.fetchAlbum(this.props.match.params.id);
    //     }
    // }

    componentDidMount(){
        this.props.fetchAlbum(this.props.albumId)
        this.props.fetchAlbumPhotos(this.props.userId, this.props.albumId)

    }

    render(){
        let albumTitle, albumDescription, user;
        console.log(this.props.album)
        console.log(this.props.user)
        console.log(this.props.albumId)
        if (this.props.album) {
            albumTitle = this.props.album.title;
            albumDescription = this.props.album.description;
            // user = this.props.user.full_name;
        }
        let photos = this.props.photos.map( photo => {
            return(
                <div key={photo.id} className="album-photos">
                    <Link to={`/photos/${photo.id}`}>
                        <img src={photo.photoUrl} alt=""></img>
                    </Link>
                </div>
            )
        })
        return(
            <div>
                <div>
                    <div className="album-header">
                        <h1 className="album-title">{albumTitle}</h1>
                        <h2 className="album-description">{albumDescription}</h2>
                    </div>
                    {/* <h3>By: {user}</h3> */}
                    <div className="album-photos-container">
                        {photos}
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumShow;