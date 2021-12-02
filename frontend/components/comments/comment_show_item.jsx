import React from 'react'
import { Link } from 'react-router-dom';

const CommentShowItem = (props) => {
    const photoUrl = this.props
    return (
        <div className="comment">
            <div>{props.comment.username}</div>
            <div>{props.comment.body}</div>
        </div>
    )
}

export default CommentShowItem;