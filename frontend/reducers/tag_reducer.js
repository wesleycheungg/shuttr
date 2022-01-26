import { RECEIVE_TAG } from "../actions/tag_actions";

const tagReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_TAG:
            nextState[action.tag.id] = actions.tag;
            return nextState;
        default: 
            return oldState;
    }
}

export default tagReducer;