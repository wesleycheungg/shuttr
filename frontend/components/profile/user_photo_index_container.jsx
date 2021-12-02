import React from 'react'
import { connect } from 'react-redux'
import UserPhotoIndex from './user_photo_index'
import { fetchUserPhotos } from '../../actions/photos_actions'

const mSTP = (state, ownProps) => ({
    userId: state.session.currentUserId,
    photos: Object.values(state.entities.photos)
    
})

const mDTP = (dispatch) => ({
    fetchUserPhotos: (userId) => dispatch(fetchUserPhotos(userId))
})

export default connect(mSTP, mDTP)(UserPhotoIndex)