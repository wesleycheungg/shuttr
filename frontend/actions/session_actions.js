import * as SessionApiUtil from "../util/session_api_util"

//action constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS'



//action creators returns actions
const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS
})

//thunk action creators -> return functions
export const login = (user) => dispatch => {
    return SessionApiUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
              errors => dispatch(receiveSessionErrors(errors.responseJSON)))
}

export const signup = (user) => dispatch => {
    return SessionApiUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
              errors => dispatch(receiveSessionErrors(errors.responseJSON)))
}

export const logout = () => dispatch => { 
    return SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
}