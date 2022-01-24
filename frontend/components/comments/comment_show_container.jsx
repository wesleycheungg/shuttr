import { connect } from 'react-redux';
import { deleteComment, fetchPhotoComments, updateComment } from '../../actions/comment_actions';
import CommentShow from '../comments/comment_show'
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.currentUserId,
    comments: Object.values(state.entities.comments),
    photoId: ownProps.match.params.id
})

const mDTP = (dispatch) => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchPhotoComments: (photoId) => dispatch(fetchPhotoComments(photoId)),
    updateComment: (comment) => dispatch(updateComment(comment))
})

export default withRouter(connect(mSTP, mDTP)(CommentShow))