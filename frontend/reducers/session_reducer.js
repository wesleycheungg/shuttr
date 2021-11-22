import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullUser = Object.freeze ({
    currentUserId: null
})
const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[currentUserId] = action.user.id; // sets id to the action's 'user.id'
            return nextState;
        case LOGOUT_CURRENT_USER:
            return _nullUser; //return user with id set to null
        default:
            return oldState;
    }
}

export default sessionReducer;