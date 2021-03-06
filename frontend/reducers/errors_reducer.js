import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import photoErrorsReducer from "./photos_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    photo: photoErrorsReducer
});

export default errorsReducer;