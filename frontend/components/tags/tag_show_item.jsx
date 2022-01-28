import React from 'react';

class TagShowItem extends React.Component {
    constructor(props) {
        super(props)

        this.onDelete = this.onDelete.bind(this)
    }

    onDelete() {
        const {tag, photo, deleteTag} = this.props;
        deleteTag(tag.id, photo[0].id)
    }

    render(){
        const {tag, currentUserId, photo, photoId} = this.props;
        console.log(photo[0].id)

        const tagIndex = currentUserId === photo[0].user_id ?
            <div className="tag-item-container">
                <div className="tag-items">
                    {tag.name}
                    <button className="tag-items-delete-btn" onClick={this.onDelete}>x</button>
                </div> 
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