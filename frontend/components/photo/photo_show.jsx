import React from 'react';

class PhotoShow extends React.Component{
    constructor(props){
        super(props)
    }

    componenetDidMount() {
        this.props.fetchPhoto(this.props.photoId)
    }

    render() {
        // const photoUrl = this.props.photo.photoUrl;
        return(
            <div>
                <p>photo show page</p>
                <img className="photo-show-img" alt=""></img>
            </div>
        )
    }
}

export default PhotoShow;