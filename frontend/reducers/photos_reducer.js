import { RECEIVE_ALL_PHOTOS } from "../actions/photos_actions";

const photoReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_PHOTOS:
            return action.photos;
        default:
            return oldState;
    }
} 

export default photoReducer;