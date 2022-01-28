import React from 'react';
import { connect } from 'react-redux'
import { fetchPhoto, deletePhoto } from '../../actions/photos_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import PhotoShow from './photo_show'

import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return ({
        photo: state.entities.photos[ownProps.match.params.id],
        photoId: ownProps.match.params.id,
        currentUser: state.session.currentUserId,
        // fullName: state.entities.users[state.entities.photos[ownProps.match.params.id].user_id].full_name
        // fullName: state.entities.users[ownProps.match.params.user_id]
        users: state.entities.users
    })

}

const mDTP = (dispatch) => ({
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
    deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default withRouter(connect(mSTP, mDTP)(PhotoShow))