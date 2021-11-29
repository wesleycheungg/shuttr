import { RECEIVE_PHOTO, RECEIVE_PHOTO_ERRORS } from "../actions/photos_actions";

const photoErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_PHOTO_ERRORS:
            return action.errors;
        case RECEIVE_PHOTO:
            return [];
        default:
            return oldState;
    }

}

export default photoErrorsReducer;