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
        return(
            <div>
                Commments comments comments
            </div>
        )
    }
}

export default CommentShow