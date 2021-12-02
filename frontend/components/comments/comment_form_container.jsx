import { connect } from 'react-redux';
import { createComment, updateComment } from '../../actions/comment_actions';
import CommentForm from '../comments/comment_form';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    photoId: ownProps.match.params.id,
    currentUserId: state.session.currentUserId,
    comments: {
        body: ""
    }
})

const mDTP = (dispatch) => ({
    createComment: (comment, photoId) => dispatch(createComment(comment, photoId)),
    updateComment: (comment) => dispatch(updateComment(comment))
})

export default withRouter(connect(mSTP, mDTP)(CommentForm))