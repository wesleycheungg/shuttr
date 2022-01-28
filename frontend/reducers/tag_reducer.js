import { RECEIVE_ALL_TAGS, RECEIVE_TAG, REMOVE_TAG } from "../actions/tag_actions";

const tagReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    // debugger
    switch (action.type) {
        case RECEIVE_ALL_TAGS:
            // nextState = action.tags;
            // return nextState;
            return action.tags
        case RECEIVE_TAG:
            nextState[action.tag.id] = action.tag;
            return nextState;
        case REMOVE_TAG:
            delete nextState[action.tagId];
            return nextState;
        default: 
            return oldState;
    }
}

export default tagReducer;