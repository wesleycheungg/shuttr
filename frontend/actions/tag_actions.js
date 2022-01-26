import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_TAG = 'RECEIVE_TAG';

const receiveTag = (tag) => ({
    type: RECEIVE_TAG,
    tag
})

export const createTag = (tag) => {
    return TagApiUtil.createTag(tag)
        .then((tag) => dispatchEvent(receiveTag(tag)))
}