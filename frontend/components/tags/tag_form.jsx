import React from 'react';

class TagForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            photo_id: this.props.photoId,
            name: ""
        }

        this.updateName = this.updateName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateName(e){
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        // this.props.createTag(this.state)
        this.props.createTag(this.state).then(
            this.setState({name: ""})
        )
    }

    render(){
        const tagForm = this.props.currentUserId === this.props.photo[0].user_id ? 
            <form className="tag-form-container" onSubmit={this.handleSubmit}>
                <input
                    className="tag-form-body"
                    onChange={this.updateName}
                    placeholder="Add a tag"
                    value={this.state.name}
                >
                </input>
                <div className="tag-submit-btn-container">
                    <input className="tag-submit-btn" type="submit" value="Add"></input>
                </div>
            </form> : ""
        return(
            <>
                {tagForm}
            </>
        )
    }
}

export default TagForm;