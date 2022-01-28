import React from 'react';
import PhotoIndexItem from './photo_index_item'

class PhotoIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllPhotos()
        // this.props.fetchAllUsers();
    }

    render () {
        let currentUser = this.props.currentUser;
        let photos = this.props.photos.map( photo => {
            return (
                <PhotoIndexItem key={photo.id} photo={photo} currentUser={currentUser} users={this.props.user}/>
            )
        })
        return(
            <div>
                <h1 className="photo-index-header">Explore</h1>
                <div className="photo-index-container">
                    {photos}
                </div>

            </div>
        )
    }
}

export default PhotoIndex;