import React from 'react';

const TagShowItem = (props) => {
    if(props.currentUserId === props.photo.user_id){
        return(
            <div className="tag-items">
                {props.tag.name}
            </div>
        )
    } else {
        return (
            <div className="tag-items">
                {props.tag.name}
            </div>
        )
    }
}

export default TagShowItem;