import { connect } from 'react-redux';
import { createTag } from '../../actions/tag_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    photoId: ownProps.match.params.id,
    currentUserId: state.session.currentUserId,
    tags: {
        name: ""
    }
})

const mDTP = (dispatch) => ({
    createTag: (tag) => dispatch(createTag(tag))
})

export default withRouter(connect(mSTP, mDTP)(TagForm))
