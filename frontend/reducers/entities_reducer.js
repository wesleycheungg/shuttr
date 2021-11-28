import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import photoReducer from "./photos_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    photos: photoReducer
})

export default entitiesReducer;