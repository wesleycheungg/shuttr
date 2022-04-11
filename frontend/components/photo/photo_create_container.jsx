import React from 'react';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photos_actions';
import { fetchUserAlbums } from '../../actions/album_actions'
import PhotoCreate from './photo_create'

const mSTP = (state) => ({
    currentUserId: state.session.currentUserId,
    albums: state.entities.albums,
    photo: {
        album_id: "",
        img_url: "",
    }
})

const mDTP = (dispatch) => ({
    createPhoto: (photo) => dispatch(createPhoto(photo)),
    fetchUserAlbums: (userId) => dispatch(fetchUserAlbums(userId))
})

export default connect(mSTP, mDTP)(PhotoCreate)