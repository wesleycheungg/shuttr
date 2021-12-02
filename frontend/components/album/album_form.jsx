import React from 'react';

class AlbumForm extends React.Component{
    constructor(props){
        super(props)

        this.photos = []

        this.state = this.props.album

        // this.state = {
        //     album: {
        //         title: "",
        //         description: "",
        //     }
            // photos: []
        // }


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
                <h2>Create new album</h2>
                <form className= "album-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        // onChange={this.updateTitle}
                        onChange={this.update('title')}
                        placeholder="Title"
                    ></input>
                    <textarea
                        // onChange={this.updateDescription}
                        onChange={this.update('description')}
                        placeholder="Description"
                    ></textarea>
                    <div className="album-form-btns">
                        <input
                            type="submit"
                            value="create album"
                        ></input>
                    </div>

                </form>

            </div>
        )
    }
}

export default AlbumForm