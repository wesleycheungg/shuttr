import React from 'react';

class PhotoCreate extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user_id: null,
            img_url: "",
            photoFile: null,
            photoUrl: null
        }
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
        formData.append('photo[img_url]', this.state.img_url);
        if (this.state.photoFile) {
            formData.append('photo[photo]', this.state.photoFile);
        }

        this.props.createPhoto(formData).then( (res) => {
            this.props.history.push(`/photos/${res.photo.id}`)
        });

        // $.ajax({
        //     url: '/api/photos',
        //     method: 'POST',
        //     data: formData,
        //     contentType: false,
        //     processData: false
        // }).then(
        //     (response) => this.props.history.push("/"),
        //     (response) => {
        //         console.log(response.responseJSON)
        //     }
        // );
    }

    render () {
        console.log(this.state);
        const preview = this.state.photoUrl ? <img className="preview-img" src={this.state.photoUrl} /> : null;
        return(
            <div className="upload-container-box">
                <form className="upload-container" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="choose-photo-btn" type="file" 
                        onChange={this.handleFile.bind(this)} />
                    {preview}
                    <button className="upload-photo-btn">Upload Photo</button>
                </form>
            </div>
        )
    }
}

export default PhotoCreate;