import React from 'react';

class TagShowItem extends React.Component {
    constructor(props) {
        super(props)

        this.onDelete = this.onDelete.bind(this)
    }

    onDelete() {
        const {tag, photo, deleteTag} = this.props;
        deleteTag(tag.id, photo.id)
    }

    render(){
        const {tag, currentUserId, photo} = this.props;
        console.log(currentUserId)
        console.log(photo.user_id)

        const tagIndex = currentUserId === photo.user_id ?
            <div>
                <div className="tag-items">
                    {tag.name}
                </div> 
                <button className="tag-items-delete-btn" onClick={this.onDelete}>x</button>
            </div> :
            <div className="tag-items">
                {tag.name}
            </div>

        return(
            <>
                {tagIndex}
            </>
        )
    }
}
export default TagShowItem;