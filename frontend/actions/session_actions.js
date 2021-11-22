import * as SessionApiUtil from "../util/session_api_util"

//action constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
// export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS'


//action creators
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

// const removeSessionErrors = () => ({
//     type: REMOVE_SESSION_ERRORS
// })

export const login = (user) => dispatch => {
    return SessionApiUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
              errors => dispatch(receiveSessionErrors(errors)))
}

export const signup = (user) => dispatch => {
    return SessionApiUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
              errors => dispatch(receiveSessionErrors(errors)))
}

export const logout = () => dispatch => {
    return SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
}