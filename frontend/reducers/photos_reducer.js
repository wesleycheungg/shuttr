import React from "react";
import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from "../actions/photos_actions";

const photoReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_PHOTOS:
            return action.photos;
        case RECEIVE_PHOTO:
            nextState[action.photo.id] = action.photo;
            return nextState
        default:
            return oldState;
    }
} 

export default photoReducer;