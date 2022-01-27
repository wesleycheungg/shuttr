import React from 'react';

const TagShowItem = (props) => {
    if(props.currentUserId === props.photo.user_id){
        return(
            <div>
                {props.tag.name}
            </div>
        )
    } else {
        return (
            <div>
                {props.tag.name}
            </div>
        )
    }
}

export default TagShowItem;