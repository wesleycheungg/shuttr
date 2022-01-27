import React from 'react';
import { Link } from 'react-router-dom';

import CommentShowContainer from '../comments/comment_show_container';
import TagShowContainer from '../tags/tag_show_container';


import back_arrow from 'assets/images/left-icon.png';
import trash from 'assets/images/trash-w.png';


class PhotoShow extends React.Component{
    constructor(props){
        super(props)

        this.onDelete = this.onDelete.bind(this)
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.photoId);
        // this.props.fetchAllUsers();
    }

    onDelete(e) {
        e.preventDefault(); 
        // const {deletePhoto, photo} = this.props
        if(window.confirm("Are you sure you want to delete this photo?")){
            this.props.deletePhoto(this.props.photo.id)
                .then(res => {
                    this.props.history.push(`/users/${this.props.currentUser}/photos`)
                })
        }
    }

    render() {
        const photo = this.props.photo;
        const user = this.props.currentUser;
        // console.log(this.props.history)
        if (!photo) {
            return null;
        }
        let link;
        let backText;
        if(photo.user_id === user){
            link = `/users/${user}/photos`
            backText = `Back to Photostream`
        } else {
            link = `/`
            backText = `Back to Explore`
        }

        return(
            <div className="photo-show">
                <div className="photo-show-container">
                    <div className="photo-back-link-container">
                        <Link className="back-to-home-btn" to={link}><img className="back-arrow-icon" src={back_arrow}></img><div className="back-text">{backText}</div></Link>
                    </div>
                    <img className="photo-show-img" src={photo.photoUrl} alt=""></img>
                    <div className="photo-show-title">{photo.img_url}</div>
                    {/* <button className={(photo.user_id === user ? "delete-photo": "delete-photo-hidden")} onClick={this.onDelete}>Delete Photo</button> */}
                    <img className={(photo.user_id === user ? "delete-photo": "delete-photo-hidden")} src={trash} alt="trash" onClick={this.onDelete}></img>
                </div>
                <div>{user.full_name}</div>
                
                <div className="photo-show-container-2">
                    <CommentShowContainer />
                    <TagShowContainer />
                </div>

            </div>
        )
    }
}

export default PhotoShow;