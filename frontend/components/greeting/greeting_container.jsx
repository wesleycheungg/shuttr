import { connect } from "react-redux";
import { logout, login, removeSessionErrors } from "../../actions/session_actions";
import Greeting from "./greeting"

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default connect(mSTP, mDTP)(Greeting)