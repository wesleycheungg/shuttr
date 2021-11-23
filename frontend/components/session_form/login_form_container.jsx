import React from 'react';
import { connect } from 'react-redux';
import { login, signup, remove } from '../../actions/session_actions';
import SessionForm from './session_form'

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Log In',
    link: <Link to='/signup'>Sign Up here.</Link>
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    
})

export default connect(mSTP, mDTP)(SessionForm)