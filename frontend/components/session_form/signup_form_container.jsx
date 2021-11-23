import React from 'react';
import { connect } from 'react-redux';
import { login, signup, remove } from '../../actions/session_actions';
import SessionForm from './session_form'
import { Link } from 'react-router-dom';

const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: 'Sign Up',
    link: <Link to='/login'>Click here to Log In.</Link>
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
})

export default connect(mSTP, mDTP)(SessionForm)