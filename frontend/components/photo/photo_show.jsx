import React from 'react';

class PhotoShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.photoId)
    }

    render() {
        const photo = this.props.photo;

        if (!photo) {
            return null;
        }
        return(
            <div className="photo-show-container">
                <img className="photo-show-img" src={photo.photoUrl} alt=""></img>
            </div>
        )
    }
}

export default PhotoShow;