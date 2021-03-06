import React from 'react';
import { Link } from 'react-router-dom';

class PhotoCreate extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user_id: this.props.currentUserId,
            img_url: "",
            album_id: "",
            photoFile: null,
            photoUrl: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.changeAlbum = this.changeAlbum.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
    }

    componentDidMount(){
        this.props.fetchUserAlbums(this.props.currentUserId)
    }

    changeAlbum(e){
        this.setState({
            album_id: e.target.value
        })
    }

    updateTitle(e){
        this.setState({
            img_url: e.target.value
        })
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo[user_id]', this.state.user_id);
        formData.append('photo[album_id]', this.state.album_id)
        formData.append('photo[img_url]', this.state.img_url);
        // console.log(formData)
        
        if (this.state.photoFile) {
            formData.append('photo[photo]', this.state.photoFile);
        }

        this.props.createPhoto(formData).then( (res) => {
            this.props.history.push(`/photos/${res.photo.id}`)
        });
    }

    render () {
        // console.log(this.state);
        let albumList;
        let albums = Object.values(this.props.albums)
        if(albums[0]) {
            albumList = albums.map( (album) => {
                return (
                    <option key={album.id} className="select-boxes-options" value={album.id}>{album.title}</option>
                )
            })
        }
        const preview = this.state.photoUrl ? <img className="preview-img" src={this.state.photoUrl} /> : null;
        return(
            <div className="upload-container-box">
                <form className="upload-container" onSubmit={this.handleSubmit}>
                    {/* <div className="upload-form-header">Upload Photo!</div> */}

                    <label className="upload-form-header" for="file" onChange={this.handleFile}>Click to select a file to upload.</label>
                    <input id="file" className="choose-photo-btn" type="file" onChange={this.handleFile} />

                    {preview}

                    <div>
                        <input
                            type="text"
                            className={(this.state.photoFile === null) ? "title-field-hidden" : "title-field"}
                            onChange={this.updateTitle}
                            placeholder="Title"
                        ></input>
                    </div>
                    
                    {/* <div className="choose-album-btn">Choose an Album to Upload to</div> */}

                    <div className={(this.state.photoFile === null) ? "select-boxes-hidden" : "select-boxes"}>
                        <select onChange={this.changeAlbum} value={this.state.value}>
                            <option>Select a Album</option>
                            {albumList ? albumList : ""}
                        </select>
                    </div>
                    
                    <div className={(this.state.photoFile === null) ? "create-album-link-hidden" : "create-album-link"}>
                        <div>Want to create new album?<Link className="album-link" to={`/albums/new`}>Click here.</Link></div>
                    </div>


                    <div>
                        <button className={(this.state.photoFile === null) ? "upload-photo-btn-hidden" : "upload-photo-btn"}>Upload Photo</button>
                        {/* <button className="upload-photo-btn">
                            Upload Photo
                        </button> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default PhotoCreate;