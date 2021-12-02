import React from 'react';
import CommentShowContainer from '../comments/comment_show_container'

class PhotoShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // this.props.fetchPhoto(this.props.photoId)
    }

    render() {
        const photo = this.props.photo;

        if (!photo) {
            return null;
        }
        return(
            <div>
                <div className="photo-show-container">
                    <img className="photo-show-img" src={photo.photoUrl} alt=""></img>
                </div>
                <CommentShowContainer />

            </div>
        )
    }
}

export default PhotoShow;