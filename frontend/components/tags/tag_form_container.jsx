import { connect } from 'react-redux';
import { createTag } from '../../actions/tag_actions';
import { withRouter } from 'react-router-dom';

import TagForm from './tag_form';

const mSTP = (state, ownProps) => ({
    photoId: ownProps.match.params.id,
    currentUserId: state.session.currentUserId,
    photo: Object.values(state.entities.photos),
    tags: {
        name: ""
    }
    
})

const mDTP = (dispatch) => ({
    createTag: (tag) => dispatch(createTag(tag))
})

export default withRouter(connect(mSTP, mDTP)(TagForm))
