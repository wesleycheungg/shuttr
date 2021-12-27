import React from 'react';
import CommentShowContainer from '../comments/comment_show_container'

class PhotoShow extends React.Component{
    constructor(props){
        super(props)

        this.onDelete = this.onDelete.bind(this)
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.photoId)
    }

    onDelete() {
        const {deletePhoto, photo} = this.props
        deletePhoto(photo.id)
            .then(() => {
                this.props.history.push()
            })
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
                    <button onClick={this.onDelete}>Delete Photo</button>
                </div>
                <CommentShowContainer />

            </div>
        )
    }
}

export default PhotoShow;