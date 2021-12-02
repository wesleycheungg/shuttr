import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_PHOTO_COMMENTS = 'RECEIVE_PHOTO_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

const receiveComments = (comments) => ({
    type: RECEIVE_PHOTO_COMMENTS,
    comments
})

const receiveComment = (comment) =>  ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = (comment) =>  ({
    type: REMOVE_COMMENT,
    comment
})

export const fetchPhotoComments = (photoId) => (dispatch) => {
    return CommentAPIUtil.fetchPhotoComments(photoId)
        .then((comments) => dispatch(receiveComments(comments)))
}

export const fetchComment = (commentId) => (dispatch) => {
    return CommentAPIUtil.fetchComment(commentId)
        .then((comment) => dispatch(receiveComment(comment)))
}

export const createComment = (comment, photoId) => (dispatch) => {
    return CommentAPIUtil.createComment(comment, photoId)
        .then((newComment) => dispatch(receiveComment(newComment)))
}

export const updateComment = (comment) => (dispatch) => {
    return CommentAPIUtil.updateComment(comment)
        .then((updatedComment) => dispatch(receiveComment(updatedComment)))
}

export const deleteComment = (commentId) => (dispatch) => {
    return CommentAPIUtil.deleteComment(commentId)
        .then((comment) => dispatch(removeComment(comment)))
}