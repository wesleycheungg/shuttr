import React from 'react';
import CommentFormItem from './comment_form_item';

class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: "",
            user_id: this.props.currentUserId
        }

        this.updateBody = this.updateBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateBody(e){
        this.setState({
            body: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createComment(this.state, this.props.photoId).then(
            this.setState({body: "" })
        )
    }

    render(){
        return(
            <div>
                <form className="comment-form-container" onSubmit={this.handleSubmit}>
                    <textarea
                        className="comment-form-body"
                        onChange={this.updateBody}
                        placeholder="Add your comment here"
                        value={this.state.body}>
                    </textarea>
                    <br></br>
                    <input className="comment-submit-btn" type="submit" value="Comment"></input>
                </form>
            </div>
        )
    
    }
}

export default CommentForm