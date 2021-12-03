import React from 'react';
import CommentShowItem from './comment_show_item';
import CommentFormContainer from './comment_form_container';

class CommentShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(this.props.photoId)
        this.props.fetchPhotoComments(this.props.photoId)
    }

    render(){
        let CommentShowItems = this.props.comments.map((comment) => {
            return <CommentShowItem key={comment.id} comment={comment} currentUserId={this.props.currentUserId} deleteComment={this.props.deleteComment}/>
        })
        return(
            <div className="comment-container">
                <div className="comments-header">Comments</div>
                {CommentShowItems}
                <CommentFormContainer />
            </div>
        )
    }
}

export default CommentShow