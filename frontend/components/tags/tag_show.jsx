import React from 'react';

import TagFormContainer from './tag_form_container';
import TagShowItem from './tag_show_item';

class TagShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllTags(this.props.photoId)
    }

    render(){
        let TagShowItems = this.props.tags.map((tag) => {
            return <TagShowItem 
                key={tag.id}
                tag={tag}
                currentUserId={this.props.currentUserId}
                photo={this.props.photo}
                deleteTag={this.props.deleteTag}
            />
        })
        return(
            <>
                <div className="tag-container">
                    <div className="line"></div>
                    <div className="tag-header">Tags</div>
                    <ul className="tags-items-list">
                        {TagShowItems}
                    </ul>
                    <TagFormContainer/>

                </div>
            </>
        )
    }
}

export default TagShow;