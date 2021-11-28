import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../actions/photos_actions';
import PhotoIndex from './photo_index'

const mSTP = (state) => ({
    photos: Object.values(state.entities.photos),
    users: state.entities.users
})

const mDTP = (dispatch) => ({
    fetchAllPhotos: () => dispatch(fetchAllPhotos())
})

export default connect(mSTP, mDTP)(PhotoIndex)