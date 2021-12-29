import React from 'react';
import CommentShowContainer from '../comments/comment_show_container';
import { Link } from 'react-router-dom';

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
                this.props.history.push(`/users/:id/photos`)
            })
    }

    render() {
        const photo = this.props.photo;
        const user = this.props.currentUser;
        
        if (!photo) {
            return null;
        }
        // console.log(photo.user_id);
        // console.log(user);
        return(
            <div className="photo-show">
                <div className="photo-show-container">
                    <Link className="back-to-home-btn" to="/">Back to Photostream</Link>
                    <img className="photo-show-img" src={photo.photoUrl} alt=""></img>
                    <button className={(photo.user_id === user ? "delete-photo": "delete-photo-hidden")} onClick={this.onDelete}>Delete Photo</button>
                </div>
                <div>{user.full_name}</div>
                <CommentShowContainer />

            </div>
        )
    }
}

export default PhotoShow;