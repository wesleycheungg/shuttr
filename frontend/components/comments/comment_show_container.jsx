import { connect } from 'react-redux';
import { deleteComment, fetchPhotoComments } from '../../actions/comment_actions';
import CommentShow from '../comments/comment_show'

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.currentUserId,
    comments: Object.values(state.entities.comments),
    photoId: ownProps.match.params.id
})

const mDTP = (dispatch) => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchPhotoComments: (photoId) => dispatch(fetchPhotoComments(photoId))
})

export default connect(mSTP, mDTP)(CommentShow)