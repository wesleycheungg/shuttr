import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchAlbum(this.props.match.params.id);
        }

        if (prevProps.userId !== this.props.userId) {
            this.props.fetchAlbum(this.props.match.params.id);
        }
    }

    componentDidMount(){
        this.props.fetchAlbum(this.props.albumId)
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
        // let photos = this.props.photos.map( photo => {
        //     return(
        //         <img src={photo.photoUrl} alt=""></img>
        //     )
        // })
        return(
            <div>
                <div>
                    <h1>Album Title: {albumTitle}</h1>
                    <h2>Album Description: {albumDescription}</h2>
                    {/* <h3>By: {user}</h3> */}
                    <div>
                        {/* {photos} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumShow;