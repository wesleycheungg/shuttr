import React from 'react';

class AlbumForm extends React.Component{
    constructor(props){
        super(props)

        this.state = this.props.album

        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
        this.updateDescription = this.updateDescription.bind(this)
    }

    componentDidMount() {
        // this.props.fetchAllPhotos();
    }

    updateTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    updateDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e){
        // debugger
        console.log(this.state)
        e.preventDefault();
        this.props.createAlbum(this.state)
            .then( res => this.props.history.push(`/albums`))
    }

    render(){
        return(
            <div className="album-form-container">
                <form className= "album-form" onSubmit={this.handleSubmit}>
                    <div className="album-form-header">Create New Album</div>
                    <input
                        className="album-form-title"
                        type="text"
                        // onChange={this.updateTitle}
                        onChange={this.update('title')}
                        placeholder="Title"
                    ></input>
                    <br></br>
                    <textarea
                        className="album-form-description"
                        // onChange={this.updateDescription}
                        onChange={this.update('description')}
                        placeholder="Description"
                    ></textarea>
                    <div>
                        <input
                            className= "album-form-btns"
                            type="submit"
                            value="Create Album!"
                        ></input>
                    </div>

                </form>

            </div>
        )
    }
}

export default AlbumForm