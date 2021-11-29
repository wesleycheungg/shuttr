import React from 'react';
import { connect } from 'react-redux'
import { fetchPhoto } from '../../actions/photos_actions';
import PhotoShow from './photo_show'

const mSTP = (state, ownProps) => ({
    photo: state.entities.photos[ownProps.match.params.postId],
    photoId: ownProps.match.params.id,

})

const mDTP = (dispatch) => ({
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId))
})

export default connect(mSTP, mDTP)(PhotoShow)