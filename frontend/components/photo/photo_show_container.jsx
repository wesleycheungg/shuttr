import React from 'react';
import { connect } from 'react-redux'
import { fetchPhoto, deletePhoto } from '../../actions/photos_actions';
import PhotoShow from './photo_show'

const mSTP = (state, ownProps) => {
    return ({
        photo: state.entities.photos[ownProps.match.params.id],
        photoId: ownProps.match.params.id,
        currentUser: state.session.currentUserId
    })

}

const mDTP = (dispatch) => ({
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
    deletePhoto: (photoId) => dispatch(deletePhoto(photoId))
})

export default connect(mSTP, mDTP)(PhotoShow)