import { connect } from 'react-redux';
import { deleteComment, fetchPhotoComments } from '../../actions/comment_actions';
import CommentShow from '../comments/comment_show'

const mSTP = (state) => ({
    currentUserId: state.session.currentUserId,
    comments: Object.values(state.entities.comments),
    photoId: state.entities.photos.id
})

const mDTP = (dispatch) => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchPhotoComments: (photoId) => dispatch(fetchPhotoComments(photoId))
})

export default connect(mSTP, mDTP)(CommentShow)