import React from 'react';
import PhotoIndexItem from './photo_index_item'

class PhotoIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        let images = this.props.photos.map( image => {
            return (
                <PhotoIndexItem key={image.id} photo={image} />
            )
        })
        return(
            <div>
                <h1>This is the Photostream</h1>
                <div>
                    {images}
                </div>

            </div>
        )
    }
}

export default PhotoIndex;