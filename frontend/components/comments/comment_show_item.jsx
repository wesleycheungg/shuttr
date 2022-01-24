import React from 'react'
import { Link } from 'react-router-dom';
import trash from 'assets/images/trash.png';
import edit from 'assets/images/edit.png';

class CommentShowItem extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            body: this.props.comment.body,
            updateComment: false
        }
        this.onDelete = this.onDelete.bind(this);
        this.toggleUpdateComment = this.toggleUpdateComment.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggleUpdateComment() {
        this.setState({ updateComment: !this.state.updateComment })
    }

    updateBody(e){
        this.setState({
            body: e.target.value
        })
    }

    onDelete() {
        const {comment, deleteComment} = this.props
        deleteComment(comment.id)
    }

    handleSubmit(e){
        e.preventDefault();
        const comment = {
            body: this.state.body,
            user_id: this.props.comment.user_id,
            id: this.props.comment.id
            // photo_id: this.props.comment.photo_id
        }

        this.props.updateComment(comment, this.props.comment.id);
        this.toggleUpdateComment();
    }

    render(){
        console.log(this.state)
        
        const {comment, currentUserId} = this.props

        console.log(this.props.comment.id)



        const updateCommentInput = this.state.updateComment ?
            <form onSubmit={this.handleSubmit}>
                <textarea
                    className="comment-body"
                    onChange={this.updateBody}
                    placeholder={this.state.body}
                    value={this.state.body}/>
                <input className="comment-submit-btn" type="submit" value="Done"></input>
            </form> : this.props.comment.body

        //users can edit comments that they created
        const editComment = currentUserId === comment.user_id ? 
            <img className="comment-edit-icon" src={edit} alt="edit" onClick={this.toggleUpdateComment}>
            </img> : "";



        return (
            <div className="comment-show-container">
                <div className="comment-username">{comment.username}</div>
                <div className="comment-body-container">
                    {/* <div className="comment-body">{comment.body} </div> */}
                    {updateCommentInput}
                    {editComment}
                    {currentUserId === comment.user_id && <img className="comment-delete-icon" src={trash} alt="trash" onClick={this.onDelete}></img>}
                </div>
            </div>
        )
    }
}

export default CommentShowItem;