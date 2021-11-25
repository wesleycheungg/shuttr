import React from 'react';
import { connect } from 'react-redux';
import { login, signup, remove } from '../../actions/session_actions';
import SessionForm from './session_form'
import { Link } from 'react-router-dom';

const mSTP = ({ errors, session }) => ({
    errors: errors.session,
    formType: 'Log In',
    link: <Link to='/signup'>Sign Up here.</Link>,
    sessionId: session.id
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    
})

export default connect(mSTP, mDTP)(SessionForm)