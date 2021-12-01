import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import photoReducer from "./photos_reducer";
import albumsReducer from "./albums_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    photos: photoReducer,
    albums: albumsReducer
})

export default entitiesReducer;