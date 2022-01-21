import React from 'react';
import CommentShowContainer from '../comments/comment_show_container';
import { Link } from 'react-router-dom';
import back_arrow from 'assets/images/left-icon.png';

class PhotoShow extends React.Component{
    constructor(props){
        super(props)

        this.onDelete = this.onDelete.bind(this)
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.photoId)
    }

    onDelete(e) {
        e.preventDefault(); 
        // const {deletePhoto, photo} = this.props
        this.props.deletePhoto(this.props.photo.id)
            .then(res => {
                this.props.history.push(`/users/${this.props.currentUser}/photos`)

            })
    }

    render() {
        const photo = this.props.photo;
        const user = this.props.currentUser;
        // console.log(this.props.history)
        if (!photo) {
            return null;
        }
        // console.log(photo.user_id);
        // console.log(user);
        return(
            <div className="photo-show">
                <div className="photo-show-container">
                    <Link className="back-to-home-btn" to={`/users/${user}/photos`}><img className="back-arrow-icon" src={back_arrow}></img><div className="back-text">Back to Photostream</div></Link>
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