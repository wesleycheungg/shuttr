import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_TAG = 'RECEIVE_TAG';
export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS'
export const REMOVE_TAG = 'REMOVE_TAG'

const receiveAllTags = (tags) => ({
    type: RECEIVE_ALL_TAGS,
    tags
})

const receiveTag = (tag) => ({
    type: RECEIVE_TAG,
    tag
})

const removeTag = (tagId) => ({
    type: REMOVE_TAG,
    tagId
})



export const createTag = (tag) => (dispatch) => {
    return TagApiUtil.createTag(tag)
        .then((tag) => dispatch(receiveTag(tag)))
}

export const fetchAllTags = (photoId) => dispatch => {
    return TagApiUtil.fetchTags(photoId)
        .then((tags) => dispatch(receiveAllTags(tags)))
}

export const deleteTag = (tagId, photoId) => dispatch => {
    return TagApiUtil.deleteTag(tagId, photoId)
        .then((tag) => dispatch(removeTag(tagId)))
}