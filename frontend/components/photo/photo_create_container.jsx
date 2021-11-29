import React from 'react';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photos_actions';
import PhotoCreate from './photo_create'

const mSTP = (state) => ({

})

const mDTP = (dispatch) => ({
    createPhoto: (photo) => dispatch(createPhoto(photo))
})

export default connect(mSTP, mDTP)(PhotoCreate)