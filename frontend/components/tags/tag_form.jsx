import React from 'react';

class TagForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: ""
        }


    }

    updateTag(e){
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createTag(thats.state).then(
            this.setState({name: ""})
        )
    }

    render(){
        return(
            <>
                <form className="tag-form-container" onSubmit={this.handleSubmit}>
                    <textarea
                        className="tag-form-body"
                        onChange={this.updateTag}
                        placeholder="Add a tag"
                        value={this.state.name}
                    >
                    </textarea>
                    <div className="tag-submit-btn-container">
                        <input className="tag-submit-btn" type="submit" value="Add"></input>
                    </div>
                </form>
            </>
        )
    }
}

export default TagForm;