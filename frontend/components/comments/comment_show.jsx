import React from 'react';

class CommentShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(this.props.photoId)
        this.props.fetchPhotoComments(this.props.photoId)
    }

    render(){
        let commentShowItems = this.props.comments.map((comment) => {
            return <CommentShowItem key={comment.id} comment={comment} currentUser={this.props.currentUserId} deleteComment={this.props.deleteComment}/>
        })
        return(
            <div>
                <div>Comments </div>
                {commentShowItems}
            </div>
        )
    }
}

export default CommentShow