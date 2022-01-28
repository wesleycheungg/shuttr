import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../actions/photos_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import PhotoIndex from './photo_index'

const mSTP = (state) => ({
    photos: Object.values(state.entities.photos),
    currentUser: state.session.currentUserId,
    users: state.entities.users
})

const mDTP = (dispatch) => ({
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mSTP, mDTP)(PhotoIndex)