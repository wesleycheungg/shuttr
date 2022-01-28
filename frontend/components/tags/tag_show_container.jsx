import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchAllTags, } from '../../actions/tag_actions';

import TagShow from './tag_show';

const mSTP = (state, ownProps) => ({
    tags: Object.values(state.entities.tags),
    photoId: ownProps.match.params.id,
    currentUserId: state.session.currentUserId,
    photo: state.entities.photos
})

const mDTP = (dispatch) => ({
    fetchAllTags: photoId => dispatch(fetchAllTags(photoId)),
    deleteTag: (tagId, photoId) => dispatch(deleteTag(tagId, photoId))
})

export default withRouter(connect(mSTP, mDTP)(TagShow))