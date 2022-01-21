import React from 'react'
import { Link } from 'react-router-dom';
import trash from 'assets/images/trash.png';

class CommentShowItem extends React.Component{
    constructor(props){
        super(props)

        this.onDelete = this.onDelete.bind(this)
    }

    onDelete() {
        const {comment, deleteComment} = this.props
        deleteComment(comment.id)
    }

    render(){
        const {comment, currentUserId} = this.props
        return (
            <div className="comment-show-container">
                <div className="comment-username">{comment.username}</div>
                <div className="comment-body-container">
                    <div className="comment-body">{comment.body} </div>
                    {/* <p className="comment-timestamp">{comment.posted_time_ago}</p> */}
                    {/* {currentUserId === comment.user_id && <button className="comment-delete-icon" onClick={this.onDelete}>x</button>} */}
                    {currentUserId === comment.user_id && <img className="comment-delete-icon" src={trash} alt="trash" onClick={this.onDelete}></img>}
                </div>
            </div>
        )
    }
}

export default CommentShowItem;